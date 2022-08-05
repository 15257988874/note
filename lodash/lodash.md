# lodash 常用方法

#### 数组

##### 指定长度拆分

###### [chunk](https://www.lodashjs.com/docs/lodash.chunk)

```
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

##### 去重

###### 数组去重 [uniq](https://www.lodashjs.com/docs/lodash.uniq)

```javascript
// 返回新的去重后的数组
_.uniq([2, 1, 2]);
// => [2, 1]
```

###### 数组对象全匹配去重 [uniqWith](https://www.lodashjs.com/docs/lodash.uniqWith)

```javascript
// 返回新的去重后的数组
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

###### 数组对象根据某个字段去重 [uniqBy](https://www.lodashjs.com/docs/lodash.uniqBy)

```javascript
// 返回新的去重后的数组
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
_.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x");
// => [{ 'x': 1 }, { 'x': 2 }]
```

##### 差集

###### 获取 2 个数组的差集(相对第一个数组而言) [difference](https://www.lodashjs.com/docs/lodash.difference)

```javascript
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
```

###### [differenceBy](https://www.lodashjs.com/docs/lodash.differenceBy)

```javascript
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

// The `_.property` iteratee shorthand.
_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
// => [{ 'x': 2 }]
```

#### 对象

##### 遍历

###### 遍历自身属性 [forOwn](https://www.lodashjs.com/docs/lodash.forOwn)

```javascript
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo(), function (value, key) {
  console.log(key);
});
// => 输出 'a' 然后 'b' (无法保证遍历的顺序)。
```

##### 根据`object`对象的`path`路径获取值

###### [get](https://www.lodashjs.com/docs/lodash.get)

```javascript
var object = { a: [{ b: { c: 3 } }] };

_.get(object, "a[0].b.c");
// => 3

_.get(object, ["a", "0", "b", "c"]);
// => 3

_.get(object, "a.b.c", "default");
// => 'default'
```
