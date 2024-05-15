---
tutorial: 'https://www.youtube.com/watch?v=Gw6i3BWzwNY'
---

# `02.1` Mapping array objects to `<li>`

with the knowledge you have learned, now let's render a list of `<li>`'s using `map` method

```js
const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' },
];
```

## Instructions:

create component called RenderList to render a list of `<li>`'s that corresponds to each animal using `map` method. the result should be something like this:

```js
<li>Horse</li>
<li>Turtle</li>
<li>Elephant</li>
<li>Monkey</li>
```

## Hint:

- You can use the second parameter of the map function as a `key` to uniquely identify each HTML item.
