module.exports = function check(str, bracketsConfig) {
  let nStr = str;
  for (let i = 0; i < bracketsConfig.length * 2; i++) {
    for (let n = 0; n < bracketsConfig.length; n++) {
      let sStr = bracketsConfig[n][0] + bracketsConfig[n][1];
      for (let j = 0; j < str.length / 2; j++) {
        nStr = nStr.replace(sStr, '');
      }
    }
    if (nStr.length === 0) return true;
  }
  if (nStr.length > 0) return false;
}
