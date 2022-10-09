import { shallowMount } from '@vue/test-utils'
import DepartureBoardTable from '../../../src/components/DepartureBoardTable/DepartureBoardTable.vue'
const originalFetch = global.fetch

const mockFlightData = {
  allDepartures: [
    {
      flightDirection: 'departure',
      scheduledDepartureDateTime: '2022-08-22T10:30:00',
      scheduledArrivalDateTime: '2022-08-22T01:00:00',
      estimatedDepartureDateTime: '2022-08-22T10:51:00',
      actualDepartureDateTime: '2022-08-22T10:49:00',
      arrivalAirport: {
        name: 'Charles de Gaulle Airport',
        cityName: 'Paris',
        countryName: 'France',
        code: 'CDG'
      },
      departureAirport: {
        name: 'Manchester Airport',
        cityName: 'Manchester',
        countryName: 'United Kingdom',
        code: 'MAN'
      },
      flightNumber: 'AF1669',
      airline: {
        name: 'Air France',
        code: 'AF'
      },
      departureGate: {
        name: 'Gate A5',
        number: 'A5',
        action: 'Final Call'
      },
      arrivalTerminal: null,
      departureTerminal: '2',
      status: 'Departed 10:49'
    },
    {
      flightDirection: 'departure',
      scheduledDepartureDateTime: '2022-08-22T10:40:00',
      scheduledArrivalDateTime: '2022-08-22T01:00:00',
      estimatedDepartureDateTime: '2022-08-22T11:30:00',
      actualDepartureDateTime: null,
      arrivalAirport: {
        name: 'Istanbul Airport',
        cityName: 'Istanbul',
        countryName: 'Turkey',
        code: 'IST'
      },
      departureAirport: {
        name: 'Manchester Airport',
        cityName: 'Manchester',
        countryName: 'United Kingdom',
        code: 'MAN'
      },
      flightNumber: 'TK1994',
      airline: {
        name: 'Turkish Airlines',
        code: 'TK'
      },
      departureGate: {
        name: 'Gate 31',
        number: '31',
        action: 'Final Call'
      },
      arrivalTerminal: null,
      departureTerminal: '1',
      status: 'Final Call - Gate 31'
    }
  ]
}

const tableHeader = [
  'Departure time',
  'City Name',
  'Code',
  'Airline',
  'Gate',
  'Status'
]

describe('DepartureBoardTable', () => {
  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockFlightData)
      })
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('renders with supplied tableHeader', () => {
    const wrapper = shallowMount(DepartureBoardTable, {
      propsData: {
        tableHeader
      }
    })

    expect(wrapper)
      .toMatchSnapshot()
  })

  it('renders with response from fetch', async () => {
    const wrapper = await shallowMount(DepartureBoardTable, {
      propsData: {
        tableHeader
      }
    })

    await Promise.resolve()

    await wrapper.vm.$nextTick()

    expect(wrapper)
      .toMatchSnapshot()
  })
})
