const findTheOldest = function(arr) {
  let oldestPerson = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const currentPerson = arr[i];
    const currentAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
    const oldestAge = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : new Date().getFullYear() - oldestPerson.yearOfBirth;
    if (currentAge > oldestAge) {
      oldestPerson = currentPerson;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
