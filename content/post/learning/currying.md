+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2020-10-15T09:00:00"
image = "images/blogging/js-hero.png"
slug = "currying"
title = "Currying - not an actionable item for butter chicken. That would be weird."
"categories" = [
  "Learning"
]
"tags" = ["javascript"]
+++

# Currying

Currying transforms a function with multiple arguments into a series of functions each taking a single argument. The fancy term for multiple arguments is "arity", I came across it in a number of posts on currying and figured I'd share the nugget here.

A couple of things to note:

* Currying `transforms` a function
* Argument order matters

```
a, b, c 👉 f() 👉 result

a 👉 f()👇
  b 👉 f()👇
    c 👉 f() 👉 results
```

Lets look at a code example:

Create a function that take an argument and sums it together with an incrementing number. e.g., `5 + 1 = 6`,` 6 + 2 = 8`, `8 + 3 = 11`
The base number should not be modified

```
1   const incrementCount = function() {
2     let num = 0;
3
4     return function() {
5       return num++;
6     };
7   };
8
9   const baseNumber = 5;
10
11  const addToSum = function(base) {
12    let sumStart = base;
13    const num = incrementCount();
14
15    return () => sumStart += num();
16  };
17
18  const incrementStartingAtFive = addToSum(baseNumber);
19
20  console.log(incrementStartingAtFive()); // 6 (5 + 1)
21  console.log(incrementStartingAtFive()); // 8 (6 + 2)
22  console.log(incrementStartingAtFive()); // 11 (8 + 3)
23  console.log(baseNumber); // still 5
24  console.log(incrementStartingAtFive()); // 15 (11 + 4)
25  console.log(baseNumber); // sanity check, still 5
```

* Line 18:  
  - store the return value of `addToSum(baseNumber)` in a variable.
  - The return value is a function `return () => sumStart += num();`
  - Now whenever we invoke `incrementStartingAtFive()` we call the annonymous function on line 7.

* Line 13:   
  - Call `incrementCount` function, a function available to the scope of `addToSum`
  - Increment count retuns a function, stored in `num`
  - When we invoke `num` on line 15, we are able to access the increment functionality inside of the scope  of `addToSum`

