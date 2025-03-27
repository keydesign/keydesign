---
layout: default
permalink: /blog/
hightlightBlog: "true"
---
<div
  class="grid grid-blog"
  style="
    margin: var(--size-unit-8) 0;
    row-gap: var(--size-unit-5);
  "
>
  {% assign blogs = site.blogs | reverse %}
  {% for blog in blogs %}
    <div class="grid-item grid-item-2-blog">
      <a
        href="{{ blog.url | prepend: site.baseurl }}"
        style="text-decoration: none; aspect-ratio: 2;"
        class="img-container"
      >
        <img
          src="{{ blog.cover_image | prepend: site.baseurl }}"
          style="width: 100%"
        >
      </a>
    </div>
    <div class="grid-item grid-item-3-blog">
      <a
        href="{{ blog.url | prepend: site.baseurl }}"
        style="text-decoration: none; height: 100%;"
      >
        <div>
          <p style="color: var(--color-primary-dark);">{{ blog.title }}</p>
          <p>
            {{ blog.content | strip_html | truncate: 200 }}
            <span class="highlight">read more...</span>
          </p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
