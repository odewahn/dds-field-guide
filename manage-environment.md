# The Environment Is Automated in the Code

<span class="drop fa fa-wrench fa-5x pull-left fa-border"></span>

A key idea (maybe _the_ key idea) of DevOps is that the environment in which your code will run should be modeled as code, and not be some separate thing that is a black box. (And, as we get a bit further down the stack, should be versioned with the code as well.) It seems pretty basic, but the idea is that you should have a "recipe" that allows you to recreate the environment at any moment. Some of the key parts of managing the environment include:

* _General configuration_. General configuration includes setting up the basic requirements for the app to even run, things like ensuring that whatever directory it will live in actually exists, creating any required users, setting up security groups, specifying where log files should be stored, exposing (or blocking) the proper ports, setting any required permissions, installing any license or cert files, and updating packages. In short, anything and everything that an app needs at the basic operating system level.
* _Installation of the application stack_. If you're writing a Rails app, for example, you'll need to have the required versions of Ruby, Rails, bundler, and other stack-specific dependencies. The same goes for any other stack.
* _Installation and configuration of the required backing services_. The [12 Factor App](http://12factor.net) describes [backing services](http://12factor.net/backing-services) as "any service the app consumes over the network as part of its normal operation. Examples include datastores (such as MySQL or CouchDB), messaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP services for outbound email (such as Postfix), and caching systems (such as Memcached)." Backing services can also include third-party services, like Amazon AWS (SQS, dynamodb, etc.), [GitHub](http://developer.github.com/v3/), [Twitter](https://dev.twitter.com/), and [Parse](https://www.parse.com/). Ideally, the "code for a twelve-factor app makes no distinction between local and third party services."

## Tools

The following table lists some of the configuration and environment automation tools you might encounter:

* [Chef](http://www.getchef.com/chef/). "Chef is built to address the hardest infrastructure challenges on the planet. By modeling IT infrastructure and application delivery as code, Chef provides the power and flexibility to compete in the digital economy." You can find thousands of recipes for installing and configuring a range of services at their [community site](https://www.getchef.com/community/).
* [Fabric](http://docs.fabfile.org/en/1.8/). "Fabric is a Python (2.5-2.7) library and command-line tool for streamlining the use of SSH for application deployment or systems administration tasks."
* [Puppet](http://puppetlabs.com/). "Puppet Labs' software gives systems administrators the operational agility, efficiency, and insight they need to manage dynamic infrastructure, on-premise or in the cloud."
* [CFEngine](http://cfengine.com/community). "CFEngine Community is the Open Source foundation of CFEngine's innovative configuration management technology that helps systems administrators automate and ensure the availability, security and compliance of mission-critical applications and services."
* [Ansible](http://www.ansible.com/home). "Ansible is the simplest way to automate apps and IT infrastructure."
* [Salt](http://www.saltstack.com/). "Fast, scalable and flexible software for data center automation, from infrastructure and any cloud, to the entire application stack"
* [Docker](https://www.docker.io/learn/dockerfile/level1/). "If you're building a Docker image, you can specify a lot of the dependencies by specifying a [dockerfile](https://www.docker.io/learn/dockerfile/level1/) for the container."
* [Juju](https://juju.ubuntu.com/). "Juju lets you define applications as charms that know how to setup your app and relate it to other charms. It has a charmstore which contains many community reviewed charms for existing services. Using juju these charms can be deployed to many existing cloud providers or locally using LXC"

## For More Information

* [Snowflake Server](http://martinfowler.com/bliki/SnowflakeServer.html)
* [Pets vs. Cattle](http://www.slideshare.net/randybias/pets-vs-cattle-the-elastic-cloud-story)
