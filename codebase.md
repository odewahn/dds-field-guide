# The Codebase Is in Git

<span class="drop fa fa-code-fork fa-5x pull-left fa-border"></span>

The version control system (VCS) is the heart of the process. At the most basic level, a VCS allows developers to keep track of all the changes made to a set of files and enables them to roll back to specific points in time in case something screws up. In some systems, like [Subversion](http://subversion.apache.org/), the code is checked out and then checked back in from a central repository. If there is a conflict between two developers' files (for example, both of them edited the same line of code), then the two version must be merged. This can be a painful process.

In contrast, distributed version control systems (DVCS), like [Git](http://git-scm.com/), are the heart of most new development processes. Rather than having a central, master copy that makes it difficult and expensive to merge a lot of contributions from developers, a DVCS makes it simple (well, simpler!) to have multiple people all working on the same codebase simultaneously in different _branches_, and these branches can be easily merged into a _master_ branch.

While there are many different work styles, such as [Git flow](http://nvie.com/posts/a-successful-git-branching-model/), the basic DVCS process is:

* There is an agreed-upon master repository, which is often on a public service like [GitHub](https://github.com/) or [BitBucket](https://bitbucket.org/), or an internal server like [GitLab](https://www.gitlab.com/) or [Mercurial](http://mercurial.selenic.com/).
* Each developer clones the master repository to his or her local machine.
* The developer creates a new branch, usually for a specific feature.
* The developer makes commits against the local copy.
* Once the feature is done, he or she merges the branch back into the master branch and pushes the change back to the master copy of the repository.
* Other developers pull from the master branch and merge their branch.
* The merged copy preserves the full version history of all the distributed copies.

In addition to these coordination functions, most version control systems also offer a feature called a _hook_. A hook is a process that fires once a specific event, like a commit, happens to the repository. Hooks can be defined in the repo itself, but also in the hosting service. For example, GitHub lets you define "service" hooks that are called whenever a specific event occurs. These hooks are the tie-in to the continuous integration (CI server).

## Tools

Here are the key version control systems:

* [Git](http://git-scm.com/). "Git is a [free and open source](http://git-scm.com/about/free-and-open-source) distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
* [Mercurial](http://mercurial.selenic.com/). "Mercurial is a free, distributed source control management tool. It efficiently handles projects of any size and offers an easy and intuitive interface."

Hosting services provide a central point where you can manage and store all your code repositories. In addition to raw code storage, they usually offer features like issue tracking, collaborator management, and other process-oriented services.

The following table lists hosting services managed by a 3rd party.  The pricing model is typically based on a block of repositories for a monthly fee.

* [GitHub](https://github.com/).  One of the largest and most successful Git hosting services.
* [BitBucket](https://bitbucket.org/).  [Atlassian](https://www.atlassian.com/)'s Git hosting solution.
* [GitLab.com](https://www.gitlab.com/). A hosting service based on the popular open source project GitLab HQ.
* [Gitorious](https://gitorious.org/). Similar to GitLab, a hosted version of an open source tool that you can install and maintain yourself.

These are services that you can install and manage in your own environment:

* [GitLab](https://github.com/gitlabhq/gitlabhq).  "Project management and code hosting application."
* [Gitosis](https://github.com/tv42/gitosis). "software for hosting Git repositories"
* [Gitorious](https://gitorious.org/gitorious). The self-hosted version of gitorious.org. (It's a Rails app.)
* [Kallithea](https://kallithea-scm.org/). Source code management system for Git and Mercurial.
* [Stash](https://www.atlassian.com/software/stash). On-premises source code management for Git by [Atlassian](https://www.atlassian.com/).
