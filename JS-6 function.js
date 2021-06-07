const getSleepHours = day => {
  switch (day){
  case 'Monday':
  return 8;
  case 'Tuesday':
  return 1;
  case 'Wednesday':
  return 2;
  case 'Thurday':
  return 6;
  case 'Friday':
  return 13;
  case 'Saturday':
  return 23;
  case 'Sunday':
  return 0;
  
  }
}
console.log(getSleepHours('Monday'))
console.log(getSleepHours('Tuesday'))
console.log(getSleepHours('Wednesday'))
console.log(getSleepHours('Thurday'))
console.log(getSleepHours('Friday'))
console.log(getSleepHours('Saturday'))
console.log(getSleepHours('Sunday'))

const getActualSleepHours = () => 
  getSleepHours('Monday')
+ getSleepHours('Tuesday')
+ getSleepHours('Wednesday')
+ getSleepHours('Thurday')
+ getSleepHours('Friday')
+ getSleepHours('Saturday')
+ getSleepHours('Sunday');

console.log(getActualSleepHours())

const getIdealSleepHours = (idealHours) => 
   idealHours * 7;

console.log(getIdealSleepHours(8))

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours(8)
  if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours){
    console.log(`${actualSleepHours}you got more sleep than needed.`)
  } else {
    console.log(`${actualSleepHours}you should get some rest.`)
  }
}
calculateSleepDebt()