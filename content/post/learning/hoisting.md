+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2020-10-28T09:00:00"
image = "images/blogging/js-hero.png"
slug = "hoisting"
title = "When this is that and when this is this?"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

Understanding `this` and scope was one of the fundamental Javascript priciples I kinda understood but didn't really 😬
______________

Here's what I didn't, in fact know. At least not well.

# Hoisting

## What's the difference between using `var`, `let`, and `const`?
So in the [scope post](http://www.sarahlshowers.com/scope/) I talk about the difference in enforcing whether or not reassignment is allowed and block scoping but I negected to discuss hoisting.

## What is hoisting?
Hoisting is function declarations and variables being moved to the top of the script. So that this:
```
console.log(sushiRolls); // undefined
var sushiRolls = 1;
```

actually looks something more like this when the code is executed:
```
var sushiRolls;

console.log(sushiRolls); // undefined
sushiRolls = 1;

During creation, the JavaScript engine places the variable `sushiRolls` in memory and initializes its value to undefined.

```
BUT. if we look at the same code using `let`
```
console.log(sushiRolls); // undefined
let sushiRolls = 1;
```
We don't get undefined.
We instead get `"ReferenceError: Cannot access 'suchiRolls' before initialization`. That's because, behind the scenes the JavaScript engine hoists the variable declarations that use the `let` keyword. However, it doesn’t initialize those variables.

## How does that 👆 relate to `this`

Let's poke around with some yummy code. Burger anyone 🍔?

```
hamburger = {
  pickles: "yes",
  patty: "yes",
  cheese: "yes",
  build: function() {
    return `${this.pickles} ${this.patty} ${this.cheese}`;
  }
}
hamburger.build(); // "yes yes yes"

lameburger = {
  pickles: "no",
  patty: "no",
  cheese: "no",
  build: () => {
    return `${this.pickles} ${this.patty} ${this.cheese}`;
  }
}
lameburger.build() // "no no no"
```
### What's the difference between `hamburger.build()` and `lameburger.build()`?
For `lamburger` the use of an arrow function means that `this` is lexically bound to the scope of the code in which the function is called.
The `hamburger` object will return the string, `"yes, yes, yes"` but the `lameburger` obeject will not return `"no no no"`, it will return `"undefined underined undefined"`.

### What causes the different behaviors and how would you make them the same?
There are instances where you may want to keep a regular function expression, like the lameburger use case. But the challenge here is how can we keep the `build` function the same, and instead change how we might be able to set the scope.

So, `build` has access to the scope in which it is called. Which means that is has no knowledge of `pickles`, `patty`, and `cheese` which are defined in `lameburger`, to which the global scope has no access.
To resolve we can define the variables in the global scope and bind them to `this` (which is also the global scope cuz `=>`).
Now when we create the `lameburger` object, `pickles`, `patty`, and `cheese` can refernce the varables defined in the global scope.
And then, when we execute the `lameburger` function the arrow function, which will look to the global scope when referenceing `this` can access the variables as we have defined them to the global instance of `this`.

```
this.pickles = 'no';
this.patty = 'no';
this.cheese = 'no';

lameburger = {
  pickles,
  patty,
  cheese,
  build: () => {
    return `${this.pickles} ${this.patty} ${this.cheese}`;
  }
}

lameburger.build();
```