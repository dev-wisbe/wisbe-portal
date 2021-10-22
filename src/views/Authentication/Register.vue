<template>
  <v-app>
    <div id="register">
      <div class="register-box">
        <div class="register-title">
          <div class="logo">
            <img
              class="image-logo"
              width="194"
              :src="require('@/assets/wisbe-logo-text.png')"
              @click="$router.push('/')"
            />
          </div>
          <h1>Bem vindo a Wisbe</h1>
          <h3>
            Comece a aprender o que você quiser junto com a Wisbe.
          </h3>
        </div>

        <div class="auth-input">
          <v-text-field
            label="Nome Completo"
            outlined
            color="#6E38F7"
            type="email"
            v-model="auth.fullname"
            :rules="[(v) => !!v || 'Nome obrigatório']"
            required
          />
          <v-text-field
            label="E-mail"
            outlined
            color="#6E38F7"
            type="email"
            v-model="auth.username"
            :rules="[(v) => !!v || 'E-mail obrigatório']"
            required
          />
          <v-text-field
            label="Senha"
            outlined
            color="#6E38F7"
            type="password"
            v-model="auth.password"
            :rules="[(v) => !!v || 'Senha obrigatória']"
            required
          />
          <v-text-field
            label="Confirmar Senha"
            outlined
            color="#6E38F7"
            type="password"
            v-model="auth.confirmPassword"
            :rules="[(v) => !!v || 'Confirmação de senha obrigatória']"
            required
          />

        </div>
        <div class="register-actions">
          <v-btn
            block
            depressed
            color="#6E38F7"
            @click="submitRegister"
          >
            <span v-if="!loading">Cadastrar</span>
          </v-btn>
        </div>

        <div class="register-links">
          <p @click="$router.push('/login')">
            Você já tem uma conta? <span class="click-link">Acessar</span>
          </p>
        </div>
      </div>

      <div class="img-box" v-if="$mq !== 'mobile' && $mq !== 'tablet'"/>
    </div>

    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.type"
      top
      timeout="3000"
    >
      <span>{{ snackbar.message }}</span>
      <template v-slot:action="{ attrs }">
        <v-btn dark text @click="snackbar.visible = false" v-bind="attrs">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "register",

  data: () => ({
    auth: {
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    loading: false,
    snackbar: {
      visible: false,
      message: '',
      type: 'success',
    },
    messageInfo: {
      emptyField: 'Preencha todos os dados para prosseguir',
      invalidUserPassword: 'Usuário ou senha incorretos',
      wrongPasswordConfirmation: 'Senhas não conferem',
      successRegister: 'Cadastro Realizado com sucesso',
      registerError: 'Houve um erro ao tentar registrar.'
    }
  }),
  methods: {
    ...mapActions('authentication', [
      'submitRegister',
    ]),
    async validateForm() {
      const { fullname, username, password, confirmPassword } = this.auth
      if (!fullname || !username || !password || !confirmPassword) {
        this.snackbar.message = this.messageInfo.emptyField;
        this.snackbar.type ='error';
        this.snackbar.visible = true;

        return false;
      }

      return true;
    },
    async submitRegister() {
      const { username, fullname, password } = this.auth;
      const isValid = await this.validateForm()
      if (isValid) {
        const payload = {
          username,
          password,
          attributes: {
            name: fullname
          }
        }
        try {
          const res = await this.submitRegister(payload)
          console.log(res);
          this.snackbar.message = this.messageInfo.successRegister;
          this.snackbar.type ='success';
          this.snackbar.visible = true;
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        } catch (error) {
          this.snackbar.message = this.messageInfo.registerError;
          this.snackbar.type ='error';
          this.snackbar.visible = true;
        }
        
      }
    }
  }
};

</script>

<style lang="sass" scoped>
$breakpoint-tablet: 900px
$breakpoint-mobile: 450px
$breakpoint-laptop: 1250px

#register
  display: flex
  height: 100vh
  flex-direction: row

.register-box
  @media screen and (max-width: $breakpoint-tablet)
    width: 100%

  background-color: white
  min-height: 100vh
  padding-left: 9%
  padding-right: 9%
  padding-top: 90px
  margin: auto

  @media screen and (min-width: $breakpoint-tablet)

  .logo
    margin-top: 20px
    margin-bottom: 40px

  .register-title
    text-align: center
    display: grid
    grid-template-rows: 1fr

    h1
      font-family: 'Raleway', sans-serif
      color: #313A60
      font-weight: 700
      font-size: 40px
      line-height: 38px
      cursor: default

    h3
      font-family: 'Raleway', sans-serif
      color: #707070
      font-weight: 700
      font-size: 16px
      line-height: 22px
      margin-top: 12px
      cursor: default

  .auth-input
    margin-top: 70px

    .v-btn
      width: 100%
      color: white
      margin-top: 15px

  .register-links
    margin-top: 20px
    p
      font-family: 'Raleway', sans-serif
      font-weight: 400
      font-size: 16px
      color: #313A60
      cursor: defa01362412
      margin-bottom: 10px !important

    .click-link
      font-weight: 600
      cursor: pointer

    @media screen and (max-width: $breakpoint-mobile)
      margin-bottom: 30px

  .register-actions
    display: grid
    grid-template-rows: 1fr
    grid-gap: 10px

    .v-btn
      color: white

.img-box
  width: 55%
  min-height: 100vh
  background: url('~@/assets/background-header-1.jpg')
  background-size: cover
  background-position: center


.v-btn
  .v-progress-linear
    width: 260px

.image-logo:hover
  cursor: pointer
</style>
