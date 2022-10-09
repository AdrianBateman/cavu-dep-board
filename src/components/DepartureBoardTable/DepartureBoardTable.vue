<template>
  <div class="departure-board">
    <table v-if="!hasError"
    class="departure-board__table">
      <tr class="departure-board__header departure-board-header">
        <th v-for="title in tableHeader"
            :key="title"
            class="departure-board-header__item">{{ title }}</th>
      </tr>
      <tr v-for="(departure, key) in flightData"
          :key="JSON.stringify(departure) + key"
          class="departure-board__row departure-board-row"
          :class="{'departure-board__row--loading': isLoading}"
      >
          <td class="departure-board-row__item"
            v-for="(item, key) in departure"
            :key="item + key"
          >
          {{ item }}
        </td>
      </tr>
    </table>
    <div v-else
      class="departure-board__error"
    >
      <h2>{{ errorMessage }}</h2>
    </div>
  </div>
</template>

<script>
import fetchFlightData from '../../functions/fetch-flight-data/fetch-flight-data'

export default {
  name: 'DepartureBoardTable',
  props: {
    tableHeader: Array
  },
  created () {
    this.getFlightData()
  },
  data () {
    return {
      flightData: [
        {
          scheduledDepartureDateTime: ' ',
          cityName: ' ',
          code: ' ',
          name: ' ',
          departureGateNumber: ' ',
          status: ' '
        },
        {
          scheduledDepartureDateTime: '',
          cityName: '',
          code: '',
          name: '',
          departureGateNumber: '',
          status: ''
        },
        {
          scheduledDepartureDateTime: '',
          cityName: '',
          code: '',
          name: '',
          departureGateNumber: '',
          status: ''
        },
        {
          scheduledDepartureDateTime: '',
          cityName: '',
          code: '',
          name: '',
          departureGateNumber: '',
          status: ''
        },
        {
          scheduledDepartureDateTime: '',
          cityName: '',
          code: '',
          name: '',
          departureGateNumber: '',
          status: ''
        }
      ],
      isLoading: true,
      hasError: false,
      errorMessage: undefined
    }
  },
  methods: {
    async getFlightData () {
      // TODO: extract to store
      const data = await fetchFlightData()

      if (!data.allDepartures) {
        this.hasError = true
        this.isLoading = false
        this.errorMessage = data.message
        return
      }

      this.flightData = data.allDepartures.map(
        ({
          scheduledDepartureDateTime,
          status,
          departureGate,
          airline,
          arrivalAirport
        }) => {
          const dateDeparture = new Date(scheduledDepartureDateTime)
          const departureHours = dateDeparture.getHours() < 10
            ? '0' + dateDeparture.getHours()
            : dateDeparture.getHours()

          const departureMinutes = dateDeparture.getMinutes() < 10
            ? '0' + dateDeparture.getMinutes()
            : dateDeparture.getMinutes()

          this.isLoading = false

          return {
            scheduledDepartureDateTime: `${departureHours}.${departureMinutes}`,
            cityName: arrivalAirport.cityName,
            code: arrivalAirport.code,
            name: airline.name,
            departureGateNumber: departureGate?.number || 'Pending',
            status
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
$desktopWidth: 600px;

.departure-board {
  width: fit-content;
  margin-top: 10px;
  padding: 1rem;
  background: linear-gradient(90deg, #464646 0%, #000000 100%);
  box-sizing: border-box;

  @media screen and (min-width: $desktopWidth) {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 18px 25px 76px 55px;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__header {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: calc(100% - 35px);
      border-radius: 10px;
      background: linear-gradient(90deg, #FFFFFF 0%, #AEBCCA 100%);
      z-index: 0;
    }
  }

  &__row {
    position: relative;
    color: #fff;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: calc(100% - 16px);
      border: 2px solid #fff;
      border-radius: 10px;
      z-index: 0;
    }

    &--loading {
      height: 76px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 10px;
        width: 40px;
        height: 40px;
        border: 8px solid #fff;
        border-radius: 50%;
        border-color: hsla(0, 0%, 100%, .3) transparent transparent transparent;
        animation: loading-circle 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        box-sizing: border-box;
      }
    }
  }

  &__error {
    background-color: #fff;
    padding: 2rem;
    border: 2px solid red;
    border-radius: 10px;
  }
}

.departure-board-header {
  &__item {
    padding: 16px 0 51px;
    font-size: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 10;
    text-align: left;

    @media screen and (min-width: $desktopWidth) {
      font-size: 1.125rem;
    }

    &:first-of-type {
      padding-left: 1rem;

      @media screen and (min-width: $desktopWidth) {
        padding-left: 80px;
      }
    }
  }
}

.departure-board-row {
  &__item {
    padding: 16px 0 32px;
    font-size: 1rem;
    font-weight: 700;

    &:first-of-type {
      padding-left: 1rem;

      @media screen and (min-width: $desktopWidth) {
        padding-left: 80px;
        font-size: 1.5rem;
      }
    }

    &:nth-of-type(2),
    &:nth-of-type(5) {
      color: #F5D836;
    }
  }
}

@keyframes loading-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
