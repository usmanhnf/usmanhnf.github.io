---
layout: page
title: Blogs
permalink: /blogs/
order: 2
---
<div class="container">
    <div class="row">
        <!-- Left half for Latest Blogs -->
        <div class="col-md-6">
           {% for post in site.posts limit:2 %}
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
        
        <!-- Right half (empty container for your custom content) -->
        <div class="col-md-6">
            <!-- Add your custom code/content here -->
        </div>
    </div>
</div>

<style>
    body {
        line-height: 1.6;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
    <style>
    body {
        line-height: 1.6;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
    .post-preview {
        background: #fff;
        padding: 8px 12px; /* Reduced padding for compactness */
        margin-bottom: 5px; /* Reduced margin for less space between posts */
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
    }
    .post-thumbnail {
        width: 2rem;
        height: 2rem; /* Matches the height of the title font size */
        margin-right: 10px; /* Reduced margin */
        flex-shrink: 0;
        border-radius: 3px;
        object-fit: cover;
        background-color: #e0e0e0; /* Placeholder background color */
    }
    .post-titles {
        font-size: 1.2rem; /* Reduced font size */
        margin: 0;
        color: #3e3831;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .post-titles:hover {
        color: #007bff;
    }
    .post-meta {
        font-size: 0.85rem; /* Smaller font size for compactness */
        color: #999;
        margin-top: 5px; /* Reduced margin to bring the meta closer to the title */
    }
</style>