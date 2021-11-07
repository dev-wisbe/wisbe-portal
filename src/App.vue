<template>
  <v-app>
    <div id="app">
      <div v-if="loggedIn">
        <!-- <Dashboard /> -->
        <router-view />
      </div>

      <keep-alive class="dashboard" v-else>
        <component :is="componentRender" />
      </keep-alive>
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Amplify from "aws-amplify";
import Login from "@/views/Authentication/Login.vue";
import Portal from "@/views/Portal.vue";
import Register from "@/views/Authentication/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import Validation from "@/views/Authentication/Validation.vue"

export default {
  name: "app",
  components: {
    Header,
    Login,
    Portal,
    Register,
    Dashboard,
    Validation,
  },

  data: () => ({
    noLogonRequiredComponents: ["Portal", "Register", "Validation"],
  }),

  methods: {
    // metodos
  },

  computed: {
    // ...mapGetters('authentication', [
    //   'loggedIn',
    // ]),
    // ou isUserLoggedIn: (state) => state.authStore.loggedIn
    ...mapState({
      loggedIn: (state) => state.authentication.loggedIn,
    }),
    componentRender() {
      const { name } = this.$route;
      if (this.noLogonRequiredComponents.includes(name)) {
        return name;
      }
      return Login;
    },
  },
};

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:aee7b253-17cc-46e8-a8c4-5639a74cf3a3",
    region: "us-east-1",
    identityPoolRegion: 'us-east-1',
    userPoolId: "us-east-1_PbdoXH2FU",
    userPoolWebClientId: "2see6lqum408pr8j41sjr0pr34",
    mandatorySignIn: false,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
  API: {
    endpoints: [
      {
        name: "users",
        endpoint: "https://shj84cv5k0.execute-api.us-east-1.amazonaws.com/prod",
      },
    ],
  },
});
</script>

<style lang="scss">
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  min-height: 100vh;
  width: 100%;
}

.v-application--wrap {
  min-height: inherit !important;
}
.theme--light.v-application {
  background: inherit !important;
}

.v-application p {
  margin-bottom: inherit !important;
}

.v-application a {
  color: inherit !important;
}

.dashboard {
  margin: 0 auto;
}
</style>
