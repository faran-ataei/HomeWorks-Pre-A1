 
# Counter app
 Let's create a simple react app
 you have to make a simple click counter app that whenever you click on increase button, the number in the page
 increases, when you click on decrease it decreases and when you click on reset, the number becomes 0

``` jsx
import { useState } from 'react'
const [count, setCount] = useState(0)

```
Using the useState hook in react,  we can declare and initialize state variables. In this case it is count.

then you should use events just like this on the buttons you  have

```jsx 
onClick={() => setCount((count) => "functionality here"}
```