function romanConverter(number, string = "") {
  if (number >= 1000) {
    return romanConverter(number -= 1000, string.concat("M"));
  } else if (number >= 900) {
    return romanConverter(number -= 900, string.concat("CM"));
  } else if (number >= 500) {
    return romanConverter(number -= 500, string.concat("D"));
  } else if (number >= 400) {
    return romanConverter(number -= 400, string.concat("CD"));
  } else if (number >= 100) {
    return romanConverter(number -= 100, string.concat("C"));
  } else if (number >= 90) {
    return romanConverter(number -= 90, string.concat("XC"));
  } else if (number >= 50) {
    return romanConverter(number -= 50, string.concat("L"));
  } else if (number >= 40) {
    return romanConverter(number -= 40, string.concat("XL"));
  } else if (number >= 10) {
    return romanConverter(number -= 10, string.concat("X"));
  } else if (number >= 9) {
    return romanConverter(number -= 9, string.concat("IX"));
  } else if (number >= 5) {
    return romanConverter(number -= 5, string.concat("V"));
  } else if (number >= 4) {
    return romanConverter(number -= 4, string.concat("IV"));
  } else if (number >= 1) {
    return romanConverter(number -= 1, string.concat("I"));
  } else {
    return string;
  }
}

console.log(romanConverter(499));