<template>
  <div id="app"
       class="main-app">
    <TitleComponent title="Departures"
                    :icon="titleComponentIcon" />
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent/TitleComponent.vue'

export default {
  name: 'App',
  components: {
    TitleComponent
  },
  data () {
    return {
      titleComponentIcon: {
        src: 'https://via.placeholder.com/48x48',
        width: 48,
        height: 48,
        alt: 'Departure board icon'
      }
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}

.main-app {
  max-width: 1300px;
}
</style>
