import "./styles.css";
import user from "./setget";
import { superboy } from "./objLiteralSuper";
import { html } from "./tagStringLiteral";

console.log("old id", user.id);
user.id = 1;
console.log("new id", user.id);

console.log(superboy.getSkills());

const firstName = "Azizi";
const lastName = "Yazit";
const h = html`
  <div>${firstName} ${lastName}</div>
`;

document.getElementById("app").innerHTML = h;
