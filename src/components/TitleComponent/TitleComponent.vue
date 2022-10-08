<template>
  <header v-if="title"
          class="title-component">
    <img v-if="icon && icon.src"
         class="title-component__icon"
         :src="icon.src"
         :width="icon.width"
         :height="icon.height"
         :alt="icon.alt" />
    <h1 class="title-component__text">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="scss">
$desktopWidth: 500px;

.title-component {
  display: flex;
  align-items: center;
  padding: 32px 0 30px 45px;
  background: radial-gradient(hsl(52, 79%, 62%) 0%, hsl(51, 73%, 53%) 100%);

  @media screen and (min-width: $desktopWidth) {
    padding: 42px 0 30px 55px;
  }

  &__icon {
    width: 100%;
    max-width: 2rem;
    height: auto;

    @media screen and (min-width: $desktopWidth) {
      max-width: 3rem;
    }
  }

  &__text {
    margin: 0 0 0 40px;
    font-size: 2rem;

    @media screen and (min-width: $desktopWidth) {
      font-size: 3rem;
      margin: 0 0 0 30px;
    }
  }
}
</style>
