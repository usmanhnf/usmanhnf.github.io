---
layout: page
permalink: /blogtest/
---

<style>
#collaborators {
  padding: 10px;
}

.colbadges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.colbadge {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 2.5px;
  text-align: center;
  width: 220px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.colbadge:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.2);
}

.colbadge h3 {
  margin: 0;
  font-size: 1em;
}

.colbadge p {
  margin: 5px 0;
  font-size: 0.8em;
}

    </style>


<section id="collaborators">
  <h2>Our Collaborators</h2>
  <div class="colbadges">
    {% assign collaborators = site.data.collaborators %}
    {% for collaborator in collaborators %}
      <div class="colbadge">
        <p><b>{{ collaborator.name }}</b></p>
        <p><i>{{ collaborator.designation }}</i></p>
        <p>{{ collaborator.organization }}</p>
        <p>{{ collaborator.expertise }}</p>
      </div>
    {% endfor %}
  </div>
</section>