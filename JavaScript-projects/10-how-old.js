const howOld = (age, year) => {
  const yearDiff = year - 2018;
  const newAge = age + yearDiff;
  const birthYear = 2018 - age;
  const yearsBefore = birthYear - year;

  if (year > 2018) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (year < birthYear) {
    return `The year ${year} was ${yearsBefore} years before you were born`;
  } else if (year <= 2018 && year >= birthYear) {
    return `You were ${newAge} in the year ${year}`;
  }
}

console.log(howOld(30, 2000));