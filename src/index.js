import "./styles.css";
import user from "./setget";
import { superboy } from "./objLiteralSuper";

console.log("old id", user.id);
user.id = 1;
console.log("new id", user.id);

console.log(superboy.getSkills());

document.getElementById("app").innerHTML = `
Kyle book
`;
