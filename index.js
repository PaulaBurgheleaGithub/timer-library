/* Our functionality for determining amount of time between two dates */

const SEC_FACTOR = 1000; // 1000ms / SEC_MATH = 1
const MIN_FACTOR = 60 * SEC_FACTOR;
const HOUR_FACTOR = 60 * MIN_FACTOR;
const DAY_FACTOR = 24 * HOUR_FACTOR;

export function timeExtract(totalTime, factor) {
  const timeExtracted = Math.floor(totalTime / factor);
  const newTotalTime = totalTime - timeExtracted * factor;
  return [timeExtracted, newTotalTime];
}

//asume dateB > dateA

export function getTimespan(dateA, dateB) {
  const timestampA = dateA.getTime(); // span between Jan 1, 1970 and dateA
  const timestampB = dateB.getTime(); // span between Jan 1, 1970 and dateB

  const delta = timestampB - timestampA; //positive difference

  const [days, delta1] = timeExtract(delta, DAY_FACTOR);
  const [hours, delta2] = timeExtract(delta1, HOUR_FACTOR);
  const [minutes, delta3] = timeExtract(delta2, MIN_FACTOR);
  const [secounds] = timeExtract(delta3, SEC_FACTOR);

  return [days, hours, minutes, secounds];
}
