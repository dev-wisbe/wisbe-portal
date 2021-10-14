<template>
  <div class="container">
    <img
      class="logo"
      width="138"
      :src="require('../../assets/wisbe-logo-text-variant.png')"
      alt="home page"
    />
    <div class="info-contact">
      <p>dev@wisbe.com.br</p>
      <p>São Paulo - SP</p>
    </div>
    <div class="copyright">
      Copyrights © 2021 Todos os direitos reservados
      <a href="#">Wisbe</a>
      <p></p>
    </div>

    <div class="social">
      <img
        class="icon"
        v-for="(item, index) in icons"
        :key="index"
        width="18"
        :src="require(`../../assets/social/${item}.svg`)"
        :alt="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["facebook", "twitter", "linkedin", "youtube"],
    };
  },
};
</script>

<style lang="sass" scoped>
.container
  position: relative
  max-width: 100%
  height: 157px
  background: #6E38F7
  top: 100%
  display: grid
  grid-template-columns: repeat(4, 1fr)
  color: #FFF

  .logo
    margin: 34px 98px

  .info-contact, .copyright, .social
    display: flex
    flex-direction: column
    align-self: center

    p:last-child
      margin-top: 18px

  .copyright
    a
      color: #8FC74A !important
      cursor: pointer

  .social
    display: flex
    flex-direction: row
    margin: auto

    .icon
      margin-left: 30px

      &:hover
        transform: translateY(-2px)
        cursor: pointer
</style>
