const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const readablePipe = (...fns) => {
  return x => {
    return fns.reduce((val, func) => {
      return func(val);
    }, x);
  };
};

/**
function add1(num) {
  return num+1;
}

function substract1(num) {
  return num-1;
}

const test = pipe(add1,add1,substract1)

console.log(test(2))
 */

export { pipe as default, readablePipe };
