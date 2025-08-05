module.exports = function toReadable() {
  const ones = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  if (number === 0) return 'zero';

  let result = '';

  const hundred = Math.floor(number / 100);
  const rest = number % 100;

  if (hundred > 0) {
    result += ones[hundred] + ' hundred';
    if (rest > 0) result += ' ';
  }

  if (rest >= 10 && rest < 20) {
    result += teens[rest - 10];
  } else {
    const ten = Math.floor(rest / 10);
    const one = rest % 10;

    if (ten > 0) result += tens[ten];
    if (ten > 0 && one > 0) result += ' ';
    if (one > 0) result += ones[one];
  }

  return result;
};
