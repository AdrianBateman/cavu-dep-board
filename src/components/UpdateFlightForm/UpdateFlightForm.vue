<template>
    <div class="update-flight">
        <h2>Change a flight departure status</h2>
        <form class="update-flight__form update-flight-form"
              action="#"
              method="POST"
              @submit.prevent="handleSubmitEvent"
              >
            <label class="update-flight-form__label"
                   for="departure-status-select">
                Select a flight
            </label>
            <select class="update-flight-form__select"
                    id="departure-status-select"
                    name="departure-status-select">
                <option v-for="flight in flights"
                        :key="flight"
                        :value="flight">
                    {{ flight }}
                </option>
            </select>

            <label class="update-flight-form__label"
                   for="departure-status-input">
                Departure status
            </label>
            <input type="text"
                   list="departure-status-list"
                   id="departure-status-input"
                   name="departure-status-input"
                   class="update-flight-form__input">
            <datalist id="departure-status-list">
                <option value="Departed" />
                <option value="Diverted" />
                <option value="Delayed" />
                <option value="Cancelled" />
            </datalist>

            <button type="submit"
                    class="update-flight-form__button">
                Go
            </button>
            <button type="button"
                    class="update-flight-form__button">
                Reset
            </button>
        </form>
    </div>
</template>

<script>
import fetchFlightData from '../../functions/fetch-flight-data/fetch-flight-data'

export default {
  name: 'UpdateFlightForm',
  data () {
    return {
      flights: undefined
    }
  },
  mounted () {
    this.getFlightData()
  },
  methods: {
    async getFlightData () {
      const data = await fetchFlightData()

      if (!data.allDepartures) {
        return
      }

      this.flights = data.allDepartures.map(
        ({ flightNumber }) => flightNumber)
    },
    handleSubmitEvent ({ target }) {
      console.log(
        'handleSubmitEvent triggered with:',
        target.elements['departure-status-select'].value,
        target.elements['departure-status-input'].value
      )
    }
  }
}
</script>

<style scoped lang="scss">
/**
  TODO: ran out of time
*/
</style>
