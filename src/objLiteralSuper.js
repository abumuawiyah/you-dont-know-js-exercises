const superman = {
  __skills: ["canFly", "laserEyes"],
  getSkills() {
    console.log(this.__skills);
  }
};

/**
 * if superboy have same property with superman
 * its property override the superman property
 */
const superboy = {
  getSkills() {
    super.getSkills();
    console.log([...super.__skills, "canJump"]);
  }
};

Object.setPrototypeOf(superboy, superman);

console.log(superboy.getSkills());

export { superboy, superman };
