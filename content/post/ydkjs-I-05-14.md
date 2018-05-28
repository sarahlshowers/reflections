+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2018-03-06T17:46:00"
image = "images/ydkjs.jpg"
slug = "ydkjs-scope-&-closure-01"
title = "You Don't Know Jacascript: Scope & Closure - Chapter 1 What is scope?"
"categories" = [
  "Learning"
]
"tags" = ["Javascript"]
+++

The first time I read these books, I felt lost and confused a lot of the time! Nevertheless, I persisted. Now, six months later I am re-reading them and I'm surprised how much actually stuck. This is a series of posts breaking down the chapters in my own words in the hope that somebody else who felt as lost as I did might benefit from [Kyle Simpson's genius](https://twitter.com/getify/status/972495616600293381) through another's words. You can puchase his books, published by O'Riley on the usual platforms, amazon etc or even a rare real bookstore.

---------------------------------

Javascipt is technically a compiled language but while it _does_ compile but there isn't a build step like other languages. So the code that is compiles, executes almost right away.

Kyle encourages the reader to understand scope through the lens of a regular conversation. I often say my brain isn't wired like a Software Engineer, so maybe I have to work a little hard than most. Reasoning about a human interaction as a vehicle to understanding scope is most definitley something I can do.

So, there are three major player here in this conversation paradigm; engine, compiler, and scope and we are asked to think like our new friend engine. Such that in the case of a simple variable assignment `var foo = 'bar';` we can now break down the conversation:

>**Compiler:** Hey, scope. I'm looking for a variable named `foo`, do you know if foo exists?

>**Scope:** Yes, I happen to know that `foo` does indeed exist.

>**Compiler:** Cool, thanks.

>_compiler waves a code wand and some code for enginer to use later magically happens_

>**Engine:** Hiya scope! Just checking... do you know if a variable called `foo` happens to be around?

>**Scope:** Yep, compliler was _just_ asking me about that. He should have executed something already for you to use.

>**Engine:** Awesome, thanks.

>_engine assigns the string `'bar'` to the variable `foo`_.


Hopefully, this is as clear as mud! Let's break down the role of each component.

## Compiler
Compiles (duh) and executes our program. In this example our program is simply `var foo = 'bar';`.

## Scope
This guy gathers together a list of variable declarations and takes care of enforcing how they are accessed by our program.

## Engine
Finally, the guy that does all of the "dirty work"; parsing and code generation, two of the main steps of compilation. So creating the variable `foo` and then assigning the value `'bar'` to the variable `foo`.

What if scope can not find `foo`? Well, in that case compiler will ask scope to create the variable called `foo` within that current scope. For example,

```
function foo(bar) {
  console.log(bar); // 'hello world'
  console.log(baz); // ReferenceError
}

foo('hello world');
```

So, when scope looks for the value of `baz` which is just a variable for all intents and doesn't find a reference inside of the `function foo` it will look to the the next outer scope, which here would be the global scope and check there and unless your program is running is strict mode, scope will define the varibale `baz` in the global scope.

What is strict mode? I'm no expert but the TLDR; is that it prevents Javascript from defining variable in the global scope. If this happens no reference to `foo` will be found and your program will spit out a `ReferenceError`.