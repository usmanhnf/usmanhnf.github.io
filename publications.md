---
layout: page
title: Publications
permalink: /publications/
order: 4
---
<style>
  .publications-container {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
  }

  .publications-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 12px;
  }
  
</style>

<div class="publications-container">
  <h1 class="publications-title">Journal Publications</h1>

  <ul>
    {% assign publications_sorted = site.data.publications_journals | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
        <img src="https://img.shields.io/badge/{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}-lightgreen" alt="Publication Date Badge"> <strong>{{ publication.Title }}</strong><br>
        Authors: {{ publication.Authors }}<br>
        Journal: {{ publication.Journal }}<br>
        <img src="https://img.shields.io/badge/DOI-{{ publication.DOI | uri_escape | replace:'%2D','-' }}-blue" alt="DOI: {{ publication.DOI }}">
      </li>
    {% endfor %}
  </ul>
</div>


<div class="publications-container">
  <h1 class="publications-title">Conference Proceedings</h1>

  <ul>
    {% assign publications_sorted = site.data.publications_conferences | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
        <img src="https://img.shields.io/badge/{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}-red" alt="Publication Date Badge"> <strong>{{ publication.Title }}</strong><br>
        Authors: {{ publication.Authors }}<br>
        Conference: {{ publication.Conference }}<br>
        <img src="https://img.shields.io/badge/Location-{{ publication.Location }}-yellow" alt="Location: {{ publication.Location }}">
      </li>
    {% endfor %}
  </ul>
</div>