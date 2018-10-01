class Motor {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(this.name, 'turning on');
  }
  stop() {
    console.log(this.name, 'turning off');
  }
}

module.exports = {
  m1: new Motor('m1'),
  m2: new Motor('m2'),
  m3: new Motor('m3'),
  m4: new Motor('m4'),
  m5: new Motor('m5'),
  m6: new Motor('m6'),
  m7: new Motor('m7'),
  m8: new Motor('m8')
};
