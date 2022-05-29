Now, to get started with the basics.

I'm back here in this project setup

about which I talked at the end of the previous section.

You got these three project folders.

Again, you find them attached to this lecture

in case you skipped the previous section,

but I do recommend that you watch it.

And then, for every project folder,

I ran npm install, to install all the dependencies.

And we got our two backend Node.js projects here,

and one front-end project.

And they all produced the same website in the end,

with different means, as you learned in the last section.

So that's a setup, and how do we now write tests?

Well, for this, I'll dive here, into the front-end folder,

though, It really does not matter

because as you will see later,

the same tests will work for front-end and back,

and it does not matter here,

at least for the things we are testing.

Later in the course, you will learn about some differences,

but for the start, it does not matter.

And here in this basic-testing-frontend folder,

we got this app.js file, which holds the starting code,

the main entry code that's executed here,

when the index HTML file is loaded.

Now, we get lots of code in there,

and we will get back to this code later, in this course,

and we will learn what we can do about this code,

when it comes to testing,

and how we maybe should improve this code for testing.

But for the moment, we'll ignore this code,

and we'll instead dig into one of the files

that gets imported into this code.

And to be precise, I wanna dive into the math.js file here,

in the source folder.

In this file, I'm exporting one function,

the add function, which takes numbers,

which seems to be an array of numbers,

since we're looping through it here.

And then, we are calculating a sum,

where we start at zero, and where we add every number

that's part of this array to the sum.

And then, we return to sum in the end.

Now, this add function gets used in our code.

You can, of course go, through the code,

to see how it works and what happens there.

We are using the add function here in the end,

after parsing, and cleaning, and transforming some numbers

that were submitted by the user,

but that's not too important.

Instead, let's focus on this add function.

Because this add function is our unit

that we want to test.

A unit, as you learned, is a small piece in your software,

that works pretty much standalone, you could say.

And very often, your units are functions.

It could also be a class maybe, but very often,

I would say, in the vast majority of cases,

your units are functions.

And you wanna find the smallest pieces, really.

So for example, in app.js, we also gotta function.

The form submit handler, where a lot of things are going on.

You could call this a unit, but actually,

the functions that get called inside of these functions

are the smaller units.

If they weren't, they wouldn't be called in this function.

So you wanna, in the end, look for functions

that are not calling any other functions, you could say,

and that are your units.

And in the end, your units should be small,

and not do too many things,

but it will also get back to that later.

So that's our unit.

The add function is the unit we want to test.

And what can we test here?

Or how do we test this?

Well, for this, let's first of all,

add a new file that contains the tests for this function,

that's what you typically do.

Now actually, Vitest also supports

writing your tests in the same file as your main code is.

It supports in-source testing, as it's called.

And this can be very useful as you will see later,

but for the moment, we'll ignore this feature,

all because Jest does have it.

Therefore, we'll do something,

which you will typically do, we'll add a new file.

And now very important,

We're going to give the file,

the same name as the main file, which we wanna test,

but we're going to add .test here,

in front of the file extension.

Alternatively, you could use .spec.

That's another common choice.

Both works.

And if you choose .spec or .test, Vitest,

once you execute it, will automatically see

that this is a testing file that contains tests,

and it will execute any test you write in that file.

And the same is true for Jest.

So you wanna choose math.test.js or math.spec.js,

and then your test runners will pick up that file,

and will execute that file.

And Vitest is our test runner here, as you learned.

And Vitest is already installed here in this project,

and it is executed if we run the test command.

It's actually executed like this,

and I'll get back to what these flags mean,

but it will be executed.

So we got this math.test.js file,

and now, with that file added,

we wanna add our tests to that file, but how do we do that?

Well, to add a test, you use a specific keyword.

And keyword is the test keyword.

To be precise, test is a function,

and to use it, you should import it from vitest.

If you would be using Jest,

you could also use the test keyword,

even without importing it.

If you don't want to import it,

you can also use the function without out importing it,

by adding a special flag here,

after vitest and package.json.

If you add --globals, then those key functions,

like the test function, which I just you,

are available globally,

and you don't need to import them.

That can be more convenient,

but I will actually not use this,

and I will instead import test here,

instead of having it globally available,

because that gives me better

auto completion and support here in the code editor,

as you will see.

So you at import this test function here from vitest.

Alternatively, you can import the it function,

which does the same thing. they are synonyms.

You can use test or it, and the same is true for Jest.

It supports a test function or a it function.

Now, it might be a strange name,

but it will make more sense in just a second.

These functions test or it can be executed.

Here, I'm using the it function.

And then, as a first argument, you provide a string.

And in that string, you define what your test will test,

and what your expectation is.

And you wanna provide a very short concise sentence

that describes this.

You don't wanna write an essay here.
