<template>
  <v-app>
    <div id="app">
      <!-- Logado !-->
      <div v-if="loggedIn">
        <Header />
        <Dashboard />
        <router-view />
      </div>

      <!-- Deslogado !-->
      <keep-alive class="dashboard" v-else>
        <component :is="componentRender" />
        <!-- <Login /> -->
      </keep-alive>
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Amplify from "aws-amplify";
import Login from "@/views/Login.vue";
import Portal from "@/views/Portal.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";

export default {
  name: "app",
  components: {
    Header,
    Login,
    Portal,
    Register,
    Dashboard,
  },

  data: () => ({
    noLogonRequiredComponents: ["Portal", "Register"],
  }),

  methods: {
    // metodos
  },

  computed: {
    // ou isUserLoggedIn: (state) => state.authStore.loggedIn
    ...mapState({
      loggedIn: (state) => state.authStore.loggedIn,
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
    identityPoolId: "us-east-2:ade7f790-c753-4ed9-b284-37e4dc64005c", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-east-2", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-2_m0DBnsew1", //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "i2os6sbepglcbnc0cdv3fnslt", //OPTIONAL - Amazon Cognito Web Client ID
  },
  API: {
    endpoints: [
      {
        name: "users",
        endpoint: "https://uhj84cv5k0.execute-api.us-east-2.amazonaws.com/prod",
      },
      {
        name: "students",
        endpoint: "https://ocuuud0qz9.execute-api.us-east-2.amazonaws.com/prod",
      },
      {
        name: "courses",
        endpoint: "https://6651c2stzk.execute-api.us-east-2.amazonaws.com/prod",
      },
      {
        name: "institution",
        endpoint: "https://oenlbvrqp5.execute-api.us-east-2.amazonaws.com/prod",
      },
      {
        name: "themes",
        endpoint: "https://wmkx5c0i1g.execute-api.us-east-2.amazonaws.com/prod",
      },
      {
        name: "medias",
        endpoint: "https://1w7y3ohxj8.execute-api.us-east-2.amazonaws.com/prod",
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
