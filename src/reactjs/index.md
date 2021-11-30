# Теория

> Предполагается, что вы уже знакомы с JavaScript, включая спецификацию ES6 и работали с DOM.
> С официальной документацией React можно ознакомиться [тут](https://reactjs.org).

React упрощает разработку веб-приложений.
В этом курсе мы постараемся объяснить на пальцах как писать приложения на React.

## Приложение на React

Давайте напишем наше первое приложение на React:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/ilezus/embed/oNbVEVE?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ilezus/pen/oNbVEVE">
  Untitled</a> by ilezus (<a href="https://codepen.io/ilezus">@ilezus</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React JS</title>
    <!-- Наши стили -->
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <!-- Скрипты для подключения React на сайте -->
    <script
      src="https://unpkg.com/react@16/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
      crossorigin
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <!-- Наш скрипт -->
    <script src="./script.js"></script>
  </body>
</html>
```

### style.css

```css
body {
  background: lavender;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

button {
  padding: 20px 30px;
  border: none;
  outline: none;
  background: #29293a;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: auto;
  font-family: Arial, Tahoma, sans-serif;
}

#button {
  margin: auto;
}
```

### script.js

```javascript
// React создает кнопку и сохраняет ее у себя
const Button = React.createElement(
  "button",
  {
    onClick: () => alert("Hello world"),
  },
  "Нажмите на меня"
);

// React с помощью метода render, вставляет созданную кнопку в DOM
ReactDOM.render(Button, document.getElementById("root"));
```

## Что такое компонент

Компонент — обычная JavaScript функция, возвращающая React элементы:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function SayHello () {
  return <h1>Hello world</h1>;
};

ReactDOM.render(
  // Наш компонент
  <SayHello/>,
  document.getElementById("root")
);
```

> В примере выше вы наверное заметили что мы импортируем 2 модуля: [react](#indexhtml), [react-dom](#).
> Но мы их не устанавливали.
> Когда мы создавали приложение с помощью **Create React App** он сам их установил.

JSX синтаксис можно применять не только к React элементам, но и к нашим собственным компонентам:

```JavaScript
import React from "react"
import ReactDOM from "react-dom"

function SayHello () {
  // Применяем JSX к элементу
  return <h1>Hello world</h1>;
};

// Применяем JSX к компоненту
const element = <SayHello />

ReactDOM.render(
  element,
  document.getElementById("root")
)
```

Мы с вами знаем что **JSX** с помощью **Webpack** переводится в обычный вызов метода `React.createElement`.

И мы с вами говорили, что метод `React.createElement` первым параметром принимает название тега. Но на самом деле помимо название тега он принимает и компонент.

Если в `React.createElement` мы передали компонент (т.е функцию) вместо названия тега, то он вызовет этот компонент.

Но вы должны запомнить одно правило: название компонента всегда должно начинаться с заглавной буквы. Поэтому мы назвали компонент `SayHello` с заглавной буквой.

Иначе **Webpack** который используется под капотом **Create React App**, при переводе **JSX** синтаксиса в JavaScript, подумал бы что это какое-то странное название тега, а не функция-компонент.

### Пропсы

Пропсы — это тоже самое что и атрибуты в React элементах, но только атрибуты которые мы передаем компоненту принято называть пропсами:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function Component (props) {
  return <h1>{props.name}</h1>;
}

const element = <Component name="Hello world" />;

ReactDOM.render(
  element,
  document.getElementById("root")
);
```

В примере выше, мы передали компоненту `Component` проп name со значением **Hello world** (8 строка).
React собирает все пропсы которые мы передали компоненту и вызывает эту функцию-компонент передав ему в качестве первого параметра эти пропсы (4 строка).

Вы должны запомнить еще одно правило: пропсы можно **только читать**, их нельзя изменять.
Например, **так делать категорически нельзя**:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function SayHello (props) {
  // Нельзя менять пропсы. Можно только читать
  props.name = "Ivan";
  return <h1>{props.name}</h1>;
}

const element = <SayHello name="Hello world" />;

ReactDOM.render(
  element,
  document.getElementById("root")
);
```

### Содержимое React элемента

В предыдущей главе мы говорили что третьем параметром в метод `React.createElement` передается содержимое элемента.

Но как мы знаем содержимое **HTML** элемента может быть как текстом так и посложнее:

```HTML
<div>
  <span>Hello </span>
  <b>world</b>
</div>
```

Точно также и с **React** элементами:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function SayHello (props) {
  return (
    <div>
      <span>Hello </span>
      <b>{props.name}</b>
    </div>
  );
}

const name = "Ivan";
const element = <SayHello name={name} />;

ReactDOM.render(
  element,
  document.getElementById("root")
);
```

> На самом деле метод `React.createElement` принимает больше чем 3 параметра.
> Если содержимое **React** элемента не просто текст, а несколько React элементов, то первый из них передается как третий параметр в методе `React.createElement`, второй из них как четвертый параметр и т.д.

Вот как выглядит пример выше без **JSX**:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function SayHello (props) {
  return (
    React.createElement(
      "div",
      {},
      // Первый дочерний элемент передается как 3 параметр
      React.createElement("span", {}, "Hello "),
      // Второй дочерний элемент как 4 параметр
      React.createElement("b", {}, props.name)
    )
  )
}

const name = "Ivan";
const element = <SayHello name={name} />;

ReactDOM.render(
  element,
  document.getElementById("root")
);
```

Окей, мы поняли что помимо текста, в качестве содержимого React элемента можно вставлять другие React элементы.
Но так же в качестве содержимого можно вставлять и наши собственные компоненты:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function UserName (props) {
  return <b>{props.name}</b>
};

function SayHello (props) {
  return (
    <div>
      <span>Hello </span>
      { /* Наш собственный компонент */ }
      <UserName name="Ivan" />
    </div>
  );
};

ReactDOM.render(
  <SayHello/>,
  document.getElementById("root")
);
```

### Свойство `children`

Содержимое могут иметь не только **React** элементы, но и наши собственные компоненты (но это делается по особому):

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function Say (props) {
  return (
    <div>
      { props.children }
    </div>
  );
}

const elementHelloRu = (
  <Say>
    <span>Привет</span>
  </Say>
);

const elementHelloEn = (
  <Say>
    <span>Hello</span>
  </Say>
);

ReactDOM.render(
  <div>
    {elementHelloRu}
    {elementHelloEn}
  </div>,
  document.getElementById("root")
);
```

Вы заметили проп `children` у компонента `Say` (7 строка) ?
Именно в это свойство **React** передает любое содержимое компонента.

> Любое содержимое которое вы передали вашему компоненту, **React** хранит в специальном **проп** `children`.

### Содержимое как функция

В качестве содержимого компонента можно даже использовать функцию:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function Say (props) {
  return (
    <div>
      { props.children("Ilez") }
    </div>
  );
};

const elementHelloRu = (
  <Say>
    {
      name => <span>Привет {name}</span>
    }
  </Say>
);

const elementHelloEn = (
  <Say>
    {
      name => <span>Hello {name}</span>
    }
  </Say>
);

ReactDOM.render(
  <div>
    {elementHelloRu}
    {elementHelloEn}
  </div>,
  document.getElementById("root")
);
```

Когда вы передаете функцию в качестве содержимого компонента, React устанавливает переданную функцию в специальном свойстве children.

Для React, что переданная функция, что любое другое содержимое компонента одно и то же.

### Пустой компонент

Иногда бывает так, что в зависимости от ситуации, нужно либо что-то отображать либо вообще ничего не отображать.
Это можно сделать если компонент будет возвращать `null`:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function SayHello (props) {
  if (props.name === "Elena") {
    return null;
  }

  return <h1>Hello {props.name}</h1>;
};

ReactDOM.render(
  <div>
    <SayHello name="Lena" />
    <SayHello name="Elena" />
  </div>,
  document.getElementById("root")
);
```

Как показано в примере выше (5 строка), если проп name равен «Elena», то мы ничего не возвращаем.
В таких ситуациях нужно возвращать именно `null`.
Нельзя возвращать `undefined`.
