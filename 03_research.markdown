---
layout: page
title: Research
permalink: /research/
order: 3
---

<div class="container">
    <div class="box only-box">
    <h3>Current Research</h3>    
      <p> Currently I am analyzing the test results from Reinforced concrete beams retrofitted using CFRP laminates performed last year. The research focuses on localizing, characterizing and realtime monitoring of the CFRP bond behavior with RC beams. We are also working on source localization using DT maps. </p>
      <p>I have also started to investigate the mechanical properties of 3D printed concrete. </p>
      <p>I am also preparing to apply for research projects focused on damage-assessment / structural-health-monitoring of reinforced concrete structures.</p>
    </div>
</div>

<div class="container">
    <div class="box only-box">    
      <h3>Previouos Projects</h3>
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
    </div>
</div>

<div class="container">
    <div class="box only-box">    
      <h3>Collaborators</h3>
          {% assign collaborators = site.data.collaborators %}
          <ul style="list-style-type: square;">
            {% for collaborator in collaborators %}
              <li>
                <h5><b>{{ collaborator.name }}</b></h5>
                  <p style="font-size: 12px; line-height: 0.5;"><i>{{ collaborator.designation }}</i></p>
                  <p style="font-size: 12px; line-height: 0.5;">{{ collaborator.organization }}</p>
                  <code style="font-size: 12px; line-height: 0.5;">{{ collaborator.expertise }}</code>
              </li>
              <br>
          {% endfor %}
          </ul>
    </div>
</div>

<div class="container">
    <div class="box only-box">    
      <h3>Student Dissertations</h3>
<h4>Postgraduate</h4>
<div class="collapsible-list">
  {% assign sorted_postgraduate = site.data.dissertations | where: "level", "pg" | sort: "year" | reverse %}
  {% for project in sorted_postgraduate %}
  <div class="accordian-outline">
  <div class="collapsible-item">
    <button class="collapsible-title"><span class="yearbadge yearbadge-red">{{ project.year }}</span>  {{ project.title }}</button>
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

<h4>Undergraduate</h4>
<div class="collapsible-list">
  {% assign sorted_undergraduate = site.data.dissertations | where: "level", "ug" | sort: "year" | reverse %}
  {% for project in sorted_undergraduate %}
  <div class="accordian-outline">
  <div class="collapsible-item">
    <button class="collapsible-title"><span class="yearbadge yearbadge-orange">{{ project.year }}</span>  {{ project.title }}</button>
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

    </div>
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
