# Toggle theme 
in this app the only thing you should do is to make a button that when it's clicked
the theme of the page (background color) changes from dark to light  and vice versa


you can use a toggle theme function like this to change the state: 

```jsx
const toggleTheme = () => {
setDarkTheme(!isDarkTheme)
  }
```

you should have a `<p>` tag that whenever the theme is dark it says dark and when it's light it says light

you can use conditional rendeing like this:
```jsx 
{'your condition (state)' ? 'renders if true' : 'renders if false'}
```


note : you should also use css to make this file