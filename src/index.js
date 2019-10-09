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

console.log(
  "dollar",
  dollar`Today i get ${100} from my dad and ${90} from my brothers`
);

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

document.getElementById("app").innerHTML = `
  ${styledSection}  
  ${styledDiv}
`;
