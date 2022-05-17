We will be adding event handlers, meaning event listeners - these are called synthetic events and are very similar to regular old DOM events. The ones we will most commonly be using in this course are onClick, onChange and onSubmit. The syntax looks like this: `onClick={handleClick}` (handleClick being the conventional name for an onClick event handler function, and of course we write this function inside the component where we will be using it.)

There is nearly an onSomething (or close to it) for every type of event type that there is on [DOM elements](https://developer.mozilla.org/en-US/docs/Web/API/Event/type) <br>

*they don't map perfectly so if you're using one that isn't onClick, onSubmit, onChange make sure to look up the event you're intending to use and find its React equivalent*

[React Synthetic Events](https://reactjs.org/docs/events.html)


### state and events go hand in hand
1. we use events to update state
2. updating state triggers the component that holds that state to re-render, re-run that component's code and also remount that component on the page/browser

fun onMouseOver event:
https://codesandbox.io/s/hover-action-s5bfm8


button pause/resume example plus counter variable that increments: 
https://codesandbox.io/s/pause-resume-iy7fvi

our useState hook comes to us from React so we MUST import it in the component where we intend to use it. That looks like this:

`import { useState } from 'react`

the curly braces are required. I always space out my code out inside of { }s with the extra white space as above, but you do not have to.

then our useState hook is used like this:

`const [variableName, setVariableName] = useState(inside here we place the default value of variableName)`

this gives us the ability to manipulate and save state via events such as a button click or other user input. (We will use this work flow A LOT when we start working with forms.)


[Virtual DOM](https://adhithiravi.medium.com/react-virtual-dom-explained-in-simple-english-fc2d0b277bc5)

[More Info On Synthetic Events](https://learn.co/lessons/react-events-in-detail)

