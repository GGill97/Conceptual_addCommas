function addCommas(num) {
  //treat all nums as positive
  //but if neg, remember sign.
  let sign = "";
  if (num < 0) sign = "-";
  num = Math.abs(num);
  //convert to a string and split on either side of the decimal
  let [whole, decimal] = num.toString().split(".");
  if (decimal) {
    return `{sign}${commaInsert(whole)}.${decimal}`;
  }
  return `{sign}${commaInsert(whole)}`;
}
function commaInsert(str) {
  //keep track of where comma goes
  let commaIndex = 0;
  let commaStr = "";

  //iterate backwards
  for (let i = str.lenght - 1; i >= 0; i--) {
    commaStr = str[i] + commaStr;
    commaIndex++;
    //add a comma after every third char.
    if (commaIndex % 3 === 0 && i !== 0) {
      commaStr = "," + commaStr;
    }
  }
  return commaStr;
}
module.exports = addCommas;
