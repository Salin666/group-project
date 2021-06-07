let raceNumber = Math.floor(Math.random() * 1000);
let registerationTime = 1100;
let runnerAge = 19;
registerationTime < 1100 && runnerAge > 18 ? raceNumber += 1000 : "";
/*
registerationTime < 1100 && runnerAge > 18 ? console.log(`race at 9:30am and your number is ${raceNumber}`) : console.log(`race at 11:00 and your number is ${raceNumber}`);
*/
if (registerationTime < 1100 && runnerAge > 18) {
  console.log(`race at 9:30am and your number is ${raceNumber}`)
} else if (registerationTime >= 1100 && runnerAge > 18) {
  console.log(`race at 11:00am and your number is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`race at 12:30am and your number is ${raceNumber}`)
} else {
  console.log('see the registration desk')
}
