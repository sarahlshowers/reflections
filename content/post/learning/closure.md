+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2020-10-15T09:00:00"
image = ""
slug = "closure"
title = "Closing in on Closure"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

# Closure

Aside from it being something you need after a bad break up.

> Closures are a design pattern, based on object oriented programming where functions wrap another function. 

But why do this?

---

Every time you create a function, you're creating a closure that has references to it's surrounding environment (lexical scope). In English, the function has access to variables and functions within its own scope, the scope of its parent function, and global variables.

But. But. What is lexical scope? I hear you cry. It's just software jargon that means a variable that is accessible to a function in a parent function or the global scope. So, every closure has three scopes:

* Local scope (own scope)
* Outer function's scope
* Global scope

In the example where we have a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to all outer function scopes.