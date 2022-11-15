const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function([...toSum]) {
	let totalSum = Number();
  for (const num of toSum) {
    totalSum += num
  }
  return +totalSum;
};

const multiply = function([...toMultiply]) {
  return toMultiply.reduce((x,y) => x*y)
};

