# es6新增的Symbol有什么作用
::: tip 
ES6 引入的 `Symbol` 是一种新的原始数据类型，用于创建唯一的标识符。它的作用主要有以下几个方面：
:::

1. 创建唯一的属性名：`Symbol` 可以用作对象属性的唯一标识符，避免属性名冲突的问题。由于每个 `Symbol` 都是唯一的，它们不会与其他属性名产生冲突。

   ```javascript
   const id = Symbol('id');
   const obj = {
     [id]: 123
   };
   console.log(obj[id]); // 输出 123
   ```

2. 防止属性被意外访问：通过使用 `Symbol` 作为属性名，可以隐藏对象的某些属性，防止它们被意外访问或修改。

   ```javascript
   const privateProperty = Symbol('private');
   class MyClass {
     constructor() {
       this[privateProperty] = '私有属性';
     }
     getPrivateProperty() {
       return this[privateProperty];
     }
   }
   const instance = new MyClass();
   console.log(instance.getPrivateProperty()); // 输出 "私有属性"
   console.log(instance[privateProperty]); // undefined，无法直接访问私有属性
   ```

3. 定义类的唯一方法或常量：`Symbol` 可以用于定义类的特殊方法或常量，确保它们在类之间是唯一的。

   ```javascript
   const CALCULATE = Symbol('calculate');
   class MathUtils {
     [CALCULATE](a, b) {
       return a + b;
     }
   }
   const math = new MathUtils();
   console.log(math[CALCULATE](2, 3)); // 输出 5
   ```

4. 避免命名冲突：`Symbol` 可以用作枚举值，避免命名冲突的问题。

   ```javascript
   const Colors = {
     RED: Symbol('red'),
     BLUE: Symbol('blue'),
     GREEN: Symbol('green')
   };
   function setColor(color) {
     if (color === Colors.RED) {
       console.log('设置为红色');
     } else if (color === Colors.BLUE) {
       console.log('设置为蓝色');
     } else if (color === Colors.GREEN) {
       console.log('设置为绿色');
     } else {
       console.log('未知颜色');
     }
   }
   setColor(Colors.RED); // 输出 "设置为红色"
   ```

`Symbol` 的主要特点是它们是唯一的，不可变的，并且不会被自动转换为字符串。这使得 `Symbol` 在一些特定的编程场景中非常有用，例如创建私有属性、定义唯一的方法或常量等。然而，由于 `Symbol` 是不可变的，所以无法使用 `for...in` 或 `Object.keys()` 来遍历对象中的 `Symbol` 属性，需要使用 `Object.getOwnPropertySymbols()` 方法来获取对象中的 `Symbol` 属性列表。