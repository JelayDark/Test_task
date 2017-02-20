function sum1 (a,b) {
  if (b) {
    return a+b;
  } else {
    return function(b) {
      return a+b;
    }
  }
}

console.log(sum1(3)(4));
