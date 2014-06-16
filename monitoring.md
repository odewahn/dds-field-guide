# The monitoring infrastructure is critical

<span class="drop fa fa-stethoscope fa-5x pull-left fa-border"></span>

The monitoring infrastructure is perhaps the most foreign element in the DDS stack. Of all the parts of the software infrastructure, this was perhaps the most opaque. A disk would fill up, the monitoring system would alert the systems group, and they would quietly fix it without the developer being any the wiser.

However, as more of the traditional admin functions spread to other parts of the organization, there's increasing need for developers to view the monitoring infrastructure as just another part of the app. In addition to providing the sorts of critical alerts on failures, many monitoring tools are tailored to the application stack and can be used to pinpoint performance bottlenecks. 

Most of these systems have two components: a client and a server.  The client is an agent that runs on the server you want to monitor; it is typically installed on the machine by a chef or puppet recipe (or Ansible or Salt or whatever tool you are using).  Whether it's a daemon or a cron job, the client periodically reports back key metrics to the central server.  The server provides the reporting interface, notification systems, and other functions that are required to smoothly maintain a large number of systems.

## Tools

Here are some monitoring tools you might encounter:

* [scout](https://scoutapp.com/).  Scout is a hosted monitoring tool. It's very simple to set up, although it has far fewer plug-ins than Nagios.
* [newrelic](http://newrelic.com/).  New Relic is an application monitoring tool. Unlike Nagios or Scout, you have to make specific provisions within your application to report metrics to New Relic. Once you do, however, you can get a wealth of information about the bottlenecks in your application.
* [pagerduty](http://www.pagerduty.com/).  Pagerduty is an alert system that's designed to allow you to create groups and roles who should be notified for a variety of configurable scenarios.
* [loader.io](http://loader.io/). "Loader.io is a free load testing service that allows you to stress test your web-apps/apis with thousands of concurrent connections."
* [hubot](http://hubot.github.com/).  Hubot is a chatbot from GitHub. It allows you to easily create scripts that you can use inside your chatroom (i.e., campfire or hipchat) to deploy new code, receive messages from the build server, or get messages from your monitoring tools when things go wrong.
* [nagios](http://www.nagios.org/). Nagios is an open source monitoring tool that has been around for a long time. It has hundreds of client plug-ins that can report all manner of system performance metrics.
* [kale](http://codeascraft.com/2013/06/11/introducing-kale/).  Kale is Etsy's monitoring platform and is "designed to solve the problem of metrics overload"
* [graphite](http://graphite.wikidot.com/).  Graphite is a tool for "scaleable realtime graphing."  Once you have a data feed, graphite makes it simpler to get nice charts to spot anomalies.