<template>
  <v-app id="dashboard">
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
    <v-main class="grey lighten-3">
      <v-container style="margin-top: 90px">
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Menu item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Sair
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="100vh"
              rounded="lg"
            >
              teste
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <ConfirmUserType />
  </v-app>
</template>

<script>
import ConfirmUserType from '../components/ConfirmUserType/ConfirmUserType.vue';

  export default {
    name: 'Dashboard',
    components: {
      ConfirmUserType,
    },
    data: () => ({
      links: [
        'Dashboard',
        'Mensagens',
        'Perfil',
        'Atualizações',
      ],
    }),
  }
</script>

<style lang="sass" scoped>

</style>