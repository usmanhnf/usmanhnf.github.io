---
layout: page
title: Blogs
permalink: /blogs/
order: 2
---


<ul style="list-style:none; padding:0; margin:0;">
    {% for post in site.posts %}
      <li style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid #eee; padding-bottom:1rem;">
        {% if post.image %}
          <a href="{{ post.url | relative_url }}" style="flex-shrink:0;">
            <img 
              src="{{ post.image | relative_url }}" 
              alt="{{ post.title }}" 
              style="width:80px; height:80px; object-fit:cover; border-radius:8px;"
            >
          </a>
        {% endif %}
        <div>
          <h3 style="margin:0 0 0.25rem 0; font-size:1.1rem;">
            <a href="{{ post.url | relative_url }}" style="text-decoration:none; color:#222;">{{ post.title }}</a>
          </h3>
          <p style="color:#888; font-size:0.9rem; margin:0 0 0.5rem 0;">
            {{ post.date | date: "%B %d, %Y" }}
          </p>
          <p style="margin:0; color:#333; font-size:0.95rem;">
            {{ post.excerpt | strip_html | truncate: 120 }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
