const steps = [
  () => console.log("step 1"),
  () => console.log("step 2"),
  () => console.log("step 3")
];

const iterator = steps[Symbol.iterator]();
iterator.next().value();
iterator.next().value();
iterator.next().value();
