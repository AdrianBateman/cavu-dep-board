import sortFlightData from '../../../../src/functions/sort-flight-data/sort-flight-data'

const unSortedTime = [
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:30:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:50:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:45:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:40:00'
  }
]

const sortedTime = [
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:30:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:40:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:45:00'
  },
  {
    scheduledArrivalDateTime: '2022-08-22T01:00:00',
    scheduledDepartureDateTime: '2022-08-22T10:50:00'
  }
]

const unSortedFlightNumber = [
  {
    flightNumber: 'LH2501'
  },
  {
    flightNumber: 'AF1669'
  },
  {
    flightNumber: 'TK1994'
  },
  {
    flightNumber: 'LM694'
  }
]

const sortedFlightNumber = [
  {
    flightNumber: 'LM694'
  },
  {
    flightNumber: 'AF1669'
  },
  {
    flightNumber: 'TK1994'
  },
  {
    flightNumber: 'LH2501'
  }
]

const unSortedDepartureGateNumber = [
  {
    departureGate: {
      number: '31'
    }
  },
  {
    departureGate: {
      number: '5'
    }
  },
  {
    departureGate: {
      number: '37'
    }
  },
  {
    departureGate: {
      number: '25'
    }
  }
]

const sortedDepartureGateNumber = [
  {
    departureGate: {
      number: '5'
    }
  },
  {
    departureGate: {
      number: '25'

    }
  },
  {
    departureGate: {
      number: '31'
    }
  },
  {
    departureGate: {
      number: '37'
    }
  }
]

describe('sortFlightData', () => {
  it('returns expected data when supplied scheduledDepartureDateTime', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedTime,
      sort: 'scheduledDepartureDateTime'
    })

    expect(sortedFlightData)
      .toStrictEqual(sortedTime)
  })

  it('returns expected data when supplied flightNumber', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedFlightNumber,
      sort: 'flightNumber'
    })

    expect(sortedFlightData)
      .toStrictEqual(sortedFlightNumber)
  })

  it('returns expected data when supplied gateNumber', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedDepartureGateNumber,
      sort: 'departureGateNumber'
    })

    expect(sortedFlightData)
      .toStrictEqual(sortedDepartureGateNumber)
  })
})
