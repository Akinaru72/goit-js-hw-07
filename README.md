# Homework №7

Before starting the homework, make sure to watch this video: [https://www.youtube.com/watch?v=bzReZsR_yBY](https://www.youtube.com/watch?v=bzReZsR_yBY)

After making changes to your repository, please wait 5 minutes before submitting your work for review. GitHub needs time to update the version.

## Self-check — at this point, you should understand:

- what the Document Object Model (DOM) is and how the hierarchy of DOM elements is built
- the main properties and attributes of DOM elements
- how to manipulate the DOM tree by creating and removing elements
- the essence and functionality of browser events
- how to handle events using `addEventListener()` and `removeEventListener()`
- how to use form element events

It's time to practice and consolidate this knowledge!

---

## Instructions

1. Create a repository **`goit-js-hw-07`**
2. Read each task and complete it in your code editor
3. Tasks must be completed exactly according to the specifications (do not change the initial HTML)
4. There should be no errors or warnings in the console when opening the live page
5. Make sure the code is formatted using **Prettier**
6. Submit your homework for review

**Submission format:**  
The homework should include two links:

- to the source files
- to the live page on **GitHub Pages**

---

## Starter files

Download the starter files with ready markup and linked scripts for each task. Copy them into your project.

> Important: the starter files are in the `src` folder.  
> For GitHub Pages, the `index.html` file must be in the project root, so copy **only the contents of the `src` folder**, the `src` folder itself is not needed.

Use this template for styling your task markup.

> [!NONES] Для стилізації розмітки твоїх завдань використовуй цей
> [макет](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=0-1&mode=design&t=hVhPAcFeZ24V6Z6V-0).

---

## Task 1

The HTML contains a list of categories `ul#categories`:

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Using the properties and methods of `DOM` elements, write a script that:

1. Counts and logs to the console the number of categories in `ul#categories`, i.e., the number of `li.item` elements.
2. For each `li.item` in the `ul#categories` list, finds and logs to the console the text of the element’s heading (`<h2>`) and the number of items in that category (all `<li>` elements nested inside it).

#### What the mentor will pay attention to during the review:

- The number of categories, their names, and the number of items are obtained using `DOM` element properties and methods.
- The data for each category is obtained and logged to the console inside a loop or using the `forEach()` method.
- The console should display the following output:

![Alt text](./assets/goit-js-07.jpg)

## Task 2

Write a script to create an image gallery based on an array of data. The `HTML` contains a list `ul.gallery`:

```html
<ul class="gallery"></ul>
```

Use the `images` array of objects to create `<img>` elements nested inside `<li>` elements.

You can create and append HTML elements using `document.createElement()` and `elem.append()`, or template strings and `elem.insertAdjacentHTML()`.

- All gallery elements should be added to the `DOM` in a single insertion operation.
- Add minimal styling to the gallery using Flexbox through CSS classes.

```js
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];
```

#### What the mentor will pay attention to during the review:

- A gallery of six images has been created and added to the `DOM`
- The gallery is added to the `ul.gallery` list and consists of 6 `<li>` elements, each containing an `<img>` element
- The `<img>` elements are created using data from the `images` array of objects
- All gallery elements are added to the `DOM` in a single insertion operation
- Minimal styling of the gallery using Flexbox through CSS classes is applied

## Task 3

Write a script that, while typing in the `input#name-input` field (on the `input` event), sets its current value into the `span#name-output` as the name for the greeting. Make sure to trim whitespace from the input value. If the input is empty or contains only spaces, the span should display `"Anonymous"` instead of a name.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

#### What the mentor will pay attention to during the review:

- The `input#name-input` element has an `input` event listener
- While typing in the input, its current value is inserted into `span#name-output` as the greeting name
- The input value is trimmed of whitespace at the edges
- If the input is empty or contains only spaces, the span displays `"Anonymous"` instead of a name

## Task 4

Write a script to handle the login form.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

1. The submission of the `form.login-form` should be handled via the `submit` event.
2. When the form is submitted, the page must **not reload**.
3. If there are any empty fields during submission, display an `alert` with the message `'All form fields must be filled in'`. Do **not** add the `required` attribute to the inputs; validation must be done via JS.
4. If all fields are filled and the form is submitted, collect the values of the inputs into an object with two properties, where the key is the input's name and the value is the input’s value trimmed of whitespace. Use the form’s `elements` property to access the inputs.
5. On form submission, log the object with the input data to the console and clear the form fields using the `reset` method.

#### What the mentor will pay attention to during the review:

- The `submit` event is being listened to
- The page does not reload on form submission
- An `alert` is displayed if any fields are empty on submit
- On submit, the console logs an object with two properties, where keys are the input names and values are the corresponding input values, trimmed of whitespace
- After submission, the form fields are cleared

## Task 5

Write a script that changes the `<body>` background color via inline style when clicking the `button.change-color` and sets this color value as the text content of `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

To generate a random color, use the function `getRandomHexColor()`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Note that the function `getRandomHexColor()` returns a color in `hex` format, while the `<body>` background color will be in `rgb` format. This is normal and does not require any changes.

#### What the mentor will pay attention to during review:

- The `<body>` background is set only after clicking the `button.change-color`
- Each click on the `button.change-color` element changes the `<body>` background to a new random color
- The `<body>` and `span.color` have the same color value

## Task 6

Write a script for creating and clearing a collection of elements with the following functionality.

There is an `input` where the user enters the desired number of elements. After clicking the `Create` button, a collection with the corresponding number of elements should be rendered (added to the `DOM`), and the input value should be cleared. On repeated clicks of the `Create` button, the new collection should replace the old one. After clicking the `Destroy` button, the collection of elements should be cleared.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

After the user clicks the `Create` button, the value in the `input` must be validated. It should be within the range from `1` to `100` inclusive. Only if it meets this condition should new `<div>` elements be added to the `DOM`.

To render the elements on the page, create a function `createBoxes(amount)` that takes one parameter — a number representing how many elements to render. The function should create as many `<div>` elements as specified by the `amount` parameter and add them to the `DOM` as children of `div#boxes`.

1. The size of the first `<div>` element should be `30px` by `30px`.
2. Each subsequent element should be 10px wider and taller than the previous one.
3. All elements should have a random background color. Use the provided function `getRandomHexColor()` to generate a random color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

To clear the collection after clicking the `Destroy` button, create a function `destroyBoxes()` that clears the contents of `div#boxes`, thereby removing all created elements.

#### What the mentor will pay attention to during the review:

- After clicking the `Create` button, if the value in the `input` is out of range, nothing happens.
- After clicking the `Create` button, `div#boxes` contains as many colorful squares as specified in the `input`. The `input` value is cleared.
- On a repeated click of the `Create` button, the previous squares are completely removed, and new squares are added according to the new `input` value. The `input` value is cleared.
- All squares in `div#boxes` are colorful and have a random background color.
- The first square in `div#boxes` has dimensions `30px` by `30px`, and each subsequent square is `10px` taller and wider than the previous one.
- After clicking the `Destroy` button, all squares in `div#boxes` are removed.

---

**Live page: [GitHub Pages](https://akinaru72.github.io/goit-js-hw-06/)**
