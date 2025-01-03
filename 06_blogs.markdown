---
layout: page
title: Blogs
permalink: /blogs/
order: 2
---
<div class="container">
    <div class="box only-box">
        <!-- Left half for Latest Blogs -->
        <div class="col-md-6">
           {% for post in site.posts limit:100 %}
            <div class="post-preview" data-title="{{ post.title }}">
                {% if post.image %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
                {% else %}
                <div class="post-thumbnail"></div> <!-- Placeholder for consistency -->
                {% endif %}
                <a href="{{ post.url | relative_url }}" class="post-titles">{{ post.title }}</a>
                <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
            </div>
            {% endfor %}
        </div>
</div>

