> Предполагается, что вы уже знакомы с JavaScript, включая спецификацию ES6 и работали с DOM. 
> С официальной документацией React можно ознакомиться тут.

React упрощает разработку веб-приложений. 
В этом курсе мы постараемся объяснить на пальцах как писать приложения на React.

<hr />

# Приложение на React
Давайте напишем наше первое приложение на React:

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <title>React JS</title>
  <!-- Наши стили -->
  <link rel="stylesheet" type="text/css" href="./style.css"/>
  <!-- Скрипты для подключения React на сайте -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
  <div id="root"></div>
  <!-- Наш скрипт -->
  <script src="./script.js" ></script>
</body>
</html>
```

**style.css**

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

**script.js**

```javascript
// React создает кнопку и сохраняет ее у себя
const Button = React.createElement("button", { 
  onClick: () => alert("Hello world")
}, "Нажмите на меня");

// React с помощью метода render, вставляет созданную кнопку в DOM
ReactDOM.render(Button, document.getElementById("root"));
```
