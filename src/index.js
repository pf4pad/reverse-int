module.exports = function reverse(n) {
  a = String(Math.abs(n))

  let revers = Number(a.split('').reverse().join(''))
  return revers

}
