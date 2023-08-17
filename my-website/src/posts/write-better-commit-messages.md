Have you ever received a text from someone and your mind can't make heads or tails about it.

Or when the doctor hands you a piece of paper that contains the prescription for your medication and the letter looks like arabic.

I’ve been there, you’ve been there, we all have been there.

The commit messages on github are the same thing when regarding communication and clarity.

If you check some of the commit messages you will see what I am talking about.

Sometimes it is not enough to just write good code, you need to be able to express your code into human words.

So put on a seatbelt, and let's look at how commit messages can affect you as a developer, as well as the code you are working on.

## why is it important

Communication is the foundation of the human race, without it we would be lost.

Imagine that you are going to work on some big open-source project for the first time and then you see thousands of commit messages like “fix bugs”, “changes”, “update”.

At this point you are simply lost in the woods my friend.

You must first think about the people that will read your message.

So you need to be precise when writing commit messages, avoiding room for interpretation.

The people working on the project need to be on the same page when it comes to the programming world.

Without collaboration and communication there is no way the project will evolve into something.

## Ask questions and you will have the answers

Next time, when you write you commit message, think of these questions:

What was the purpose of those changes?

Why were the changes necessary in the first place?

What problem is being addressed?

After you answer these questions you will have the perfect commit message ready to go.

## the future will reward you

A good commit message can save hours when developing and debugging code.

you can choose from those two commit messages below:

git commit -m “Update styles”

git commit -m “Adjust font size and padding header to improve the mobile responsiveness”

Which one do you pick? I will give you one try…

Given that, you must consider taking some time to really write a commit message that makes the people looking at your code understand why this change is being made, not just what is changing.

Essentially, when you write a good commit message, you are making a deal with the future.

Dedicating some time to come up with a solid commit message that will help you and the people working on the project.

Some standard commit messages

The idea is to segment the different types of commit messages depending on the changes made.

You can start you commit message with one of these words: feat, docs, fix, style, test, perf

_Feat_ - feat is used when you just implemented a new feature

_Docs_ - Documentation changes

_Fix_ - fix a bug or issue on the codebase

_Style_ - Changes related to the style, always good to be descriptive.

_Test_ - Adding new tests or updating old ones.

_Perf_ - Improve overall code performance, like refactoring or optimization

Right off the bat we can see how prefixing our commit messages with a specific keyword can help us distinguish between multiple areas of development.

## You can use this

Of course it is worth mentioning that there is no universal rule when writing commit messages.

Most of the time depends on the project that might have their own guidelines for commit messages.

But there are always some conventional formats that you can start using.

Like this one:

_<type> (<scope>): <subject>_

_Type_: Describes what area you are making the changes or adding stuff. Like mentioned above, some types include feat, docs, fix, and etc.

_Scope_: This one is optional, but it doesn't hurt to have. The scope points to the part of code that is being changed, it can be a component, a file, an api, and so on.

_Subject_: A concise description of the change. No need for long sentences, remember what I said earlier, take some time to really think of a good description that highlights the main objective of the message.

Here is an example using this type of format:

feat (authentication) : Add password reset functionality

So next, before starting some project, whether it is only you working or a whole team, invest a time into the guidelines of the commit messages.

Think of how the message will be written and what will be on the message.

Later down the road when your project starts to scale, you will be glad that you made the effort into writing good commit messages.

If by any case you want to learn more about this subject, consider visiting this official github page.

[Write better commits](https://github.blog/2022-06-30-write-better-commits-build-better-projects/)
