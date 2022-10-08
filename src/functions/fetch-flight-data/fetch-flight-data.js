import { FLIGHT_DATA_ENDPOINT } from '@/constants/end-points'

async function fetchFlightData () {
  const response = await fetch(FLIGHT_DATA_ENDPOINT)

  if (response.status === 200) {
    return await response.json()
  }

  return new Error(response.status.toString())
}

export default fetchFlightData
