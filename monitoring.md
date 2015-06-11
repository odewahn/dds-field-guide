# The Monitoring Infrastructure Is Critical

<span class="drop fa fa-stethoscope fa-5x pull-left fa-border"></span>

The monitoring infrastructure is perhaps the most foreign element in the DDS stack. Of all the parts of the software infrastructure, this was perhaps the most opaque. A disk would fill up, the monitoring system would alert the systems group, and they would quietly fix it without the developer being any the wiser.

However, as more of the traditional admin functions spread to other parts of the organization, there's an increasing need for developers to view the monitoring infrastructure as just another part of the app. In addition to providing the sorts of critical alerts on failures, many monitoring tools are tailored to the application stack and can be used to pinpoint performance bottlenecks. Beyond architecture, logging key events within the application itself to generate operational-level reporting (from very granular conversions, bevaior tracking, workflow bottlenecks, etc) can yield enormous insight, and frameworks exist to record events at any point within the code.

Most of these systems have two components: a client and a server.  The client is an agent that runs on the server you want to monitor; it is typically installed on the machine by a Chef or Puppet recipe (or Ansible or Salt or whatever tool you are using).  Whether it's a daemon or a cron job, the client periodically reports back key metrics to the central server.  The server provides the reporting interface, notification systems, and other functions that are required to smoothly maintain a large number of systems.

## Tools

Here are some monitoring tools you might encounter:

* [New Relic](http://newrelic.com/).  New Relic is an application monitoring tool that enables you to simply and easily report metrics from within your app. Once you do, however, you can get a wealth of information about the bottlenecks in your application.
* [Scout](https://scoutapp.com/).  Scout is a hosted monitoring tool. It's very simple to set up, although it has far fewer plug-ins than Nagios.
* [PagerDuty](http://www.pagerduty.com/).  PagerDuty is an alert system that's designed to allow you to create groups and roles that should be notified for a variety of configurable scenarios.
* [loader.io](http://loader.io/). "Loader.io is a free load-testing service that allows you to stress-test your web-apps/apis with thousands of concurrent connections."
* [Hubot](http://hubot.github.com/).  Hubot is a chatbot from GitHub. It allows you to easily create scripts that you can use inside your chatroom (e.g., Campfire or HipChat) to deploy new code, receive messages from the build server, or get messages from your monitoring tools when things go wrong.
* [Nagios](http://www.nagios.org/). Nagios is an open source monitoring tool that has been around for a long time. It has hundreds of client plug-ins that can report all manner of system performance metrics.
* [Icinga](http://www.icinga.org/). Icinga is a next generation Nagios re-implementation designed for distributed monitoring, scalability and extensibility. It also follows perhaps the single most important of principal in all of Monitoring, re-using all those millions of existing Nagios plugins around the world! See also the [Advanced Nagios Plugins Collection](https://github.com/harisekhon/nagios-plugins) for advanced API level monitoring integration covering nearly every major NoSQL & Big Data technology.
* [Kale](http://codeascraft.com/2013/06/11/introducing-kale/).  Kale is Etsy's monitoring platform and is "designed to solve the problem of metrics overload."
* [Graphite](http://graphite.readthedocs.org/).  Graphite is a tool for "scalable realtime graphing."  Once you have a data feed, graphite makes it simpler to get nice charts to spot anomalies.
* [StatsD](https://github.com/etsy/statsd/) is a tool from [Etsy](http://codeascraft.com/2011/02/15/measure-anything-measure-everything/).  It's essentially a daemon process that can receive messages from your applications via a UDP port.  StatsD receives and parses the message and then aggregates it so that it can be analyzed by another tool (like Graphite).
* [Ganglia](http://ganglia.sourceforge.net/) is a BSD-licensed monitoring tool that provide more granular detail than Nagios.
* [InfluxDB](http://influxdb.com/) is a time series, events, and metrics database.
* [Grafana](http://grafana.org/) is an open source, feature-rich metrics dashboard and graph editor for Graphite, InfluxDB & OpenTSDB.
* [Apache Logging Services](http://logging.apache.org/) includes the popular logging libraries log4j, log4net, etc, as well as the Chainsaw viewer, that developers can use to quickly log in-application events to files, databases table, or external services.
* [Loggly](https://www.loggly.com/) is a cloud logging service (from developers that worked on Splunk) with a generous free tier.
* [Splunk](http://www.splunk.com/), [Zenoss](http://www.zenoss.com/) are on-site solutions designed to manage hundreds to thousands of servers. Zenoss is open source.
