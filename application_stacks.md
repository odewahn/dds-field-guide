# Appendix A: Language Stack Quick Reference

<span class="ico fa fa-code fa-5x pull-left fa-border"></span>

No language is an island. Rather, every successful language (Ruby, Python, etc.) comes with an ecosystem of tools and frameworks. The goal of the following table  is to map some of the key elements in these language ecosystems so that you can quickly cross-reference an unfamiliar stack against one you're familiar with.

Why would you care, you ask? Well, even if you don't need to know a language in depth, you still might want to install and use some great open source package, so it helps to have an idea of what is what. This is not meant to be an exhaustive list, just an overview of the biggies in each ecosystem.

## Ruby

* Frameworks
  * [Rails](http://rubyonrails.org/)
  * [Sinatra](http://www.sinatrarb.com/)
* Package management
  * [RubyGems](http://rubygems.org/ "")
  * gem
  * [Bundler](http://bundler.io/)
* Testing tools
  * RSpec
  * [factory\_girl](https://github.com/thoughtbot/factory_girl)

## Python

* Frameworks
  * [Django](https://www.djangoproject.com/). Django is a modular, high-level Python Web framework that ships with an ORM, a template engine and lots of helpers.
  * [Flask](http://flask.pocoo.org/) is a popular wsgi micro-framework, with embeded development server and debugger, template support (via [Jinja2](http://jinja.pocoo.org/) ) and restfull handlers. Flask supports [extensions](http://flask.pocoo.org/extensions/) to add functionnalities.
* Package management
  * [Setup\_tools](https://pypi.python.org/pypi/setuptools) is a python packaging library for distribution, test, installation, dependency management, and metadata handling of python projects.
  * [pip](https://pypi.python.org/pypi/pip). Pip is a package manager, to install, remove, and manage packages and dependency. It can handle [build distribution](https://www.python.org/dev/peps/pep-0427/) to ship and deploy a specific distribution of your code and dependencies.
  * [Virtualenv](https://virtualenv.pypa.io/en/latest/) is a Python environment isolation, to manage application dependencies in a folder, outside of system-wise packages.
* Testing tools
  * [Nose](https://nose.readthedocs.org/en/latest/) is a testing tool and library to help test Python code.
  * [Coverage](https://pypi.python.org/pypi/coverage) provides code coverage.
  * [Mock](https://pypi.python.org/pypi/mock) is a mocking library for Python. It is now included in Python's standard library sinc 3.3.

## node

* Frameworks  
  * [express](http://expressjs.com/)
  * [Meteor](https://www.meteor.com/)
  * [Ember.js](http://emberjs.com/)
* Package management
  * npm
  * [npmjs](https://npmjs.org/)
* Testing tools

## Java (and JVM-based languages)

* Frameworks
  * [Play](http://www.playframework.com/) Play is a framework for Scala and Java.
  * [Spring](http://projects.spring.io/spring-framework/) A Dependency Injection based framework for just about everything.
  * [Dropwizard](http://dropwizard.io/)Dropwizard is a Java framework for developing ops-friendly, high-performance, RESTful web services.
* Package management
  * [Maven](https://maven.apache.org/)
  * [Ant](http://ant.apache.org/)
  * [Gradle](http://www.gradle.org/)
  * [sbt](http://www.scala-sbt.org/) Scala-based interactive build tool.
* Testing Tools
  * [JUnit](http://junit.org/)

## Go

* Frameworks
  * [Gorilla Web Toolkit](http://www.gorillatoolkit.org/) is a collection of libraries to provide context, more powerfull router and dispatcher (mux), RPC and session management.
  * [Negroni](http://negroni.codegangsta.io/) is a HTTP middleware library over net/http. It provides middlewares and makes it easy to create your own.
  * [gocraft/web](https://github.com/gocraft/web) is a router (mux) and middleware package.
* Package manager
  * [go get](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies) is go builtin package and dependencies manager
  * [godep](https://github.com/tools/godep) is a go dependencies manager.
* Testing tools
  * [testing](http://golang.org/pkg/testing/) is go standard library testing library (to use with 'go-test')

