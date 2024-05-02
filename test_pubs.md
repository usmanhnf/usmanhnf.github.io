---
layout: page
permalink: /test_pubs/
---


<style>
  .publications-container {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  summary {
    cursor: pointer;
    padding: 0.5rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .publication-item {
    margin-bottom: 10px; /* Adjust the margin as needed */
  }
</style>

<div class="publications-container">
  <h1>Journal Publications</h1>

  {% assign publications_by_year = site.data.publications_journals | group_by_exp: 'publication', 'publication.Date | date: "%Y"' | sort: 'name' | reverse %}

  {% for year in publications_by_year %}
    <details {% unless forloop.first %} {% endunless %}{% if forloop.index0 == 0 %}open{% endif %}>
      <summary>{{ year.name }}</summary>
      <ul>
        {% assign sorted_publications = year.items | sort: 'Date' | reverse %}
        {% for publication in sorted_publications %}
          <li class="publication-item"> <!-- Add the class here -->
            <strong>{{ publication.Title }}</strong>
            <br>
            Authors: {% assign authors = publication.Authors | remove: "[" | remove: "]" | split: ", " %}
            {% for author in authors %}
              {{ author }}{% unless forloop.last %}, {% endunless %}
            {% endfor %}<br>
            Date: {{ publication.Date | date: "%Y-%m-%d" }}<br>
            {% if publication.Journal %}
              Journal: {{ publication.Journal }}<br>
            {% endif %}
            {% if publication.DOI %}
              <a href="https://doi.org/{{ publication.DOI }}"><img src="https://img.shields.io/badge/DOI-{{ publication.DOI }}-blue" alt="DOI"></a><br>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </details>
  {% endfor %}
</div>

<div class="publications-container">
  <h1>Conference Proceedings</h1>

  {% assign conference_publications_by_year = site.data.publications_conferences | group_by_exp: 'publication', 'publication.Date | date: "%Y"' | sort: 'name' | reverse %}

  {% for year in conference_publications_by_year %}
    <details {% unless forloop.first %} {% endunless %}{% if forloop.index0 == 0 %}open{% endif %}>
      <summary>{{ year.name }}</summary>
      <ul>
        {% assign sorted_conference_publications = year.items | sort: 'Date' | reverse %}
        {% for publication in sorted_conference_publications %}
          <li class="publication-item"> <!-- Add the class here -->
            <strong>{{ publication.Title }}</strong>
            <br>
            Authors: {% assign authors = publication.Authors | remove: "[" | remove: "]" | split: ", " %}
            {% for author in authors %}
              {{ author }}{% unless forloop.last %}, {% endunless %}
            {% endfor %}<br>
            Dates: {{ publication.Date | date: "%Y-%m-%d" }}<br>
            Conference: {{ publication.Conference }}<br>
            Location: {{ publication.Location }}<br>
            {% if publication.DOI %}
              <a href="https://doi.org/{{ publication.DOI }}"><img src="https://img.shields.io/badge/DOI-{{ publication.DOI }}-blue" alt="DOI"></a><br>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </details>
  {% endfor %}
</div>
