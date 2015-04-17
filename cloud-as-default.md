# The Cloud Is the Default Platform

<span class="drop fa fa-cloud fa-5x pull-left fa-border"></span>

The accelerating transition to distributed, cloud-based platforms is one of the main drivers of the DDS trend. Organizations have adopted these services for a number of reasons: cost savings, increased speed for launching new projects, and scalability, to name just a few.

But, whatever the reasons for adoption, the default platform for many applications is increasingly assumed to be a transient, virtual, cloud-based platform, rather than a traditional server maintained by an internal IT group. Even in cases where the virtualization/PaaS solution is maintained in an internal cloud, the net effect is much the same.

The various platforms you're likely to encounter in this new world can be divided into three main groups:

* Traditional cloud providers. These allow you to quickly create storage or computing power as needed.
* Hosted PaaS services.  These are value-added services built on top of raw hosting providers. For example, a PaaS might allow you to easily spin up a machine based on a particular stack when you deploy your application.
* Internal cloud and PaaS services.


These are tools and services you're likely to encounter here:

## Traditional Cloud Providers

There are lots of hosting services. Here are some of the more popular:

* [Amazon Web Services](http://aws.amazon.com/).  AWS is probably the original model for pay-as-you-go infrastructure and remains one of the leading cloud platforms.
* [Google Compute Engine](https://cloud.google.com/products/compute-engine/).  Google's cloud platform, which has become much more compelling now that they have [open sourced their cluster management tools](http://googlecloudplatform.blogspot.com/2014/06/an-update-on-container-support-on-google-cloud-platform.html).
* [Azure](http://www.windowsazure.com/). Microsoft's cloud offering.
* [Rackspace cloud](https://mycloud.rackspace.com/). The cloud offering from Rackspace is mostly about compute power and storage. The API is well done, and the customer service is generally outstanding. Overall, though, it's not as full-featured as AWS.
* [Digital Ocean](https://www.digitalocean.com/). Cloud provider with SSD, low prices, snapshot and pre-build images
* [Linode](https://www.linode.com/) is a hosting service that offers SSD for really fast access.
* [SoftLayer](http://www.softlayer.com/). Offers virtual and bare-metal servers. API covers the full feature-set. Global routed private network.

## Hosted PaaS

Hosted PaaS services add a layer on top of the raw offerings of hosting providers:

* [Heroku](https://www.heroku.com/).  A PaaS service built on top of AWS. Unlike AWS, which gives you a raw machine, Heroku allows the developer to push an application into the service and have a corresponding application stack provision for the machine.
* [OpenShift](https://www.openshift.com/) is a cloud-hosted PaaS solution developer by RedHat, the company behind [RHEL](http://www.redhat.com/products/enterprise-linux/) Linux distribution.
* [Google App Engine](https://cloud.google.com/appengine/) is Google PaaS service, that supports Python, Go, PHP and Java.
* [AppFog](https://www.appfog.com/) is a PaaS provider with fine-grained stack management.
* [dotCloud](https://www.dotcloud.com/) is a PaaS provider from the creators of Docker, the famous container open-source tool.
* [Pivotal Web Services](http://run.pivotal.io) A PaaS based on Cloud Foundry hosted by Pivotal, the largest contributor to the Cloud Foundry Open Source project.
* [Bluemix](https://bluemix.net/) A PaaS based on Cloud Foundry hosted by IBM.
* [Helion](http://www8.hp.com/us/en/cloud/helion-overview.html) A PaaS based on OpenStack and Cloud Foundry hosted by HP.

## Internal Services and Build-your-own Cloud

These are tools that create virtual public or internal clouds (private,i.e. on premise). While they're technically running in your own (internal) datacenter, they enable the concept of scalable, on-demand resources:

* [Open Stack](https://www.openstack.org/).  Open source software for building private and public clouds.
* [VMware vCloud Suite](http://www.vmware.com/products/vcloud-suite/).  A tool for running and managing VMware images in your own data center.
* [Mesos](http://mesos.apache.org/) / [Marathon](https://github.com/mesosphere/marathon) / [Chronos](https://github.com/airbnb/chronos) are a trio of technologies for managing and scheduling processes across a cluster of machines. Apache Mesos provides the core clustering technology for the stack. Marathon, from [Mesosphere](http://mesosphere.io/), is a distributed tool for starting, stopping, and managing individual jobs on a Mesos cluster. (So, it's like a distributed version of [init](http://en.wikipedia.org/wiki/Init) or [upstart](http://upstart.ubuntu.com/)). Chronos, developed by Airbnb's engineering team, is a distributed, fault-tolerant replacement for cron (the classic UNIX job scheduling tool) for scheduling when jobs will start.
* [OpenShift Origin](https://openshift.github.io/) is an open source version of RedHat's Open Shift platform.
* [Deis](http://deis.io/) is an open-source PaaS for public and private clouds, built on [Docker](https://www.docker.com/) and [CoreOS](https://coreos.com/).
* [Flynn](https://flynn.io/) is an open-source PaaS for public and private clouds, built on [Docker](https://www.docker.com/).
* [Dokku](https://github.com/progrium/dokku) is a Docker-powered small PaaS, written in bash, with modularity in mind.
* [Kubernetes](https://github.com/googlecloudplatform/kubernetes) is an open-source container cluster management, built by Google.
* [Eucalyptus](https://www.eucalyptus.com) is an open source, AWS compatible private cloud software.
* [Cloud Foundry](http://www.cloudfoundry.org) is a open source PaaS backed by the Cloud Foundry Foundation with companies such as Pivotal, IBM, HP, VMware, SAP and tens of others.

## For More Information

You can find more important background at [The Twelve Factor App](http://12factor.net/).
