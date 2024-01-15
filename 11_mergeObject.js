const obj1 = {
  1: "ee",
  2: "hf",
};

const obj2 = {
  3: "dd",
  4: "ff",
};

const obj3 = { obj1, obj2 }; // not proper
const obj3_01 = Object.assign({}, obj1, obj2); // target , sources
const obj3_02 = { ...obj1, ...obj2 }; // spread
console.log(obj3);
console.log(obj3_01);
console.log(obj3_02);
