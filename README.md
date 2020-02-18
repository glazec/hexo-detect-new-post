# hexo-detect-new-post
This plugin generate `newPost.json` which contains the newest post's information.

## How it work
It will generate `newPost.json` into the root dir of your website, which is `public/`. The `newPost.json` looks like this

```json
{
"title":"静态博客优化",
"id":"7a4bc632",
"date_published":"2020-02-07T00:00:00.000Z",
"summary":"新的一年从优化博客开始。这一次从内容，性能这两方面对博客进行优化。",
"url":"https:\\www.inevitable.tech\\posts\\7a4bc632",
"tags":["博客优化","性能","Hexo"],
"categories":["开发"]
}
```

## Install
```
npm i hexo-detect-new-post --save
```

## Usage
To use it, you should have following values in the front of your post. Title, tags, categories, abbrlink, date are necessary. Below the front-matter part, excerpt is necessary.

Here is an example:
```
---
title: 静态博客优化
tags:
  - 博客优化
  - 性能
  - Hexo
categories:
  - 开发
abbrlink: 7a4bc632
date: 2020-02-07 00:00:00
---
新的一年从优化博客开始。这一次从内容，性能这两方面对博客进行优化。

<!-- more -->

Here the main content starts.
```

Make sure your post links have the format `yourwebsiteurl/posts/abbrlink`. Here is an example `https:\www.inevitable.tech\posts\7a4bc632`.

## Application
You can compare `newPost.json` to determine whether the site has been updated.

Here is an example of delivring notificaiton if website updates. https://github.com/glazec/web-push-notification
