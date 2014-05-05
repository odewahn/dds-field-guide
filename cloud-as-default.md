# The cloud is the default platform.

The accelerating transition to cloud-based platforms, and platforms as a service (PaaS) in general, is one of the main drivers of the devops trend. Organizations have adopted these services for any of a number of reasons:

* Cost savings
* Increased speed for launching new projects
* Scalability

Whatever the reasons, the default platform for many applications is increasingly assumed to be a transient, virtual, cloud-based platform, rather than a traditional server maintained by an internal IT group. Even in cases where the virtualization/PaaS solution is maintained in an internal cloud, the net effect is much the same.

The various platforms you're likely to encounter in this new world can be divided into 3 main groups:

* Traditional cloud providers. These allow you to quickly create storage or computing power as needed.
* Hosted PaaS services. These are value added services built on top of raw hosting providers.  For example, a PaaS might allow you to easily spin up a machin based on a particular stack when you deploy you application.
* Internal cloud and PaaS services.

The following sections cover some of the main offerings in each category.

## Tools

These are tools and services you're likely to encounter here:

### Traditional Cloud Providers

There are lots of hosting services. Here are some of the more popular.

* [Amazon Web Services](http://aws.amazon.com/).  AWS is probably the original model for pay as you go infrastructure, and remains one of the leading cloud platforms. While many people think of AWS as either storage (via theÂ  [S3 service](http://aws.amazon.com/s3/)) 
* [Rackspace cloud](https://mycloud.rackspace.com/). The cloud offering from Rackspace is mostly about compute power and storage. The API is well done, and the customer service is generally outstanding. Overall, though, it's not as full featured as AWS.
* [Azure](http://www.windowsazure.com/). Microsoft's cloud offering.
* [Digital Ocean](https://www.digitalocean.com/). A lower cost alternative to AWS that says it focuses on developers. Seems to be what a lot of developer's use for side projects.

## Hosted PaaS

Hosted PaaS services add a layer on top of the raw offerings of hosting providers.

* [Heroku](https://www.heroku.com/).  A PaaS service built on top of AWS. Unlike AWS, which gives you a raw machine, Heroku allows the devloper to push an application into the service and have a corresponding application stack provision for the machine.

## Internal Services

These are tools that create virtual internal clouds (i.e., on premise). Â While they're technically running in your own internal datacenter, they enable the concept of scalable, Â on-demandÂ resources. Â 

* [Open Stack](https://www.openstack.org/).  Open source software for buildingÂ  private and public clouds.
* [VMWare vCloud Suite](http://www.vmware.com/products/vcloud-suite/).  "VMware vCloudÂ® Suite lets you build and run a vSphere-based private cloud that delivers cloud service provider economics at scale, application provisioning in minutes, and automated operations management."
* [Docker](http://www.docker.io/).  Docker is a bit of an odd bird -- I'm not really sure where to put it. Â But, basically, it provides a lightweight form of virtualization based on [linux containers](http://en.wikipedia.org/wiki/LXC).

Â 

Â 

