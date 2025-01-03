---
layout: page
title: Publications
permalink: /publications/
order: 4
---
<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>
<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>

<div class="box only-box">
  <h1>Journal Publications</h1>
    <div class="entry-container">
      <ol>
        {% assign publications_sorted = site.data.journals | sort: "Date" | reverse %}
        {% for publication in publications_sorted %}
          <div class="entry-container" >
            <div class="mainbar">
              <li>
                <div class="entry-container eighty">
                  <span class="yearbadge yearbadge-red"> {{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span> <strong>{{ publication.Title }}</strong><br>
                    Authors: {{ publication.Authors }}<br>
                    Journal: {{ publication.Journal }}<br>
                    <a href="{{ publication.DOI }}" target="_blank" class="badge-link">
                      <div class="doi-container"><span class="doi-text doi-badge">DOI</span><span class="doi-text badge badge-primary">{{ publication.DOI | uri_escape | replace:'%2D','-' }}</span></div>
                    </a>
                </div>
                <div class="entry-container ten">
                  {{ publication.plumx }}
                </div>
                <div class="entry-container ten">
                  {{ publication.altmeric }}
                </div>        
              </li>
            </div>
          </div>
          {% endfor %}
      </ol>
  </div>
</div>

<br>

<div class="box only-box">
  <h1>Conference Proceedings</h1>
    <ol>
      {% assign conferences_sorted = site.data.conferences | sort: "Date" | reverse %}
      {% for publication in conferences_sorted %}
      <div class="mainbar">
        <li>
          <div class="entry-container eighty">
            <span class="yearbadge yearbadge-purple">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span><strong>{{ publication.Title }}</strong><br>
            Authors: {{ publication.Authors }}<br>
            Conference: {{ publication.Conference }}<br>
            <div class="conf-container"><span class="conf-text conf-badge">Location</span><span class="conf-text badge badge-primary">{{ publication.Location }}</span></div>
          </div>
        
        </li>
      </div>
      {% endfor %}
  </ol>
</div>