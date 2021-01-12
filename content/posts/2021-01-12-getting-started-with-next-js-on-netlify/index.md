---
title: Getting started with Next.js on Netlify
author: Daniel Treadwell
date: 2021-01-13
excerpt: We cannot choose our external circumstances, but we can always choose
  how we respond to them — Epictetus
hero: images/jukan-tateisi-bjht_8nbua0-unsplash.jpg
---
> We cannot choose our external circumstances, but we can always choose how we respond to them — Epictetus

There are plenty of options when it comes to a development stack.  Something I'm looking more into is using Next.js as opposed to my usual vanilla React setup.  In order to have an easy deployment setup I have also chosen Netlify as my host.

Everything was lining up, I created a new Next.js project, added it to github, and deployed on Netlify.  I said I deployed on Netlify.  Right?  No. 

> "Failed during stage 'building site': Deploy directory 'dist' does not exist"

![Deploy failed](images/screen-shot-2021-01-13-at-1.11.48-am.png "Failed during stage 'building site': Deploy directory 'dist' does not exist")

A simple fix, just create a 'dist' directory in your source, push to git and your new build will go live.

Happy coding!