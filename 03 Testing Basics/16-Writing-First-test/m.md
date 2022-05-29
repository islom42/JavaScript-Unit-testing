Now to get started,

we could simply write a test

that should test the main thing this function should do.

This add function.

It should sum up all the numbers in an array of numbers

that's passed into this function,

and it should then return the sum.

So we could write here,

it should summarize all number values

in an array.

Something like this.

Now you also see why the it function exists

because now this reads like a nice sentence.

It should summarize all number values in an array.

That's why it's called it.

Now, this reads like nice sentence.

If you would've used test instead,

then it reads test should summarize all number of values,

which also isn't too bad.

But I prefer it also,

because many other test runners use this function

instead of test, but ultimately it's up to you.

So here we have this it function which we execute,

to which we pass the description of our test.

The description of course is nice,

but what's missing is the actual test.

And that's the second argument you pass

to this function, to the it function.

Here, you pass a pointer to a never function,

or you just create an anonymous function in place.

For example, an anonymous arrow function.

And in the body of dysfunction,

you will write your actual testing code.

And this testing code is now of course

the interesting part.

Now this function will be executed when you run the test.

So your test runner will see this function

and execute it for you,

or it will execute this function for you, to be precise,

because with the it function, we register this test

and it will be picked up by the test runner.

But right now, this inner function isn't doing anything.

Now what should it be doing though?

Well, it should in the end execute the add function,

pass in an array of numbers,

and then define some expected value,

which then will be checked by vitest.

So by the assertion library you are using,

and vitest as you learned,

is both test runner and assertion library.

In the end, it combines both.

And then it will either mark the test as successful

if your expectation was met,

or as a failed test if it was not met.

So here we could, for example,

say that we wanna execute the add function.

And for this, you need to import add from the moth JS file.

And one tiny note here, if you're using native ES modules

without any transpiler

or without any built tool like Webpack,

then in your main code, you have to add the file extension

in your import statements.

That's how ECMAScript modules work.

If you're not having any special tool like Webpack,

that's getting rid of that in the end.

In most projects,

you might be used to not adding these file extensions.

You actually do need to do it

if you don't have extra bill tool.

Now vitest acts kind of like such a bill tool,

and therefore there you can omit the file extension.

I'm just mentioning this here to avoid confusion.

But now we're importing the add function,

and we can execute it here in our test function

because we wanna test the add function here.

We're testing the math file,

and there we wanna test this add function,

which is the unit we wanna test.

So we execute it here,

and we pass an array of numbers to it.

Let's say an array that contains one, two, and three.

The three numbers, one, two, and three.

And what we get back is the result

because that is what we expect to happen.

And we know that this is of course

all is what our add function does.

Now we have the result.

Now we wanna define our expectation.

What we expect this result to be,

and what we would consider a success.

And for this for defining such expectation,

there is a never function exposed by vitest,

the expect function.

And for jest, it's the same there.

You can also use the expect function,

and you can also use it in the same way

because vitest and jest are compatible regarding that.

As you can also learn on the vitest site,

there they are mentioning

that they have this jest expect compatible API,

so you can use expect and everything that's related to it,

just as you could use it with jest.

So here we can then execute this expect function,

and to the expect function,

we pass the result we derived in our test.

So in this case, the result constant

which holds the result that was produced

by calling add with that array.

Now on the result of calling expect,

you call a never method.

So you chain a method call here on expect,

and that is now a method that typically starts with two.

And then there are many methods that start with that name.

All these methods are provided by vitest,

or by the assertion library used under the hood,

to be precise.

And if you take a look at these method names,

day in the end all are pretty clear regarding their naming.

I would say, they in the end all allow you

to define your expectation,

or your success criteria, to be precise.

For example, here we could say

that we expect the result which we got

to be six in this case, right?

Because we have one, two, three.

If we add all these numbers up,

we would expect that to be six.

So we expect the result to be six.

This is how this can be read.

And if you take another look here, at all these methods,

you see that there are many things you can check.

You can check whether it's maybe not a number,

if it's null, if it's truthy, if it's a string,

if it contains a certain substring,

if it's greater or smaller than the apra number.

There are many things you can check,

basically all the use cases you could ever want.

You can also learn more

about all these different tool functions.

If you go to vitest API, and they are under expect,

you find all these different functions.

And if you click on one,

you get a more detailed explanation, and also an example.

So that's very useful,

and you should definitely use this resource

to learn more about it

because we're not going to see all these functions in action

in this course, but we'll see quite a lot of important ones.

So now we expect this to be six.

That is our first test.

It's a simple, basic test.

And I can already say

that your tests should be simple and basic,

but it is a test.
