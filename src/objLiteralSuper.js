const superman = {
  __skills: ["canFly", "laserEyes"],
  getSkills() {
    console.log(this.__skills);
  }
};

const superboy = {
  // __skills: ["canJump"],
  getSkills() {
    super.getSkills();
    console.log([...super.__skills, "canJump"]);
  }
};

Object.setPrototypeOf(superboy, superman);

console.log(superboy.getSkills());

export { superboy, superman };
