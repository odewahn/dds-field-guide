# Introduction

In [Everything is distributed](http://radar.oreilly.com/2014/05/everything-is-distributed.html) and [Beyond the stack](http://radar.oreilly.com/2014/05/beyond-the-stack.html), O'Reilly Media began exploring "a new toolset has grown up to support the development of massively distributed applications" that we're calling the Distributed Development Stack (DDS).  DDS is a mix of tools, techniques, and practices that have developed as platforms like AWS and Heroku have become the default place to deploy many new applications.  

As Mike Loukides observed, the shift from well-tended, internal servers to external, disposable VMs has had profound consequences (many of which are memorably described by Noah Slater in "[Pets vs. Cattle](https://blog.engineyard.com/2014/pets-vs-cattle)").  To help provide a framework for understanding the explosion of trends and tools in the space, we've created the [Field Guide for the Distributed Development Stack](http://odewahn.github.io/dds-field-guide/).  

The Guide is organized into buckets based on a general observation, such as:

* [The cloud is the default platform](http://odewahn.github.io/dds-field-guide/ch01.html)
* [CI servers deploy code, not ops](http://odewahn.github.io/dds-field-guide/ch02.html)
* [The codebase is in git](http://odewahn.github.io/dds-field-guide/ch03.html)
* [The entire application runs locally in development](http://odewahn.github.io/dds-field-guide/ch04.html)
* [The environment is automated in the code](http://odewahn.github.io/dds-field-guide/ch05.html)
* [The monitoring infrastructure is critical](http://odewahn.github.io/dds-field-guide/ch06.html)
* [Tests done in code, not by a QA department](http://odewahn.github.io/dds-field-guide/ch07.html)

Each bucket then lists a set of associated tools.  For example, in the "The environment is automated in the code" you'll find a tools like [chef](http://www.getchef.com/chef/), [puppet](http://puppetlabs.com/), and [ansible](http://www.ansible.com/home).  While it's certainly true that tools are only a small part of the overall DDS story, it's also true that they are the main way most people will implement these concepts into everyday practice.

In addition to being a useful framework, the Guide is also meant to be a living resource.  So, [we've put the source on GitHub](https://github.com/odewahn/dds-field-guide) and invite you to contribute.  If you feel like we've missed a tool (which we most certainly have, since new things are popping up every day) or a major theme, then fork the repo and send me a pull request.  We'll be keep this document up to date and republishing it as we watch this trend continue to grow. 


## How to Contribute

To contribute to the DDS field guide:

* Fork this repo
* Agree to the [O'Reilly Contributor License Agreement](http://contributor-agreements.oreilly.com/)
* Add you tool / contribution
* Submit a pull request

If your request is accepted, we'll add you to the Contributor Page.

 