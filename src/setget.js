let user = {
  __id: 0,
  get id() {
    return this.__id;
  },
  set id(v) {
    this.__id = v;
  }
};

export default user;
