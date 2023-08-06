# 手写call方法

## 特点
1. call()、apply()和bind()方法都属于函数原型方法

2. 它们3个的第一个参数都是传 this 的指向对象

3. 执行函数自身

4. 都是用来改变this指向
## 基础手写this
```js 
// 在原型链上绑定myCall方法
Function.prototype.myCall = function (ctx, ...args) {
  // 将this指向的对象作为当前的一个属性下
  ctx.fn = this;
  // 当fn作为ctx的属性的时候，调用fn这个属性，属性的this是这个ctx
  ctx.fn(...args);
  delete ctx.fn;
};
// 全局下的sex属性
sex: "中性";

// 对象中的sex属性
const obj = {
  sex: "未知",
};
function myMethod(sex) {
  // this指向调用它的对象 ，是调用它this就指向谁
  this.sex = sex;
  console.log("this指向 :>> ", this);
  console.log("sex :>> ", this.sex);
}

// 改变this指向
myMethod.myCall(obj, "男");
// 不改变this指向
// myMethod("女");
```

## 满分手写this
``` js
// 在原型链上绑定myCall方法
Function.prototype.myCall = function (ctx, ...args) {
  const key = Symbol["temp"];
  // es6新增的symbol：标识唯一键值
  Object.defineProperty(ctx, key, {
    // es5的屬性描述符，给对象指定属性添加额外的配置信息
    enumerable: false,
    value: this,
  });
  // 当fn作为ctx的属性的时候，调用fn这个属性，属性的this是这个ctx
  return ctx[key](...args);
  // delete ctx[key];
};
// 全局下的sex属性
sex: "中性";
// 对象中的sex属性
const obj = {
  sex: "未知",
};
function myMethod(sex) {
  // this指向调用它的对象 ，是调用它this就指向谁
  this.sex = sex;
  // console.log("this指向 :>> ", this);
  // console.log("sex :>> ", this.sex);
  return this.sex;
}
// 改变this指向
myMethod.myCall(obj, "男");
// 不改变this指向
// myMethod("女");
```