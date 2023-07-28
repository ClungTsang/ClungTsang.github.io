# js中for...in和for...of的区别
::: tip 提示
for...in 和 for...of 是 JavaScript 中两种循环语句
:::

## 1.for...in 循环遍历对象的属性名，而 for...of 循环遍历可迭代对象的属性值。举个例子，假设有一个数组 arr，那么 for...in 循环遍历的是数组的索引，而 for...of 循环遍历的是数组的元素。
``` js
const arr = [1, 2, 3];

for (let key in arr) {
  console.log(key); // 输出 0、1、2
}

for (let value of arr) {
  console.log(value); // 输出 1、2、3
}

```
## 2.for...in 循环遍历对象时，会遍历对象本身的属性和继承的属性。如果只想遍历对象本身的属性，需要使用 obj.hasOwnProperty(key) 进行判断。而 for...of 循环只能遍历可迭代对象本身的属性。

``` js
const obj = { a: 1, b: 2 };

Object.prototype.c = 3;

for (let key in obj) {
  console.log(key); // 输出 a、b、c
}

for (let value of Object.values(obj)) {
  console.log(value); // 输出 1、2
}

// 只遍历对象本身的属性
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // 输出 a、b
  }
}

```
## 3.for...in 循环遍历的顺序是不确定的，可能会出现随机的顺序。而 for...of 循环遍历的顺序是按照可迭代对象的顺序进行的。
``` js
const arr = [3, 1, 2];

for (let key in arr) {
  console.log(key); // 输出 0、1、2，顺序不确定
}

for (let value of arr) {
  console.log(value); // 输出 3、1、2，按照数组顺序进行
}

```
::: info
综上所述，for...in 循环适用于遍历对象的属性名，而 for...of 循环适用于遍历可迭代对象的属性值。在使用 for...in 循环遍历对象时，需要注意继承属性和顺序不确定的问题。
:::