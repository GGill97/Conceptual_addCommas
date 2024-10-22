### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front end framework that allows us to build front end apps. We can create reuseable components which makes it easy to build apps.

- What is Babel?

it is a transpiler that can convery JSX which cannot be read by the browser.

- What is JSX?

it is like writing HTML in JS. it lets us write React componenets and then covert with using babel for the brower.

- How is a Component created in React?

a component is created by writing a function that returns some JSX.

- What are some difference between state and props?
  state can be mutated while props cannot be. when state is changed a comp. is re-rendered. state is not passed down to child components. Only way to pass info down to children is through props.
- What does "downward data flow" refer to in React?
  Downward data flow is the idea that parent components pass data down to their
  children via props. In order to make data go the other way, we have to pass a
  function down from the parent that the child can then call with some
  information.
- What is a controlled component?
  A controlled component in React is like a form (an input box, for example) that is controlled by React. Instead of letting the form manage its own content, React takes charge of what goes in and out of it.

- What is an uncontrolled component?
  An uncontrolled component in React is when the form elements (like an <input>, <textarea>, or <select>) handle their own state, without React being in charge of the value. Instead of using React's state to manage the value, the form element itself keeps track of what’s typed.

- What is the purpose of the `key` prop when rendering a list of components?

allows react to quickly indentify which comps are changed so that it knows which ones are re-rendered quickly.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect. What use cases is it used for in React components?

`useEffect` is used to run code after a rendering happens. Most commonly this is
used to do something after a render, or after the initial render. Examples could
include communicating with an API, syncing information to local storage, or
working with timers.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

`useRef` gives us an object with a key of `current` that can hold any value we
want. The ref persists across rerenders, and is independent of the component's
rendering process. Mutating a ref does not trigger a rerender.

- When would you use a ref? When wouldn't you use one?

Two common use cases for refs are: (1) accessing an underlying DOM element, and
(2) working with timers. You wouldn't want to use a ref to manipulate the DOM if
you could achieve the same result by simply using state. Refs are an escape
hatch that allow you to access the DOM when you're trying to do something that
you can't do with props / state.

- What is a custom hook in React? When would you want to write one?

A custom hook is a function starting with `use` that can help you refactor
duplicate code across several components, or move business logic out of a
component. They often involve built-in hooks coming from React (such as
setState). The most common example of a custom hook is one that will toggle a
boolean in state, something like:

```js
const [bool, toggle] = useToggle(false);
```

Rather than exposing the state setter directly, this hook just gives us a toggle
function that allows us to toggle the boolean.
