+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2018-03-06T17:46:00"
image = "images/blogging/hugo.png"
slug = "building-a-blog"
title = "Building a blog with Hugo"
"categories" = [
  "Learning"
]
"tags" = ["blogging", "hugo", "markdown"]
+++

## Up and going

### Install Hugo

`brew install hugo`

### Create project

`hugo new site quickstart`

### Pick a theme

Picking a theme from the many beautiful ideas might be the hardest step. One you’ve picked a theme that you love, simply navigate to your project’s `theme` directory and clone the theme.

```
cd quickstart/themes
git clone [...]
```

From here, most of the themes have a great readme for additional configuration. The steps I took were to copy the theme’s `config.toml` file from the link provided to the root of my project directory.

### Making it yours

Next up, add an image to be used in the sidebar of this theme, as my avatar in `static/images/avatar.jpg`. Note: you could also add a link to an online image or relative path to a file on your computer if you wanted but changing the `[params.sidebar]` section and change some of the content to be about me.

```
[params.sidebar]
  # Replace the avatar with a picture of your own under static/images
  avatar = "avatar.jpg"
```

Don’t be afraid to pull stuff out, I don’t need a contact me section so I deleted all of that code, there are plenty of ways for people to find me but sharing my social media profiles (which you enable by adding your handle).
Now run `hugo server` and it’ll tell you `Web Server is available at http://localhost:1313/` so go ahead and hit that up in your browser and you should see the stuff you populated in the config file rendering on the screen. We now have a local instance of our new site up and running.

It turns out I didn’t really like what was left of the layout of the original theme I chose once I stripped down to the components I wanted to keep. If this happens to you too, just delete the contents inside the theme folder, clone down the new theme and modify the config and reserve the app.

### Moving on...

So, one thing I wanted to clarify as I’m not an expert blogger; what is the difference between categories and tags. My educated guess what that it would affect my content in some way but I wasn’t 100% certain exactly how. Here’s what some research gave me; categories and tags are both ways your readers can look for content, as opposed to a newest to oldest top down list of content. Categories would be the main topics I might want to blog about; travel, learning, eating out, home cooking — which can have subcategories too. Tags are there to specify what any given post may be about e.g., I may write a travel post about Japan and use tags `getting around`, `accommodation`, `Tokyo`.

In figuring out what pages I might want to add and how to add them I went to the source of the theme’s code which I easily found on Github. There I was able to look at the `exampleSite` code and pull code over and modify it. An About Me page sounds like something I want so, in the `content` directory I created a file called `about.md` and copied over their raw code. At the top of the file we’re looking at some metadata but I had to dig to find what it all meant, eventually I stumbled across it [here](https://gohugo.io/content-management/front-matter/#readout) but I will also explain the code inline in the following block:

```
+++
author = "Sarah Showers"
authorAvatar = "images/avatar.jpg"
date = "2018-03-03" // datetime at which the content was created
slug = "building-a-blog" // a custom url
title = "Building a blog with Hugo" //title for the content
weight = 10
"categories" = [
  "Learning"
] // an array of strings
"tags" = ["blogging", "hugo", "markdown"] // an array of string
+++
```

This stuff is call Front Matter. "Front matter allows you to keep metadata attached to an instance of a content type—i.e., embedded inside a content file”. Hugo supports three formats, TOML `+++`, YAML `---`, JSON `{...}`. Hugo doesn't look for the file extension but insted looks for these markers that signify the format of the document.

Now to write the body of your post underneath the closing front matter tags. All being well, no errors happen and you can see your post rendering. If you use a "slug" value you can go to `http://localhost:1313/your-slug-here` and see your full post in all of it's glory.
