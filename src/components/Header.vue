<template>
  <v-app>
    <v-app-bar
      id="app-bar"
      app
      color="#6E38F7"
      flat
      style="height: 80px;"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey"
          size="32"
        ></v-avatar>

        <v-btn
          color="#fff"
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",

  methods: {
    ...mapActions(["setUserLoggedIn"]),

    details() {
      this.$router.push({ name: "User" });
    },
  },

  computed: {
    ...mapState({
      userToken: (state) => state.authStore.token,
      user: (state) => state.authStore.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/header.scss";
</style>
