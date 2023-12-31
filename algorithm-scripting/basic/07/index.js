/*
       _________________________________
----- | Repeat a String Repeat a String | -----

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num
is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
