---
layout: page
title: Blogs
permalink: /blogs/
order: 2
---
## *this is still under construction*...

<style>
        body {
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px;
        }
        .post-preview {
            background: #fff;
            padding: 10px;
            margin-bottom: 30px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }
        .post-thumbnail {
            width: auto;
            height: 2rem; /* Matches the height of the title font size */
            margin-right: 15px;
            flex-shrink: 0;
            border-radius: 3px;
            object-fit: cover;
            background-color: #e0e0e0; /* Placeholder background color */
        }
        .post-titles {
            font-size: 1.5rem; /* Reduced font size */
            margin: 0;
            color:#3e3831;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .post-subtitle {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 10px;
        }
        .post-meta {
            font-size: 0.9rem;
            color: #999;
        }
        .sidebar {
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .pagination {
            text-align: center;
            margin: 10px 0;
        }
        .pagination a {
            display: inline-block;
            padding: 10px 15px;
            margin: 0 5px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .pagination a:hover {
            background-color: #0056b3;
        }
        .search-box {
            margin-bottom: 30px;
            text-align: center;
        }
        .search-box input[type="text"] {
            width: 80%;
            padding: 10px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        .categories {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 0;
            margin: 5px 0;
        }
        .category-badge {
            display: inline-block;
            padding: 5px 10px;
            background-color: #dfdad3;
            color: #3e3831;
            border-radius: 15px;
            font-size: 0.8rem;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .category-badge:hover {
            background-color: #d1dba2;
        }
    </style>

<div class="container">
        <div class="search-box">
            <input type="text" id="search" placeholder="Search posts..." onkeyup="searchPosts()">
        </div>
        <div class="row">
            <div class="col-md-8">
                <!-- Loop through posts -->
                {% for post in site.posts %}
                <div class="post-preview" data-title="{{ post.title }}">
                    {% if post.image %}
                    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
                    {% else %}
                    <div class="post-thumbnail"></div> <!-- Placeholder for consistency -->
                    {% endif %}
                    <a href="{{ post.url | relative_url }}" class="post-titles">{{ post.title }}</a>
                </div>
                {% endfor %}
            </div>
            <div class="col-md-4">
                <div class="sidebar">
                    <h4>Categories</h4>
                    <div class="categories">
                        {% for category in site.categories %}
                        <a href="{{ category | first | relative_url }}" class="category-badge">
                            {{ category | first }} ({{ category | last | size }})
                        </a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination">
            {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path | relative_url }}">Previous</a>
            {% endif %}
            {% if paginator.next_page %}
            <a href="{{ paginator.next_page_path | relative_url }}">Next</a>
            {% endif %}
        </div>
    </div>

<script>
        function searchPosts() {
            var input = document.getElementById('search');
            var filter = input.value.toLowerCase();
            var posts = document.querySelectorAll('.post-preview');

            posts.forEach(function(post) {
                var title = post.getAttribute('data-title').toLowerCase();
                if (title.includes(filter)) {
                    post.style.display = '';
                } else {
                    post.style.display = 'none';
                }
            });
        }
    </script>