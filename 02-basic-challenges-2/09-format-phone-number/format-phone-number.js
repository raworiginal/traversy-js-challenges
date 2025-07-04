function formatPhoneNumber(phoneNum) {
  const [a, b, c, d, e, f, g, h, i, j] = phoneNum;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

module.exports = formatPhoneNumber;
