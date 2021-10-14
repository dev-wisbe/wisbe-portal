<template>
  <v-app>
    <div id="login">
      <div class="login-box">
        <div class="login-title">
          <div class="logo">
            <img
              class="image-logo"
              @click="$router.push('/')"
              width="194"
              :src="require('../assets/wisbe-logo-text.png')"
            />
          </div>
          <h1>Bem vindo de volta a Wisbe</h1>
          <h3>
            Para efetuar o login, por favor, entre com os dados logo abaixo.
          </h3>
        </div>

        <div class="auth-input">
          <v-text-field
            label="E-mail"
            outlined
            color="#6E38F7"
            type="email"
            v-model="auth.username"
            @keyup.enter="checkForm(0)"
            :rules="[(v) => !!v || 'E-mail obrigatório']"
            required
          ></v-text-field>
          <v-text-field
            label="Senha"
            outlined
            color="#6E38F7"
            type="password"
            v-model="auth.password"
            @keyup.enter="checkForm(0)"
            :rules="[(v) => !!v || 'Senha obrigatória']"
            required
          ></v-text-field>

        </div>
        <div class="auth-actions">
          <v-btn
            depressed
            color="#6E38F7"
            @click="submitLogin"
          >
            <span v-if="!loading">Acessar</span>
          </v-btn>
          <v-btn
            text
            color="#6E38F7"
            @click="checkForm(0)"
          >
            <span v-if="!loading">Esqueci a senha</span>
          </v-btn>
        </div>

        <div class="login-links">
          <p @click="$router.push('/register')">
            Ainda não tem uma conta? <span class="click-link">Cadastre-se</span>
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

export default {
  name: "Login",

  data: () => ({
    auth: {
      username: "",
      password: "",
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
      successLogin: 'Login Realizado com sucesso',
      changePasswordRequired: 'Troca da primeira senha requerida para este usuário',
    }
  }),
  methods: {
    async validateForm() {
      if (!this.auth.username || !this.auth.password) {
        this.handleSnackbar('error', this.messageInfo.emptyField)
        return false
      }

      return true
    },
    async submitLogin() {
      const isValid = await this.validateForm();
      if(isValid) {
        this.handleSnackbar('success', this.messageInfo.successLogin)
      }
    },
    handleSnackbar(type, message) {
      this.snackbar.message = message
      this.snackbar.type = type
      this.snackbar.visible = true
    }
  }
};

</script>

<style lang="sass" scoped>
$breakpoint-tablet: 900px
$breakpoint-mobile: 450px
$breakpoint-laptop: 1250px

#login
  display: flex
  height: 100vh
  flex-direction: row

.login-box
  @media screen and (max-width: $breakpoint-tablet)
    width: 100%

  background-color: white
  min-height: 100vh
  padding-left: 9%
  padding-right: 9%
  padding-top: 90px
  margin: auto

  @media screen and (max-width: $breakpoint-mobile)

  @media screen and (min-width: $breakpoint-tablet)

  .logo
    margin-top: 20px
    margin-bottom: 40px

  .login-title
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

  .login-links
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

  .auth-actions
    display: grid
    grid-template-columns: 1fr 1fr
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
