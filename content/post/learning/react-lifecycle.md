+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2021-0928T17:00:00"
image = "images/blogging/js-hero.png"
slug = "react-lifecycle-analogies"
title = "Recapping React Lifecycle Analogies"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

> Anyone that knows me, knows I love a good analogy. Well, look-y here at [this very Sarah-friendly article](https://betterprogramming.pub/learn-reacts-lifecycle-methods-through-an-analogy-9fc82b990ece) I found while looking up stuff on React's lifecycle methods

---

# Lifecycle methods

So let's run with this excellent analogy idea and make it food! YUM!
First, for the visual folks - [a diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) the React docs reference in the lifecycle hooks API
![React Lifecyle methods diagram](/images/javascript-images/react-lifecycle-methods.png)

## Making Lame Burgers, Good Burgers 🍔 😋

*"Welcome to Good Burger, home of the Good Burger, can I take your order?*

I think I have dated myself using that quote. IYKYK!

### Invoking the component

_Analogy_ Good Burger needs a menu item worthy or it's name, without a Good Burger on the menu, we will only have lame burgers!

_Explaination_ Before the component comes to existence, it’s first called by its parent. For instance, the `MainContainer` is called by `App.js` and you can see it in the return statement of render.

### `constructor()`

_Analogy_ The foundation for every Good Burger is a lame burger; a meat patty and a bun.

_Explaination_ Constructor fires up first. It evaluates the props (the base ingredients for a Good Burger), creates initial state and binds functions to the class. You should call `super(props)` before any other statement. Otherwise, `this.props` will be undefined in the constructor. You should not call `setState()` in the constructor.

Typically, in React constructors are only used for two purposes:

- Initializing local state by assigning an object to this.state.
- Binding event handler methods to an instance.

### `render()`

_Analogy_ So we already know we need a bun and a meat patty, that's all we need to create a Good Burger so we can prep then plate with those.

_Explaination_ Render evaluates state and props. Render needs to act like a pure function (every time needs to produce the same outcome).

### `componentDidMount()`

_Analogy_ The basic elements of the burger are ready to go, we are ready to build our order.

_Explaination_ Now that your component is already sketched out, you can do whatever you want — go wild with fetching, setting the state, or starting a timer. Your app won’t crash because you have solid foundations and structure for this kind of a party!
Initialization that requires DOM nodes should go here. 
If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

### `componentDidUpdate()`

_Analogy_ "Order in! One Good Burger". "Oui Chef!" We can get to work on creating a Good Burger our list of ingredients now includes cheese, lettuce, tomato, onion, and special sauce.

_Explanation_ `componentDidUpdate` lets you check if the `prevProps` and `prevState` are different than the ones that already arrived. That means that you can set a tracker that checks for a specific value of props/state and, if that value is found, an action is performed. This method can be useful when your component needs to be re-rendered based on specific changes to props/state, for example updating the list of ingredients to include the things needed to create a Good Burger.

### `componentWillUnmount()`

_Analogy_ The order is complete and the ticket has left the line, on it's way to the diner. The ticket is added to the pile of complete orders and we clean down ready for the next order.

_Explanation_ `componentWillUnmount` is your last chance to pull an autosave or end any kind of async processes.