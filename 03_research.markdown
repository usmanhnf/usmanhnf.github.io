---
layout: page
title: Research
permalink: /research/
order: 3
---

From August 2024, I am venturing into my core field with emphasis on `sustainability` and `circularity` while maintaining focus on the core field of structural health monitoring of reinforced concrete structures. It is a work-in-progress, I will be updating my research activities here regularly. 

Coming back to the previous research, my main purpose of building this site was to keep track of my research activity in a single place. Considering this aim, I am including my past research on this page. This includes current or previous research projects, active research collaborations and the outcomes of the students whom I have supervised and cosupervised.

<h2>Research Projects</h2>

<div class="grid-container">
{% assign projects_sorted = site.data.projects | sort: "date" | reverse %}
    {% for project in projects_sorted %}
      <div class="project-box" onclick="toggleProjectDetails(this)">
        <img src="{{ '/assets/images/projects/' | append: project.image }}" alt="{{ project.title }}" class="project-image">
        <h4 class="project-title" style="font-size: 18px">{{ project.title }}</h4>
        <div class="project-details">
          <p><strong>Progress:</strong><progress value= "{{ project.progress }}" max="100"></progress> {{ project.progress }}% </p>
          <p><strong>Introduction:</strong> {{ project.introduction }}</p>
          <p><strong>Objectives:</strong> {{ project.objectives }}</p>
          <p><strong>Start Date:</strong> {{ project.date }}</p>
          <p><strong>Duration:</strong> {{ project.duration }}</p>
        </div>
      </div>
    {% endfor %}
  </div>

<br>

<h2>Research Collaborations</h2>

<div class="colbadges">
    {% assign collaborators = site.data.collaborators %}
    {% for collaborator in collaborators %}
      <div class="colbadge">
        <p style="background-color:#3e3831; color: #f0efed;"><b>{{ collaborator.name }}</b></p>
        <p style="color: #3e3831; line-height: 1;"><i>{{ collaborator.designation }}</i></p>
        <p style="color: #3e3831; line-height: 1;">{{ collaborator.organization }}</p>
        <code style="font-size: 12px; line-height: 0.7;">{{ collaborator.expertise }}</code>
      </div>
    {% endfor %}
  </div>

<h2>Student Dissertations</h2>
<h3><strong>Postgraduate</strong></h3>
<div class="collapsible-list">
  {% assign sorted_postgraduate = site.data.dissertations | where: "level", "pg" | sort: "year" | reverse %}
  {% for project in sorted_postgraduate %}
  <div class="mainbar">
  <div class="collapsible-item">
    <button class="collapsible-title"><span class="yearbadge">{{ project.year }}</span>  {{ project.title }}</button>
    <div class="collapsible-content">
      <p><em><strong>Degree:</strong> {{ project.degree }}, 
      <strong>Authors:</strong> {{ project.authors }},
      <strong>Supervision:</strong> {{ project.supervision }},
      <strong>Awarding Institute:</strong> {{ project.institute }}</em></p>
      <p><strong>Abstract:</strong> {{ project.abstract }}</p>
      {% if project.image_file %}
      <img src="{{ '/assets/images/dissertations/' | append: project.image_file }}" alt="{{ project.title }}" style="max-width: 100%;" class="center">
      {% endif %}
    </div>
  </div>
  </div>
  {% endfor %}
</div>

<h3><strong>Undergraduate</strong></h3>
<div class="collapsible-list">
  {% assign sorted_undergraduate = site.data.dissertations | where: "level", "ug" | sort: "year" | reverse %}
  {% for project in sorted_undergraduate %}
  <div class="mainbar">
  <div class="collapsible-item">
    <button class="collapsible-title"><span class="yearbadge">{{ project.year }}</span>  {{ project.title }}</button>
    <div class="collapsible-content">
      <p><em><strong>Degree:</strong> {{ project.degree }}, 
      <strong>Authors:</strong> {{ project.authors }},
      <strong>Supervision:</strong> {{ project.supervision }},
      <strong>Awarding Institute:</strong> {{ project.institute }}</em></p>
      <p><strong>Abstract:</strong> {{ project.abstract }}</p>
      {% if project.image_file %}
      <img src="{{ /assets/images/dissertations/' | append: project.image_file }}" alt="{{ project.title }}" style="max-width: 100%;" class="center">
      {% endif %}
    </div>
    </div>
  </div>
  {% endfor %}
</div>



<script>
    function toggleProjectDetails(element) {
      const isExpanded = element.classList.contains('expanded');
      document.querySelectorAll('.project-box').forEach(box => {
        box.classList.remove('expanded');
      });

      if (!isExpanded) {
        element.classList.add('expanded');
      }
    }
</script>


<script>
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible-title");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
</script>

