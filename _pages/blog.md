---
layout: default
styles:
  - "/assets/css/blogs.css"
permalink: /blog/
hightlightBlog: "true"
---

<div class="content">
    <div id="blog" class="section">
        <div class="wrapper" style="padding: 0;">
            <div></div>
            <h1>Design Thinking</h1>
        </div>
        {% assign blogs = site.blogs | reverse %}
        {% for blog in blogs %}
        <div class="wrapper" style="margin-bottom: 35pt;">
            <div class="blog-image-wrapper">
                <img class="lazy-load" src="{{ blog.main_image | prepend: site.baseurl }}" class="blog-image">
            </div>
            <div>
                <h2>{{ blog.title }}</h2>
                <span>{{ blog.content | strip_html | truncate: 200 }} <a href="{{ blog.url | prepend: site.baseurl }}" class="blog-link">read more...</a></span>
            </div>
        </div>
        {% endfor %}
    </div>
</div>