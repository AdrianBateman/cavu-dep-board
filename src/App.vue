<template>
  <div id="app"
       class="main-app">
    <TitleComponent title="Departures"
                    :icon="titleComponentIcon" />
    <DepartureBoardTable :table-header="tableHeader" />
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent/TitleComponent.vue'
import DepartureBoardTable from './components/DepartureBoardTable/DepartureBoardTable.vue'

export default {
  name: 'App',
  components: {
    TitleComponent,
    DepartureBoardTable
  },
  data () {
    return {
      titleComponentIcon: {
        src: 'https://via.placeholder.com/48x48',
        width: 48,
        height: 48,
        alt: 'Departure board icon'
      },
      tableHeader: [
        'Departure time',
        'City Name',
        'Code',
        'Airline',
        'Gate',
        'Status'
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  margin: 0;
  box-sizing: border-box;
}

.main-app {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
