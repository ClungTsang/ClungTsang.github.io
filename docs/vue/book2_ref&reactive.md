# ref、reactive的使用
::: tip
当使用 Vue 3 时，我们有两个主要的响应式 API：`ref` 和 `reactive`。它们都用于创建响应式数据，但在使用方式和适用场景上有一些区别。
:::

## `ref`

`ref` 是 Vue 3 中的一个函数，它接收一个初始值作为参数，并返回一个包装后的响应式对象。`ref` 可以用来包装基本类型的值，例如数字、字符串、布尔值等。它的使用方式如下：

```javascript
import { ref } from 'vue';

const count = ref(0);
console.log(count.value); // 输出：0

count.value++; // 更新值
console.log(count.value); // 输出：1
```

在模板中使用 `ref` 时，需要通过 `.value` 来访问和修改值。

## `reactive`

`reactive` 是 Vue 3 中的另一个函数，它接收一个普通对象作为参数，并返回一个响应式代理对象。`reactive` 可以用来包装对象、数组等复杂类型的值。它的使用方式如下：

``` js
import { reactive } from 'vue';

const state = reactive({
  name: 'John',
  age: 25
});

console.log(state.name); // 输出：John

state.age++; // 更新值
console.log(state.age); // 输出：26
```

在模板中使用 `reactive` 时，可以直接访问和修改对象的属性。

## 区别和使用场景

- `ref` 只能包装基本类型的值，而 `reactive` 可以包装对象、数组等复杂类型的值。
- 使用 `ref` 包装的值，在模板中需要通过 `.value` 来访问和修改；而使用 `reactive` 包装的值，在模板中可以直接访问和修改属性。
- `ref` 适用于单个值的场景，例如计数器、开关等简单的状态；而 `reactive` 适用于复杂的数据结构，例如表单数据、组件状态等。

总结起来，`ref` 适用于简单的值类型，而 `reactive` 适用于复杂的对象类型。根据具体的使用场景，选择合适的响应式 API 可以提高代码的可读性和维护性。

希望这篇文章对你有所帮助！
## 拓展阅读
- [全方位带你掌握 ref、reactive，开启 Vue3 响应式的大门](https://zhuanlan.zhihu.com/p/576462683)