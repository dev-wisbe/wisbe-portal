<template>
  <div class="wrapper">
    <HeaderMenu />
    <section class="header-section">
      <p class="header-section__title">
        A melhor plataforma para aprender <vue-typer class="header-section__title--animation" :text=skills />
      </p>
    </section>
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "../components/content/Content.vue";
import Footer from "../components/footer/Footer.vue";
import HeaderMenu from "../components/headermenu/HeaderMenu.vue";
import { VueTyper } from 'vue-typer'
export default {
  name: "Portal",
  components: { HeaderMenu, Footer, Content, VueTyper },
  data() {
    return {
      skills: [
        'inglês.',
        'matemática.',
        'xadrez.',
        'violão.',
        'espanhol.',
        'contabilidade.',
        'pintura.'
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  height: 100vh
  display: grid
  grid-template-rows: 80px auto 157px

  .header-section
    height: 200px
    margin-top: 80px
    padding: 40px
    background-color: #6E38F7
    width: 100%
    text-align: center

    &__title
      color: #fff
      font-size: 2.5rem

.vue-typer  
  .custom.char
    color: #fff
</style>
