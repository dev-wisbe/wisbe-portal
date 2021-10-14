<template>
  <div class="container">
    <div class="container-card">
      <img width="345" src="https://digimx-vue.theme-land.com/assets/img/about_thumb_1.jpg" alt="">
      <div class="container-card__info">
        <h1 class="container-card__info--title">Aulas com professores de verdade</h1>
        <p class="container-card__info--description">Aqui na Wisbe voce encontra os melhores professores a preços transparentes, é super simples!
          você procura a sua aula preferida, escolhe o professor, realiza o contrato e pronto, sua aula estará agendada e pronta no dia que você escolheu. Tudo isso sem complicação e sem aquele monte de informações em linhas miúdas!
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="sass" scoped>
.container
  margin: 90px auto 50px auto
  text-align: center
  max-width: 1140px
  margin-top: 250px

  &-card
    display: grid
    grid-template-columns: 1fr 1fr

    &__info
      padding: 12px

      &--title,
      &--description
        text-align: justify
        text-justify: inter-word


</style>
