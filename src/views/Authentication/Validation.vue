<template>
  <v-app>
    <div id="code-validation">
      <div class="code-validation-box">
        <div class="code-validation-title">
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
          <h3 class="code-info">Entre com o codigo recebido no e-mail</h3>
        </div>
        <div class="auth-input">
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="firstDigit"
            ref="firstInput"
          />
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="secondDigit"
            ref="secondInput"
          />
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="thirdDigit"
            ref="thirdInput"
          />
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="fourthDigit"
            ref="fourthInput"
          />
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="fifthDigit"
            ref="fifthInput"
          />
          <v-text-field
            style="font-size: 32px;"
            outlined
            v-model="sixthDigit"
            ref="sixthInput"
          />
        </div>
        <div class="button-action">
          <Button :loading="authLoading" title="Enviar" variation="primary" :isDisabled="false" @click="sendCode" />
          <Button title="Reenviar código" variation="secondary" :isDisabled="false" />
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
import { mapActions, mapGetters } from 'vuex';
import Button from '@/components/Button/Button.vue';
import { Auth } from 'aws-amplify';

export default {
  components: {
    Button,
  },
  name: "Validation",
  data: () => ({
    firstDigit: null,
    secondDigit: null,
    thirdDigit: null,
    fourthDigit: null,
    fifthDigit: null,
    sixthDigit: null,
    currentInput: 'first',
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
      errorRegister: 'Houve um erro ao tentar registrar.'
    }
  }),
  computed: {
    ...mapGetters('authentication', [
      'authLoading',
      'getRegisterEmail',
      'authLoading'
    ]),
    codeNumber() {
      return `${this.firstDigit}${this.secondDigit}${this.thirdDigit}${this.fourthDigit}${this.fifthDigit}${this.sixthDigit}`
    }
  },
  methods: {
    ...mapActions('authentication', [
      'submitRegister',
      'setLoggedIn',
    ]),
    handleSnackbar(status) {
      const infoMessage = `${status}Register`
      this.snackbar.message = this.messageInfo[infoMessage];
      this.snackbar.type = status;
      this.snackbar.visible = true;
    },
    async sendCode() {
      const { getRegisterEmail, codeNumber } = this
      let status = 'success';
      try {
        await Auth.confirmSignUp(getRegisterEmail.username, codeNumber);
        this.login();
      } catch (error) {
        status = 'error'
        console.log(error.message)
      } finally {
        this.handleSnackbar(status)
      }
    },
    async login() {
      try {
        await Auth.signIn(
          this.getRegisterEmail.username,
          this.getRegisterEmail.password
        );
        await this.setLoggedIn()
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    firstDigit() {
      this.$refs.secondInput.$refs.input.focus()
    },
    secondDigit() {
      this.$refs.thirdInput.$refs.input.focus()
    },
    thirdDigit() {
      this.$refs.fourthInput.$refs.input.focus()
    },
    fourthDigit() {
      this.$refs.fifthInput.$refs.input.focus()
    },
    fifthDigit() {
      this.$refs.sixthInput.$refs.input.focus()
    },
  },
};

</script>

<style lang="sass" scoped>
$breakpoint-tablet: 900px
$breakpoint-mobile: 450px
$breakpoint-laptop: 1250px

#code-validation
  display: flex
  height: 100vh
  flex-direction: row

.code-validation-box
  @media screen and (max-width: $breakpoint-tablet)
    width: 100%

  background-color: white
  min-height: 100vh
  padding-left: 9%
  padding-right: 9%
  margin: auto

  @media screen and (min-width: $breakpoint-tablet)

  .logo
    margin-top: 20px
    margin-bottom: 40px

  .code-validation-title
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

    .code-info
      color: rgba(0, 0, 0, 0.7)
      margin-top: 30px

  .auth-input
    margin-top: 30px
    display: grid
    grid-template-columns: repeat(6, 50px)
    grid-gap: 10px
    place-content: center

  .code-validation-links
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

  .code-validation-actions
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

.button-action
  display: grid
  grid-template-columns: 1fr 1fr
  width: 70%
  place-content: center
  gap: 10px
  margin: 20px auto

  .send-button
    color: #fff
</style>
