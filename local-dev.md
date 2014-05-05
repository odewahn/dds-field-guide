# The entire application runs locally in development.

One of the key breakthroughs of the devops movement is it gives developers a simple way to install and run the entire app on their local machine. Being able to run it on their own system encourages creativity and flexibility, and make development much more fun and productive.

[Vagrant](http://www.vagrantup.com/) is the key tool here -- basically, it takes the recipes you created with your environment tool (i.e., your chef or puppet files) and _provisions_ (creates) a virtual machine that runs in a tool like [Virtualbox](https://www.virtualbox.org/) or [VMWare](http://www.vmware.com/). Vagrant automatically maps a virtual drive from the virtual instance back to the host machine, allowing the developer to use his or her favorite editor / IDE, but still run the application in an environment that matches the production environment as closely as possible.

## Tools

The following table summarizes tools you will encounter:

* [vagrant](http://www.vagrantup.com/).  "Create and configure lightweight, reproducible, and portable development environments."
* [virtualbox](https://www.virtualbox.org/). "VirtualBox is a powerful x86 and AMD64/Intel64  [virtualization](https://www.virtualbox.org/wiki/Virtualization) product for enterprise as well as home use." Free and open source! 
* [vmware](http://www.vmware.com/). One of the original virtualization solutions; Vagrant has a paid version that targets vmware fusion.

### Replicating 3rd party APIs locally

The develop "everything on localhost" approach breaks down somewhat when an application makes extensive use of 3rd party APIs.  Clearly, you could not siply install Twitter or Facebook on your local machine.  To get around this, there are a number of tools for mocking up the API results returned by these services.  These include:

* [canned](https://github.com/sideshowcoder/canned). "Server to respond with fake API responses, by using a directory of files for finding out what to say."