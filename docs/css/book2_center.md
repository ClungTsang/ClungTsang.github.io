# css中8种让元素水平垂直居中的方式
## 当需要将元素水平垂直居中时，可以使用以下十种常用的 CSS 技巧：
1. 使用 flexbox：
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

2. 使用绝对定位和负边距：
```css
.container {
  position: relative;
}

.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

3. 使用绝对定位和自动边距：
```css
.container {
  position: relative;
}

.centered-element {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

4. 使用网格布局：
```css
.container {
  display: grid;
  place-items: center;
}
```

5. 使用绝对定位和 calc() 函数：
```css
.container {
  position: relative;
}

.centered-element {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
```

6. 使用 line-height 和 height：
```css
.container {
  height: 200px;
  line-height: 200px;
  text-align: center;
}
```

7. 使用 display: inline-block 和 vertical-align: middle：
```css
.container {
  text-align: center;
}

.centered-element {
  display: inline-block;
  vertical-align: middle;
}
```

8. 使用伪元素和绝对定位：
```css
.container {
  position: relative;
}

.container::before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```