---
layout: page
title: Publications
permalink: /publications/
order: 4
---
<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>

<div class="publications-container">
    <h1 class="publications-title">Journal Publications</h1>
    <ol>
    {% assign publications_sorted = site.data.publs | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
       <div class="mainbar">
            <div class="entry-container eighty">
                <span class="yearbadge">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span> <strong>{{ publication.Title }}</strong><br>
                Authors: {{ publication.Authors }}<br>
                Journal: {{ publication.Journal }}<br>
                <a href="{{ publication.DOI }}" target="_blank" class="badge-link">
                    <div class="badge-container"><span class="content doi">DOI</span><span class="content badge badge-primary">{{ publication.DOI | uri_escape | replace:'%2D','-' }}</span></div>
                </a>
            </div>
            <div class="entry-container twenty">
                {{ publication.plumx }}
            </div>
        </div>
    </li>
    {% endfor %}
  </ol>
</div>
<div class="publications-container">
  <h1 class="publications-title">Conference Proceedings</h1>
  <ol>
    {% assign conferences_sorted = site.data.publications_conferences | sort: "Date" | reverse %}
    {% for publication in conferences_sorted %}
      <li>
        <div class="mainbar">
        <div class="entry-container eighty">
          <span class="yearbadge">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span><strong>{{ publication.Title }}</strong><br>
            Authors: {{ publication.Authors }}<br>
            Conference: {{ publication.Conference }}<br>
            <div class="badge-container"><span class="content doi">Location</span><span class="content badge badge-primary">{{ publication.Location }}</span></div>
        </div>
        </div>
      </li>
    {% endfor %}
  </ol>
</div>