class Subject {
  observers = [];
  add(observe) {
    this.observers = this.observers.flat(
      this.observers.push(observe),
      Infinity
    );
  }
  remove(observe) {
    this.observers = this.observers.filter((v) => v !== observe);
  }
  clear() {
    this.observers = [];
  }
  notify(data) {
    this.observers.forEach((observe) => observe.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`my name is:${this.name}`, data);
  }
}

const sub = new Subject();
const obs1 = new Observer("小明");
const obs2 = new Observer("小李");
sub.add([obs1, obs2]);
sub.notify("消息");
