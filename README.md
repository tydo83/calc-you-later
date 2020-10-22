# Calc You Later - Full Stack

### Introduction

This is the full app version of [Calc You Later Backend](https://github.com/ci-wdi-900/calc-you-later-backend), with front end and everything. The logic's there, we just need an interface!


### Workflow

The entire back end has been completed for you. You'll be working entirely in `calculate-front-end.js`.


### Steps

Note: we are **not** asking you to handle multi-word operation names like "divided by"... at least, not until stretch goals. So don't worry about them yet! Here are the basic steps you'll need to follow.

1.  The first thing we need to do is `require` our `calculate` function in from `calculate-back-end.js`. If you've forgotten the syntax, check your previous assignments. (Or your friendly local search engine.)
2. Then we'll need to grab our users' input. **IMPORTANT:** we want this app to be user friendly, so we'll ask our user to give us the input in a more human way. That means we'll ask them to write `node main.js 3 + 3`, NOT `node main.js 3 3 +`, which is the computer-y order our `calculate` function asks for. Be sure to save your `process.argv` values in the right variables, knowing what order they'll come in as!
3. Now that we have the input, pass it to `calculate`.
4. Now assign the return value from `calculate` to a variable and print it!

And that's it! That's our whole front end!


### Stretch Goals

* The main stretch goal is to allow them to use multi-word operations like "divided by" or "multiplied by" and such. What we'll need to do to make that happen is to check whether a fourth node argument was entered. If they entered `node main.js 3 + 3`, then `process.argv[5]` would be `undefined`. If they entered `node main.js 3 added to 3`, then `process.argv[6]` would be `3`; adding an extra word in the middle pushes that word back by one index.

    So how do we handle this? There will be two issues: 1) branching our logic--if there are 4 arguments, we'll want to do some more work before we pass our arguments to `calculate`, so we'll have to do some if/else or the like, and 2) if we do have 4 arguments, we'll have to modify what we've got so that we have only three arguments for `calculate`, keeping in mind that function is already designed to check for two-word operations like "added to".

* This one is a very advanced stretch goal, most likely requiring a loop or the string method `slice`, and plenty of research: allow the user to write as many words as they want before the first number. So not just `node main.js 3 times 3`, but `node main.js what is 3 times 3` or even `node main.js can you please tell me kind sir what is 3 times 3`. Plenty of work there. Good luck!
