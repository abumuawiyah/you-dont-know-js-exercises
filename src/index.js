import "./styles.css";
import user from "./setget";
import { superboy } from "./objLiteralSuper";
import { div, section, dollar } from "./tagStringLiteral";
import pipe, { readablePipe } from "./pipe";
import { obj as SymObj, fooSym, barSym } from "./symbols";
import "./iterator";

console.log("old id", user.id);
user.id = 1;
console.log("new id", user.id);

console.log(superboy.getSkills());

const divColor = "red";
const sectionColor = "blue";

const styledDiv = div`
  background: ${divColor};
  height: 100px;
  width: 300px;
`;

const styledSection = section`
  background: ${sectionColor};
  height: 100px;
  width: 300px;
`;

//text``
//textComponent`<`

function add1(num) {
  return num + 1;
}

function substract1(num) {
  return num - 1;
}

const test = pipe(
  add1,
  add1,
  substract1
);
const test2 = readablePipe(add1, add1, substract1);

console.log(test(2), test2(4));

var threeSteps = first => {
  if (first) {
    return second => {
      if (second) {
        return third => {
          console.log(first, second, third);
        };
      }
    };
  }
};

const step = threeSteps(1);
const step2 = step(2);
step2(3);

step(1)(2);

console.log(SymObj, fooSym, barSym);
SymObj["foo"] = "foo 1";
SymObj["bar"] = "bar 1";
SymObj[fooSym] = "foo 2";
SymObj[barSym] = "bar 2";

console.log(SymObj, SymObj[fooSym], SymObj[barSym]);
console.log(
  Object.getOwnPropertyNames(SymObj),
  Object.getOwnPropertySymbols(SymObj)[0] === fooSym
);

const tmpls = {
  a: "i am ${name}",
  b: "while i am ${name}"
};

const text = id => data => {
  if (tmpls[id]) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    return new Function(...keys, `return \`${tmpls[id]}\``)(...values);
  }
};

const a = text("a");
const b = text("b");
const c = text("c");

console.log(a({ name: "azizi" }), b({ name: "hafsa" }), c());

document.getElementById("app").innerHTML = `
  ${styledSection}  
  ${styledDiv}
`;
