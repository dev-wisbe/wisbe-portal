<template>
  <div class="container">
    <img
      class="container__logo"
      width="40%"
      :src="require('../../assets/wisbe-logo-text-variant.png')"
      alt="home page"
    />
    <template v-if="$mq !== 'mobile' && $mq !== 'tablet'">
      <div class="container__moreinfo">
        <v-btn text color="white" v-for="item in menuItems" :key="item.name" >{{ item.name }}</v-btn>
      </div>
      <nav class="container__actions">
        <v-btn text color="white" @click="$router.push('/register')">Crie sua conta</v-btn>
        <v-btn id="login" color="white" elevation="0" @click="$router.push('/login')">ACESSAR</v-btn>
      </nav>
    </template>
    <template v-else>
      <div class="text-right">
        <v-menu offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon large>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <v-btn text>{{ item.name }}</v-btn>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-btn id="login" text @click="$router.push('/login')">ACESSAR</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text @click="$router.push('/register')">Crie sua conta</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      menuItems: [
        { name: 'SEJA UM PROFESSOR', path: '/' },
        { name: 'BENEFÍCIOS', path: '/' },
        { name: 'SOBRE NÓS', path: '/' },
        { name: 'AJUDA', path: '/' },
      ]
    }
  }
};
</script>

<style lang="sass" scoped>
$breakpoint-desktop: 900px

.mobile-menu
  place-self: self-end

#login
  color: #6E38F7
  font-weight: 700
  
.container
  position: fixed
  background: #6E38F7
  display: grid
  grid-template-columns: 1fr 1fr
  max-width: 100%
  height: 80px
  padding: 20px 25px

  @media screen and (min-width: $breakpoint-desktop)
    grid-template-columns: 1fr 3fr 1.5fr

  &__logo
    margin: auto 0

  &__actions
    justify-content: end

    .v-btn
      margin-right: 12px

  &__moreinfo
    justify-content: center

  &__moreinfo, &__actions
    display: grid
    grid-template-columns: repeat(5, auto)
    align-items: start
</style>
