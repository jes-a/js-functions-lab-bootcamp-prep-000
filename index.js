// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays()

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("you")

function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidaysTo("New Year", "Mom")

function holidayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown(20, "Thanksgiving")
