+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2018-03-08T20:22:00"
image = "images/blogging/netlify.png"
slug = "deploying"
title = "Deploying my blog using Netlify"
"categories" = [
  "Learning"
]
"tags" = ["blogging", "netlify"]
+++

## Why Netlify?

I have a confession to make. In all the time I've been building website, I have never set up deployment myself. It's confusing and time consuming and I'm lucky that I'm married to an engineer who usually can take care of setting up servers and hosting for me. I figured it's about time I tried to figure it out on my own.

I have been to meetups and developer conferences in the past few months where I've seen presenters talk about [Netlify](https://www.netlify.com/) and how easy it is to deploy websites using this tool, so here goes...

## How to...

These steps are taken assuming you already have a project repo set up, and while Netlify does support other hosting for version control, I'm using Github.

* This should come as pretty obvious but sign up for a Netlify account.
* Click the big green button that indicated you're starting something new.
* It'll ask you to authorize the use of your Github account which it needs to access your repo.
* Then pick the repo you want to have Netlify work it's magic on.
* And configure your settings. This is where I got stuck but never fear, I shall explain all...
  * I left branch as master, it's just me working on this anyway and I don't feel the need to have more than one branch, but if you prefer to use a staging branch or something, then you need to change that.
  * `Dir` - I had no clue what to use here. If you run your build command and see what populates. I got a whole slew of new things appear in a newly generated `public` directory (which you may want to add to your `.gitignore`).
  * `Build command` - This could vary widely but if you happen to be trying out Hugo too, then `hugo` is the magic word.

_Before I could build I hit one more snag and the only way I knew how to resolve is that guy I married is a really helpful dude and clued me in on changing the build `environment variables` under `settings`._

So as I troubleshooted my way through these steps, by triggering a deployment I was able to find error in the Netlify deploy log that were actually really helpful, things like my version of hugo I specified in the environment variables was incorrect and which version I should use. How I would have gotten to figuring out setting that in the first place, I'm not sure. I was huffing and puffing about deployments not working and got some help from hubby who had gone through the process six months ago.

## What next?

Once deployed, Netlify with auto generate a url for you along the lines of https://random-words-id123.netlify.com/ but I kind of want to use my own URL but that is a problem for another evening.
