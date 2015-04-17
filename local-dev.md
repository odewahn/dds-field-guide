# The Entire Application Runs Locally in Development

<span class="drop fa fa-laptop fa-5x pull-left fa-border"></span>

One of the key tenets of the DDS movement is that developers should have a simple way to install and run the entire app on their local machine. Being able to run it on their own system encourages creativity and flexibility and makes development much more fun and productive.

[Vagrant](http://www.vagrantup.com/) is the key tool here. Basically, it takes the recipes you created with your environment tool (e.g., your Chef or Puppet files) and _provisions_ (creates) a virtual machine that runs in a tool like [VirtualBox](https://www.virtualbox.org/) or [VMware](http://www.vmware.com/). Vagrant automatically maps a drive from the virtual instance back to the host machine, allowing the developer to use his or her favorite editor / IDE but still run the application in an environment that matches the production environment as closely as possible.

## Tools

The following table summarizes tools you will encounter:

* [Vagrant](http://www.vagrantup.com/).  "Create and configure lightweight, reproducible, and portable development environments."
* [VirtualBox](https://www.virtualbox.org/). "VirtualBox is a powerful x86 and AMD64/Intel64  [Virtualization](https://www.virtualbox.org/wiki/Virtualization) product for enterprise as well as home use." Free and open source.  This tool allows you to run a full image of another operating system (called the "guest") on your own machine (called the "host").
* [VMware](http://www.vmware.com/). One of the original virtualization solutions; Vagrant has a paid version that targets VMware Fusion and Workstation.
* [ngrok](https://ngrok.com/).  ngrok allows you to share applications running on your local machine to other users on the Internet.  It works by setting up a tunnel to ngrok, which then acts as a reverse proxy to allow you to have a public URL.  It uses a donation model with a suggestion of $25, but you can pay what you want.  In the paid version you can have it use a custom domain.
* [Vagrant Cloud](https://vagrantcloud.com/).  A service from the creator of Vagrant that allows you to share versioned Vagrant images.

### Replicating third-party APIs locally

The develop "everything on localhost" approach breaks down somewhat when an application makes extensive use of third-party APIs. Clearly, you could not simply install Twitter or Facebook on your local machine. To get around this, there are a number of tools for mocking up the API results returned by these services. These include:

* [Canned](https://github.com/sideshowcoder/canned). "Server to respond with fake API responses, by using a directory of files for finding out what to say."
* [WireMock](http://wiremock.org/). "WireMock is a flexible library for stubbing and mocking web services."
