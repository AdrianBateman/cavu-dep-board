import sortFlightData from '../../../../src/functions/sort-flight-data/sort-flight-data';

const flightData = [
  {
    "flightDirection": "departure",
    "scheduledDepartureDateTime": "2022-08-22T10:30:00",
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "estimatedDepartureDateTime": "2022-08-22T10:51:00",
    "actualDepartureDateTime": "2022-08-22T10:49:00",
    "arrivalAirport": {
      "name": "Charles de Gaulle Airport",
      "cityName": "Paris",
      "countryName": "France",
      "code": "CDG"
    },
    "departureAirport": {
      "name": "Manchester Airport",
      "cityName": "Manchester",
      "countryName": "United Kingdom",
      "code": "MAN"
    },
    "flightNumber": "AF1669",
    "airline": {
      "name": "Air France",
      "code": "AF"
    },
    "departureGate": {
      "name": "Gate A5",
      "number": "A5",
      "action": "Final Call"
    },
    "arrivalTerminal": null,
    "departureTerminal": "2",
    "status": "Departed 10:49"
  },
  {
    "flightDirection": "departure",
    "scheduledDepartureDateTime": "2022-08-22T10:40:00",
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "estimatedDepartureDateTime": "2022-08-22T11:30:00",
    "actualDepartureDateTime": null,
    "arrivalAirport": {
      "name": "Istanbul Airport",
      "cityName": "Istanbul",
      "countryName": "Turkey",
      "code": "IST"
    },
    "departureAirport": {
      "name": "Manchester Airport",
      "cityName": "Manchester",
      "countryName": "United Kingdom",
      "code": "MAN"
    },
    "flightNumber": "TK1994",
    "airline": {
      "name": "Turkish Airlines",
      "code": "TK"
    },
    "departureGate": {
      "name": "Gate 31",
      "number": "31",
      "action": "Final Call"
    },
    "arrivalTerminal": null,
    "departureTerminal": "1",
    "status": "Final Call - Gate 31"
  },
  {
    "flightDirection": "departure",
    "scheduledDepartureDateTime": "2022-08-22T10:50:00",
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "estimatedDepartureDateTime": "2022-08-22T10:50:00",
    "actualDepartureDateTime": "2022-08-22T10:50:00",
    "arrivalAirport": {
      "name": "Isle of Man Airport",
      "cityName": "Isle Of Man",
      "countryName": "United Kingdom",
      "code": "IOM"
    },
    "departureAirport": {
      "name": "Manchester Airport",
      "cityName": "Manchester",
      "countryName": "United Kingdom",
      "code": "MAN"
    },
    "flightNumber": "LM694",
    "airline": {
      "name": "Loganair",
      "code": "LM"
    },
    "departureGate": {
      "name": "Gate 37",
      "number": "37",
      "action": "Final Call"
    },
    "arrivalTerminal": null,
    "departureTerminal": "3",
    "status": "Departed 10:50"
  },
  {
    "flightDirection": "departure",
    "scheduledDepartureDateTime": "2022-08-22T10:45:00",
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "estimatedDepartureDateTime": "2022-08-22T10:45:00",
    "actualDepartureDateTime": "2022-08-22T10:45:00",
    "arrivalAirport": {
      "name": "Franz Josef Strauss Airport",
      "cityName": "Munich",
      "countryName": "Germany",
      "code": "MUC"
    },
    "departureAirport": {
      "name": "Manchester Airport",
      "cityName": "Manchester",
      "countryName": "United Kingdom",
      "code": "MAN"
    },
    "flightNumber": "LH2501",
    "airline": {
      "name": "Lufthansa",
      "code": "LH"
    },
    "departureGate": {
      "name": "Gate 25",
      "number": "25",
      "action": "Final Call"
    },
    "arrivalTerminal": null,
    "departureTerminal": "1",
    "status": "Departed 10:45"
  },
];

const unSortedTime = [
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:30:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:50:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:45:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:40:00"
  },
];

const sortedTime = [
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:30:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:40:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:45:00"
  },
  {
    "scheduledArrivalDateTime": "2022-08-22T01:00:00",
    "scheduledDepartureDateTime": "2022-08-22T10:50:00"
  }
];

const unSortedFlightNumber = [
  {
    "flightNumber": "LH2501",
  },
  {
    "flightNumber": "AF1669",
  },
  {
    "flightNumber": "TK1994",
  },
  {
    "flightNumber": "LM694",
  },
];

const sortedFlightNumber = [
  {
    "flightNumber": "LM694",
  },
  {
    "flightNumber": "AF1669",
  },
  {
    "flightNumber": "TK1994",
  },
  {
    "flightNumber": "LH2501",
  },
];

const unSortedDepartureGateNumber = [
  {
    "departureGate": {
      "number": "31",
    },
  },
  {
    "departureGate": {
      "number": "5",
    },
  },
  {
    "departureGate": {
      "number": "37",
    },
  },
  {
    "departureGate": {
      "number": "25",
    },
  },
];

const sortedDepartureGateNumber = [
  {
    "departureGate": {
      "number": "5",
    },
  },
  {
    "departureGate": {
      "number": "25",

    },
  },
  {
    "departureGate": {
      "number": "31",
    },
  },
  {
    "departureGate": {
      "number": "37",
    },
  },
];


describe('sortFlightData', () => {
  it('returns expected data when supplied scheduledDepartureDateTime', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedTime,
      sort: 'scheduledDepartureDateTime'
    });

    expect(sortedFlightData)
      .toStrictEqual(sortedTime);
  });

  it('returns expected data when supplied flightNumber', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedFlightNumber,
      sort: 'flightNumber'
    });

    expect(sortedFlightData)
      .toStrictEqual(sortedFlightNumber);
  });

  it('returns expected data when supplied gateNumber', () => {
    const sortedFlightData = sortFlightData({
      flightData: unSortedDepartureGateNumber,
      sort: 'departureGateNumber'
    });

    expect(sortedFlightData)
      .toStrictEqual(sortedDepartureGateNumber);
  });
})