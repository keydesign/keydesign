---
layout: default
styles:
  - "/assets/css/blogs.css"
permalink: /about/
hightlightAbout: "true"
---
<div class="content">
    <div id="Expertise" class="section">
        <div class="wrapper" style="padding: 0;">
            <div></div>
            <h1>Expertise</h1>
        </div>
        <div class="wrapper">
            <div style="display: flex; align-items: center; justify-content: center;">
                <img src="{{ site.baseurl }}/assets/images/partners.svg" style="width: 242pt; height: 190pt;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <h2>Industrial Design</h2>
                <p style="margin-bottom: 35pt;">We specialize in industrial design services, offering support from the initial concepts to the final design. Founded by George and Antonija Campbell in 2001, we've helped startups get to the next level (from humble beginnings to IPO), worked with established companies to innovate and stay ahead of the competition.</p>
                <h2>Partner Network</h2>
                <p>We are committed to help our clients succeed by offering support throughout the entire product development, from the initial concepts to the final product. In collaboration with our partners we can offer additional services beyond industrial design. Our partner network includes experts in mechanical engineering, packaging design, and manufacturing.</p>
            </div>
        </div>
    </div>
    <div id="DesignThinking1" class="section">
        <div class="wrapper" style="padding: 0;">
            <div></div>
            <h1>Design Thinking</h1>
        </div>
        {% assign blogs = site.blogs | reverse %}
        {% for blog in blogs limit: 3 %}
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
        <div class="wrapper">
            <div></div>
            <div>
                <h2><a href="{{ site.baseurl }}/blogs/" style="text-decoration: none; color: var(--text-color)">See more</a></h2>
            </div>
        </div>
    </div>
</div>