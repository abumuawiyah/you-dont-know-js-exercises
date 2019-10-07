import "./styles.css";
import user from "./setget";
import { superboy } from "./objLiteralSuper";
import { div, section, dollar } from "./tagStringLiteral";
import pipe, { readablePipe } from "./pipe";

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

document.getElementById("app").innerHTML = `
  ${styledSection}  
  ${styledDiv}
`;
