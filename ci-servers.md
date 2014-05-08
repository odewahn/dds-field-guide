# CI servers deploy code, not ops

<p><i class="fa fa-camera-retro fa-5x"> </i></p>

Martin Fowler defines [continuous deployment](http://www.martinfowler.com/articles/continuousIntegration.html) as "a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day." This seminal article defines the key best practices as:

- Maintain a Single Source Repository.
- Automate the Build
- Make Your Build Self-Testing
- Everyone Commits To the Mainline Every Day
- Every Commit Should Build the Mainline on an Integration Machine
- Keep the Build Fast
- Test in a Clone of the Production Environment
- Make it Easy for Anyone to Get the Latest Executable
- Everyone can see what's happening
- Automate Deployment

The CI server executes a specific action on a repository when sit receives a commit hook. For example, is a developer makes a commit against repository called foo, the CI server might:

- clone down a local copy of foo
- execute foo's test suites (see the section on application stacks for more about this)
- if the tests fail, the CI server sends an alert to the development team and halts the process
- if the test suite passes, the CI server might deploy the code to a staging or even production server

## Tools

Here are a few of the CI servers you might encounter:

* [Jenkins](http://jenkins-ci.org/).  Jenkins is one of the leading open source CI servers. It has a host of useful plugins for build tasks.
* [Travis](https://travis-ci.org/). Travis is a hosted CI solution. It works really nicely with Rails.
* [Hudson](http://hudson-ci.org/). Hudson is a CI server from Oracle; Jenkins is a fork of this original code.
* [hubot](http://hubot.github.com/).  Hubot is a chatbot from GitHub. It allows you to easily create scripts that you can use inside your chatroom (i.e., campfire or hipchat) to deploy new code, receive messages from the build server, or get messages from your monitoring tools when things go wrong.

