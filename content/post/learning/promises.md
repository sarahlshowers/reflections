+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2021-04-20T09:00:00"
image = "images/blogging/js-hero.png"
slug = "promises"
title = "What is a promise?"
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

# Promise?

> "A promise is a object that may produce a single value some time in the future"

_________________

## Promise states

There are 3 possible promise states:
* fulfilled: `onFulfilled()` will be called
* rejected: `onRejected()` will be called
* pending: not yet fulfilled or rejected

You can use a callback with a state to handle the fulfilled value or reason for rejections once the promise is settled. A promise with settled state just means that it is not in a pending state. Generally you will want to author your code to handle both the fulfilled and rejected state, for the best user and developer experience - the fulfilled state is the happy path, where your program will likely keep running, eventually making use of the value in the promise callback, often I the chaining of a `.then()` but you also want to be sure to capture the error in the event your promise is rejected, maybe using something as simple as a console statement to log the exception in the developer console.

## `.then()` what?

Every promise must have a returned value (which can be undefined) and supply a `.then()` method which will look something like this:

```
promise.then(
  onFulfilled?: function...,
  onRejected?: function...,
) => promise
```

`onFulfilled()` and `onRejected()` are optional
`onFulfilled()` will be called with the promise value as it's first argument
`onRejected()` will be called with the reason for the rejection as the first argument
`.then()` may called more than once but each `.then()` must in turn return a promise

## Promise chaining

Promise chaining allows you to mimic try/catch behavior

```
fetch(url)
  .then(process),
  .then(handle),
  .catch(handleErrors),
```

Assuming each of the above functions return promises, `process` will wait for `fetch` to complete before executing and `handleErrors` will only execute if any of the promises reject.

### Error handling

End all promise chains with a `catch()`

```
// considered an anti-pattern
save().then(
  handleSuccess,
  handleError,
)

// recommended pattern
save()
  .then(handleSuccess).
  .catch(handleError),
```

In the first example an error in the `save` function will be caught but an error in `handleSuccess` will be swallowed which is why the second implementation is a preferred pattern, such that the `catch()` method will handle rejections from both `save()` and `handleSuccess()`.