import "./styles.css";
import user from "./setget";
import { superboy } from "./objLiteralSuper";
import { div, section, dollar } from "./tagStringLiteral";

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
  "tes",
  dollar`Today i get ${100} from my dad and ${90} from my brothers`
);

document.getElementById("app").innerHTML = `
  ${styledSection}  
  ${styledDiv}
`;
