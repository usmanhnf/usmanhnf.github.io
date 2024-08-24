---
layout: page
permalink: /dissertations/
---

<h3><strong>Postgraduate Projects</strong></h3>
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

<h3><strong>Undergraduate Projects</strong></h3>
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