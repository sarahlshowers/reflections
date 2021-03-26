+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2021-26-03T12:00:00"
image = "images/blogging/js-hero.png"
slug = "object-prototype"
title = "The object prototype"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

# Learning object prototypes with food - NOM!

Raise your hand if you've been ignoring how much you understand about some of the fundamentals of JavaScript? 🙋‍♀️
Sticking with the food theme from posts past, let's revisit the ol' burger to demonstrate some of the aspects of object prototypes. 🍔

______________

When you type `Object.prototype` into the developer console and expand the output, you should see something like this:

![The Object Prototype](/images/javascript-images/object-prototype.png)

This is the Object prototype. You can do the same for String, Array, Date - basically primitives and some other built-in objects. You can see a full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

So now let's create our `lameBurger`

```
let lameBurger = {
 patties: 1,
 cheese: null,
};
```

Now, checkout `lameBurger` in the console - see how it has inherited the Object prototype?

![The Lame Burger Object Prototype](/images/javascript-images/lameburger-object-prototype.png)

How can we go about making our lameBurger awesome? Well, how about we use the `lameBurger` object as our "prototype"? I'd still want a burger with patties and cheese, but awesome-er!

Step one, create a new burger and use `lameBurger` as the basic foundation on which we want to build our awesome burger.

```
let awesomeBurger = Object.create(lameBurger);
```
And inspect the `awesomeBurger` object...

![The Awesome Burger Object Prototype](/images/javascript-images/awesomeburger-object-prototype.png)

At first glance we see an empty object. Well, yeah - we defined an object with no properties on it but if we click into that, we can see on the `awesomeBurger` object's prototype, the properties from `lameBurger` which in turn inherits from the Object prototype.

Let's play with this some more.  Our new `awesomeBurger` is still pretty lame. How about we add some yummy extras? `awesomeBurger.patties` still shows our burger still only has 1 patty, because that's what it's inheriting from `lameBurger`. Let's double our burger!

```
awesomeBurger.patties = 2
```

And check the value of `awesomeBurger.patties` again in the console... Interesting 🤔 So, we didn't change anything on `lameBurger` but we do now see that `awesomeBurger` has it's own `patties` property, with a value of 2.

![The Awesome Burger Object Prototype 2](/images/javascript-images/awesomeburger-object-prototype-2.png)

So, we now see that if we look for `patties` and the new Object doesn't have a `patties` value defined, the parser will look to the object's prototype which in our case is `lameBurger`. 

What would happen if `lameBurger` didn't have any patties?
🤔 
🤔 
🤔 
🤔 
We would get `undefined`. Why? Because `lameBurger` inherits from the Object prototype, which doesn't have a `patties` propery.

We can also add new properties to an instance of an object. Let's make our `awesomeBurger` better yet.

```
awesomeBurger.cheese = "yes"
awesomeBurger.bacon = "yes"
awesomeBurger.avocado = "yes"
```

Now we've added new properties to awesome burger, let's take a look at both our `lameBurger` and `awesomeBurgers`.

![Both burgers](/images/javascript-images/awesome-and-lame-burgers.png)

We can still change the values on `lameBurger` and `awesomeBurger` will still inherit that modified value but so long as `awesomeBurger` has it's own value for any given property defined, that is the value that will be assigned.
