class Observer {
  caches = {};
  on(name, fn) {
    (this.caches[name] || (this.caches[name] = [])).push(fn);
  }
  off(name, fn) {
    // 没有名字,默认清除所有事件
    if (!name) {
      this.caches = {};
      return;
    }
    this.caches[name] = fn ? this.caches[name].filter((v) => v !== fn) : [];
  }
  emit(name, ...rest) {
    const curCache = this.caches[name];
    if (curCache) {
      curCache.forEach((fn) => fn(...rest));
    }
  }
  once(name, fn) {
    const fun = (...args) => {
      fn.apply(this, args);
      this.off(name, fun);
    };
    this.on(name, fun);
  }
}

const ev = new Observer();
const restFn = (...args) => {
  console.log("[ 休息了 ] >", ...args);
};
ev.on("休息", restFn);
ev.on("休息", (...args) => {
  console.log("[ 休息了22222222 ] >", ...args);
});

ev.emit("休息", 11, 22);
console.log("[ ev ] >", ev);

ev.once("吃饭", (...args) => {
  console.log("[ 吃饭 ] >", ...args);
});
ev.emit("吃饭", "红烧牛肉");

ev.off("休息", restFn);
console.log("[ ev ] >", ev);
