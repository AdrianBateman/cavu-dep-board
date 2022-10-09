<template>
  <div class="departure-board">
    <table class="departure-board__table">
      <tr class="departure-board__header departure-board-header">
        <th v-for="title in tableHeader"
            :key="title"
            class="departure-board-header__item">{{ title }}</th>
      </tr>
      <tr v-for="departure in flightData"
          :key="departure.flightNumber"
          class="departure-board__row departure-board-row">
        <td class="departure-board-row__item">
          {{ departure.scheduledDepartureDateTime }}
        </td>
        <td class="departure-board-row__item">
          {{ departure.cityName }}
        </td>
        <td class="departure-board-row__item">
          {{ departure.code }}
        </td>
        <td class="departure-board-row__item">
          {{ departure.name }}
        </td>
        <td class="departure-board-row__item">
          {{ departure.departureGateNumber }}
        </td>
        <td class="departure-board-row__item">
          {{ departure.status }}
        </td>
      </tr>
    </table>
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
      flightData: undefined
    }
  },
  methods: {
    async getFlightData () {
      const data = await fetchFlightData()

      this.flightData = data.allDepartures.map(
        ({
          flightNumber,
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

          return {
            flightNumber,
            scheduledDepartureDateTime: `${departureHours}.${departureMinutes}`,
            status,
            departureGateNumber: departureGate?.number || 'Pending',
            name: airline.name,
            code: arrivalAirport.code,
            cityName: arrivalAirport.cityName
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
</style>
