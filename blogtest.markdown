---
layout: page
permalink: /blogtest/
---
<style>
/* General Page Styles */
.page-title {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #222;
  text-align: center;
}

.page-intro {
  font-size: 1em;
  color: #666;
  text-align: center;
  margin-bottom: 2em;
}

/* Post List Styles */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

/* Post Preview Styles */
.post-preview {
  display: flex;
  align-items: center;
  height: 50px; /* Reduced height */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.post-preview:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px); /* Slightly lifts the post on hover */
}

.post-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  height: 100%;
  width: 100%;
}

.post-image {
  width: 200px; /* Increased image width */
  height: 50px; /* Height adjusted to match reduced height */
  object-fit: cover; /* Ensures the image covers the area */
}

.post-content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 10px; /* Space between image and content */
  flex: 1; /* Allows content to take up the remaining space */
}

.post-title {
  font-size: 2em;
  margin: 0;
  color: #333;
}

.post-tags {
  margin-top: 0.5em;
}

.tag {
  background: #e0e0e0;
  color: #333;
  padding: 0.3em 0.6em;
  border-radius: 4px;
  font-size: 0.8em;
  margin-right: 0.5em;
  display: inline-block;
}

  </style>
<h1 class="page-title">Blogs</h1>
<p class="page-intro">Explore our latest posts below.</p>

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-preview">
      <a class="post-link" href="{{ post.url }}">
        {% if post.image %}
          <img class="post-image" src="{{ post.image }}" alt="{{ post.title }}">
        {% endif %}
        <div class="post-content">
          <h2 class="post-title">{{ post.title }}</h2>
          <div class="post-tags">
            {% for tag in post.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>