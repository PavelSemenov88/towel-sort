
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
    return matrix.reduce((acc, cur, i) => acc.concat(!(i % 2) ? cur : cur.reverse()), []);
  } else {
    return [];
  }
}
