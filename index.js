/* Our functionality for determining amount of time between two dates */
const sec_factor = 1000;
const min_factor = 60 * sec_factor;
const hour_factor = 60 * min_factor;
const day_factor = 24 * hour_factor;

function timeExtract(totalTime, factor) {
  const timeExtracted = Math.floor(totalTime / factor);
  const newTotalTime = totalTime - timeExtracted * factor;
  return [timeExtracted, newTotalTime];
}

//asume dateB > dateA

export function getTimespan(dateA, dateB) {
  const timestampA = dateA.getTime();
  const timestampB = dateB.getTime();

  const delta = timestampB - timestampA; //positive difference

  const [days, delta1] = timeExtract(delta1, day_factor);
  const [hours, delta2] = timeExtract(delta2, hour_factor);
  const [minutes, delta3] = timeExtract(delta3, min_factor);
  const [secounds] = timeExtract(delta3, sec_factor);

  return [days, hours, minutes, secounds];
}
