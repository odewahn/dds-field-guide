# CI Servers Deploy Code, Not Ops

<span class="drop fa fa-cogs fa-5x pull-left fa-border"></span>

Martin Fowler defines [continuous integration](http://www.martinfowler.com/articles/continuousIntegration.html) as "a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day." This seminal article defines the key best practices as:

* Maintain a single source repository.
* Automate the build.
* Make your build self-testing.
* Everyone commits to the mainline every day.
* Every commit should build the mainline on an integration machine.
* Keep the build fast.
* Test in a clone of the production environment.
* Make it easy for anyone to get the latest executable.
* Everyone can see what's happening.
* Automate deployment.

The CI server executes a specific action on a repository when triggered by a commit hook. For example, if a developer makes a commit against a repository called foo, the CI server might:

* Clone a local copy of foo.
* Execute foo's test suites (see the section on application stacks for more about this).
* If the tests fail, send an alert to the development team and halt the process.
* If the test suite passes, deploy the code to a staging or even production server.

## Tools

Here are a few of the CI servers you might encounter:

* [Hudson](http://hudson-ci.org/). Hudson is a CI server from Oracle written in Java.
* [Jenkins](http://jenkins-ci.org/).  Jenkins, a fork of Hudson, is one of the leading open source CI servers. It has a host of useful plug-ins for tasks like build tasks, error reporting, and repository management.
* [Buildbot](http://buildbot.net/).  Buildbot is an open source CI server written in Python.
* [Travis](https://travis-ci.org/). Travis is a hosted CI solution that is used primarily by the Ruby community, particularly Rails.
* [Hubot](http://hubot.github.com/).  Hubot is a chatbot from GitHub. It allows you to easily create scripts that you can use inside your chatroom (e.g., Campfire or HipChat) to deploy new code, receive messages from the build server, or get messages from your monitoring tools when things go wrong.
* [Shippable](http://shippable.com/) Shippable is a hosted CI solution built on Docker with Webhooks.
* [Wercker](http://wercker.com/). Wercker is a hosted CI solution built on Docker with Webhooks.
* [Circle CI](https://circleci.com/) is a hosted Continuous Integration and Deployment with Docker support.
* [Drone](https://github.com/drone/drone) is an open-source (and [hosted](https://drone.io/) ) Continuous Integration platform built on Docker
* [Bamboo](https://www.atlassian.com/software/bamboo) Bamboo is an Atlassian CI/CD tool that integrates seamlessly with other Atlassian products such as JIRA, Confluence and Stash.
* [Codeship](https://codeship.com) Codeship is a hosted CI/CD service. Codeship will run your project's unit tests, and can also deploy new code to your servers via Capistrano, Amazon EBS, Heroku, custom scripts, and many others.


## Continuous Deployment
* [Distelli](http://www.distelli.com/). Deployment and process management.
* [Capistrano](http://capistranorb.com/). Automation and deployment tool. [Webistrano](https://github.com/peritor/webistrano) provides a web frontend to Capistrano.
* [GoCD](http://www.go.cd/) is an open-source continuous delivery tool built around a pipeline model.
