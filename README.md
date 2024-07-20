# label-button-example

Многие (к сожалению, не все) кто хоть раз разрабатывал формы, сталкивались с элементом label (лейбл, ярлык, как вам угодно). И знают, что при правильном его использовании пользователю не приходится целиться мышью в галочку или радиокнопку.

Кто-то добавит при этом, что скринридеры могут ассоциировать лейбл с элементом ввода и пользователи с нарушением зрения могут легко сориентироваться в вашей форме.

Но не все знают, что лейбл можно повесить и на элемент button: https://codepen.io/alinaki/pen/XWjLedQ:

```html
<main>
  <button type="button">Click me</button>

  <button id="clickered" type="button">Click me with clicker</button>

  <label>
    I am the label
    <button id="labeled" type="button">Click me with label</button>
  </label>

  <label for="clickered" tabindex>I am your clicker!</label>
</main>
```

JS:

```js
const clickeredButton = document.querySelector("#clickered");

const labeledButton = document.querySelector("#labeled");

clickered.addEventListener("click", () => {
  alert("Clickered button clicked");
});

labeled.addEventListener("click", () => {
  alert("Labeled button clicked");
});
```

Да, возможно, кнопке свой ярлык не нужен и даже `MDN` сообщает нам об этом, но!

Но в лейбл можно добавить дополнительную информацию, которая будет однозначно и семантично связана с кнопкой и поможет, например, скринридерам или при создании тултипа.

Лейблом можно продублировать кнопку без внесения лишней когнитивной нагрузки (но не стоит, фокус он не примет). Пожалуй, для каких-нибудь игровых интерфейсов вполне может быть приемлемо.

А вот если вы не используете кнопки и балуетесь `role=“button”` на div-ах (в лучшем случае) — этой возможности вы лишены в принципе.
