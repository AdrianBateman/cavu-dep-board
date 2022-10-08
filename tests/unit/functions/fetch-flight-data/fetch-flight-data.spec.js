import fetchFlightData from '../../../../src/functions/fetch-flight-data/fetch-flight-data'

const originalFetch = global.fetch

describe('fetchFlightData', () => {
  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(['bar'])
      })
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('returns type of Array', async () => {
    const flightData = await fetchFlightData()

    expect(Array.isArray(flightData))
      .toBeTruthy()
  })

  it('calls fetch when invoked', async () => {
    const flightData = await fetchFlightData()

    expect(flightData.length)
      .toEqual(1)
  })
})

describe('fetchFlightData with 400 fetch response', () => {
  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        status: 400,
        json: () => Promise.resolve(['bar'])
      })
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('returns error when fetch response status is not 200', async () => {
    const flightData = await fetchFlightData()

    expect(flightData.message)
      .toStrictEqual('400')
  })
})
