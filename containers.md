# Containerization for Production Services

<span class="drop fa fa-th-large fa-5x pull-left fa-border"></span>

Containerization is the idea that an application and all its dependencies can be packaged and shipped in a standardized way that is the same for any platform.  This enables you, for example, to package a container you created and built on your development machine directly to a production server.  Be aware that the container only needs the dependencies and code from your app; other systems (like, oh, the operating system) can be shared with the host environment via a [Linux container](https://linuxcontainers.org/).  There are many, many tools in this rapidly emerging space, such as:


* [CoreOS](https://coreos.com/).  CoreOS is a Linux distro built for running and manageing applications that are packaged as Docker images.  The key components are:
   * Docker as the way you run apps.
   * [etcd](https://github.com/coreos/etcd), which is a distributed key value database; it's sort of the "registry" you can use to share data between instances.  It's bundled with the OS so that you can always count on it being there.
   * [systemd](http://coreos.com/using-coreos/systemd/), a distributed job system for scheduling and process management.  I don't really quite understand this yet but plan to dive in soon.
   * [fleet](http://coreos.com/docs/launching-containers/launching/launching-containers-fleet/).  Fleet is a tool for managing processes on a CoreOS cluster.
* [Deis](http://deis.io/).  Deis is a self-hosted PaaS platform based on Docker and CoreOS.  Basically, it allows you to create your own Heroku-like service based on [buildpacks](https://devcenter.heroku.com/articles/buildpacks) or "raw" Docker containers.
* [Docker](http://www.docker.com).  Written in Go, Docker is an Open Source project that provides a clean and simple way to create system images based on a known filesystem, layer new elements onto those images, and then spin up running instances of what you've done.  For example, you might start with a base images like "base/ubuntu", add a service like Redis, and then start the image to have a running Redis instance.  Docker handles process management, networking, and other services for you, allowing you to focus on adding just the parts you need.  There is also a company called (conveniently enough) Docker that maintains Docker, as well as providing a hosting service called the Index, where you can publish and maintain your images.  Like GitHub, they have a "free for public/paid for private" model.
* [Flynn.io](https://flynn.io/).  Flynn, like Deis, provides a self-hosted PaaS.  
* [geard](http://openshift.github.io/geard/) is a tool for creating and managing Docker containers in [OpenShift](https://openshift.github.io/), RedHast's PaaS solution.
* [kubernetes](https://github.com/GoogleCloudPlatform/kubernetes).  Kubernetes is an open source version of Google's internal cluster management toolchain.  You can use Kubernetes to run your own Docker containers on [Google Compute Engine](https://cloud.google.com/products/compute-engine/), Google's cloud platform.
* [Mesos](http://mesos.apache.org). Apache Mesos is a cluster resource manager that simplifies running applications on a shared pool of servers.  Mesos supports containerized workloads via linux cgroups and now supports running tasks in Docker containers natively as of August 2014 with the release of version `0.20.0`.
* [Panamax](http://panamax.io/).  "Panamax is a containerized app creator with an open-source app marketplace hosted in GitHub. Panamax provides a friendly interface for users of Docker, Fleet & CoreOS. With Panamax, you can easily create, share and deploy any containerized app no matter how complex it might be"
