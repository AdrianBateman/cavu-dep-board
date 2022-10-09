export default function sortFlightData({
    flightData,
    sort
}) {
    return flightData.sort(
        (a, b) => {
            switch (sort) {
                case 'scheduledDepartureDateTime':
                    return Date.parse(a.scheduledDepartureDateTime) - Date.parse(b.scheduledDepartureDateTime)
                case 'flightNumber':
                    return a
                        .flightNumber
                        .replaceAll(/[a-zA-Z]/g, '') - b
                            .flightNumber
                            .replaceAll(/[a-zA-Z]/g, '')
                case 'departureGateNumber':
                    return a
                        .departureGate
                        .number - b
                            .departureGate
                            .number
                default:
                    return a.localeCompare(b)
                    // TODO: add more sorting options, this is an example
            }
        }
    )
}