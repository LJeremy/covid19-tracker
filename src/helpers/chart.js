export function toDateValuePair(locationHistoryEntry) {
  console.log(
    "toDateValuePair value",
    Object.entries(locationHistoryEntry)[0][0]
  );
  const dateParts = Object.entries(locationHistoryEntry)[0][1].split("/");
  const year = Number.parseInt("20" + dateParts[2], 10);
  const month = Number.parseInt(dateParts[0], 10) - 1;
  const day = Number.parseInt(dateParts[1], 10);

  return {
    date: new Date(year, month, day),
    value: Number.parseInt(locationHistoryEntry[1], 10)
  };
}

export function mapLocationToChartSeries(location) {
  console.log("mapLocationToChart value", location);
  const dateValuePairs = Object.entries(location.history)
    .map(location => toDateValuePair(location))
    .sort((a, b) => a + b);

  const firstDate = dateValuePairs[0].date;

  console.log("CHART FIRST DATA", firstDate);

  return {
    name: location.country,
    data: dateValuePairs.map(pair => pair.value),
    pointStart: Date.UTC(
      firstDate.getFullYear(),
      firstDate.getMonth(),
      firstDate.getDate()
    ),
    pointInterval: 24 * 3600 * 1000 // one day;
  };
}
