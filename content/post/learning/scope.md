+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2020-10-14T17:00:00"
image = ""
slug = "scope"
title = "Revisiting scope in JavaScript"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

## Scope in JS

### But First

Let's take a step back to review the following keywords; `var`, `let`, and `const`, I promise there is some related scope content here.

Prior to ECMAScript 6 (ES6), there wasn't any real enforcing of variables that were being used as constants - that is the program should never modify the value assigned to a varible marked as a constant. The convention for constants were denoted using `ALL_CAPS` as the variable name. So the following `var HOME = 'NYC';` can be reassigned. Using the syntax introduced in ES6 we can now enforce that constant assignment using the keyword `const`. If you try to reassign a varible that is a constant, you can betcha that the console will tell you off with some angry red text!

Ok, so we've established that there is a difference in convention vs enforcing varibale assignments. What about `let` vs `const`. So, const _does_ allow the value of a varible to be changed, as for the schools of thought as to whether to use one or the other as a default way of authoring variable declarations is fast becoming the new tabs vs spaces argument.

Another feature introduced by `let` and `const` is that both honor block scoping. So that, if you use either inside of a `for loop` or an `if statement` for example, the varibles will be scoped to that block. Cool, right?


## Scope, for real-zies

Ok so the TLDR here; scope basically is which variables are available under which contexts. Crystal clear now what scope is? Right! Fuzzy as heck and it's definitly something that trips folks up. So, let me try this analogy that resonated with me.

Imagine you have a one way mirror. You can see through it to what's on the otherside, right? But whoever is on the otherside only see's their own reflection. Now, let's translate this into software - we are a variable inside of a function, we are able to see through to everything that is outside which means we can see other variables that are declared outside of our function but the other scope is not able to see into our function, it doesn't know what variables we have available so can't use them. Does that make more sense?

Let me illustrate this with code and food 😋
```
let temperature = 'rare';

console.log(temperature); // 'rare'
console.log(steakCut); // ReferenceError: steakCut is not defined

// code here can NOT use steakCut but can use temperature

function myFunction() {
  var steakCut = 'fillet mignon';

  // code here CAN use steakCut and temperature

  console.log(temperature); // 'rare'
  console.log(steakCut); // 'fillet mignon'
}
```