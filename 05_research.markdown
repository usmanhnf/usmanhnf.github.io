---
layout: page
title: Research
permalink: /research/
order: 5
---

<style>
.accordion {
  max-width: 99%;
  margin: 1rem auto;
  
}



.accordion-item {
  border: 0.5px solid;
  border-color: #C07858;
  border-right-style: none;
  border-left-style: none;
  border-radius: 0px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.accordion-item label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  background: #FEF9EF;
  filter: brightness(0.95);
  transition: background 0.3s;
}

.accordion-item label:hover {
  background: #FEF9EF;
  filter: brightness(0.75);
  
  
}

/* Add + / - sign */
.accordion-item label::after {
  content: "+";
  font-weight: bold;
  transition: transform 0.3s;
}

/* Change to - when input is checked */
.accordion-item input:checked + label::after {
  content: "−";
}

.accordion-item input {
  display: none;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;

  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 1rem;
  background: $background-color;
}

.accordion-item input:checked ~ .accordion-content {
  max-height: 500px; /* adjust if needed */
  padding: 1rem;
  overflow-y: auto; 
}
</style>

## Current Research

Currently, I am involved in existing projects which include numerically modeling the isotropic behavior of 3D printed concrete.

## Previous Projects

<div class="accordion">
  {% for project in site.data.projects %}
  <div class="accordion-item">
    <input type="checkbox" id="project-{{ forloop.index }}">
    <label for="project-{{ forloop.index }}">
      {{ project.title }}
    </label>
    <div class="accordion-content">
      <p><strong>Date:</strong> {{ project.date }} , Progress: <progress id="file" value="{{ project.progress }}" max="100"></progress> </p>
      <p><strong>Team:</strong> {{ project.team }}</p>
      <img src="{{ '/assets/images/projects/' | append: project.image }}" alt="{{ project.title }}" class="project-image" style="display: block; margin: 0 auto; height: 150px; width: auto;">
      <p><strong>Introduction:</strong> {{ project.introduction }}</p>
      <p><strong>Objectives:</strong> {{ project.objectives }}</p>
    </div>
  </div>
  {% endfor %}
</div>

## Collaborators


<ul>
  {% for collaborator in site.data.collaborators %}
    <li style="margin-bottom: 1.5em;">
      <strong>{{ collaborator.name }}</strong><br>
      {{ collaborator.designation }}, {{ collaborator.organization }}<br>
      Expertise: 
      {% assign expertise_list = collaborator.expertise | split: ", " %}
      {% for item in expertise_list %}
        <span style="display:inline-block; background-color:#e0e0e0; color:#333; padding:2px 6px; border-radius:2px; margin:2px; font-size:0.85em;">{{ item }}</span>
      {% endfor %}
    </li>
  {% endfor %}
</ul>


## Student Dissertations

### Masters

<div class="accordion">
  {% assign msc_dissertations = site.data.dissertations 
      | where_exp: "item", "item.degree contains 'MSc'" 
      | sort: "year" 
      | reverse %}
  
  {% for dissertation in msc_dissertations %}
  <div class="accordion-item">
    {% assign unique_id = 'msc-' | append: forloop.index0 %}
    <input type="checkbox" id="{{ unique_id }}">
    <label for="{{ unique_id }}">
      {{ dissertation.year }} {{ dissertation.title }}
    </label>
    <div class="accordion-content">
      <p><strong>Authors:</strong> {{ dissertation.authors }} </p>
      <p><strong>Supervision:</strong> {{ dissertation.supervision }}, <strong>Institute:</strong> {{ dissertation.institute }}</p>
      {% if dissertation.image %}
        <img src="{{ '/assets/images/dissertations/' | append: dissertation.image }}" alt="{{ dissertation.title }}" class="dissertation-image" style="display: block; margin: 0 auto; height: 150px; width: auto;">
      {% endif %}
      <p><strong>Abstract:</strong> {{ dissertation.abstract }}</p>
      <p><strong>Supervision:</strong> {{ dissertation.supervision }}</p>
      <p><strong>Institute:</strong> {{ dissertation.institute }}</p>
    </div>
  </div>
  {% endfor %}
</div>

### Bachelors

<div class="accordion">
  {% assign bsc_dissertations = site.data.dissertations 
      | where_exp: "item", "item.degree contains 'BSc'" 
      | sort: "year" 
      | reverse %}
  
  {% for dissertation in bsc_dissertations %}
  <div class="accordion-item">
    {% assign unique_id = 'bsc-' | append: forloop.index0 %}
    <input type="checkbox" id="{{ unique_id }}">
    <label for="{{ unique_id }}">
      {{ dissertation.year }} {{ dissertation.title }}
    </label>
    <div class="accordion-content">
      <p><strong>Authors:</strong> {{ dissertation.authors }} </p>
      <p><strong>Supervision:</strong> {{ dissertation.supervision }}, <strong>Institute:</strong> {{ dissertation.institute }}</p>
      {% if dissertation.image %}
        <img src="{{ '/assets/images/dissertations/' | append: dissertation.image }}" alt="{{ dissertation.title }}" class="dissertation-image" style="display: block; margin: 0 auto; height: 150px; width: auto;">
      {% endif %}
      <p><strong>Abstract:</strong> {{ dissertation.abstract }}</p>
      <p><strong>Supervision:</strong> {{ dissertation.supervision }}</p>
      <p><strong>Institute:</strong> {{ dissertation.institute }}</p>
    </div>
  </div>
  {% endfor %}
</div>