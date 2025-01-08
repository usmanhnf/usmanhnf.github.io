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
      <ol>
        {% assign publications_sorted = site.data.journals | sort: "Date" | reverse %}
        {% for publication in publications_sorted %}
          <div class="entry-container" >
            <div class="mainbar">
              <li>
                <div class="entry-container eighty">
                <img alt="Static Badge" src="https://img.shields.io/badge/ {{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }} -crimson"><strong>{{ publication.Title }}</strong><br>
                    Authors: {{ publication.Authors }}<br>
                    Journal: {{ publication.Journal }}<br>
                    {% if publication.shortDOI %}
                    <a href="{{ publication.DOI }}" target="_blank">
                      <img src="https://img.shields.io/badge/DOI-{{ publication.shortDOI | replace: '-', '--' }}-blue?style=plastic" alt="DOI: {{ publication.shortDOI }}">
                    </a>
                    {% endif %}
                    {{ publication.gcitation }}<br>
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

<br>

<div class="box only-box">
  <h1>Conference Proceedings</h1>
    <ol>
      {% assign conferences_sorted = site.data.conferences | sort: "Date" | reverse %}
      {% for publication in conferences_sorted %}
      <div class="mainbar">
        <li>
          <div class="entry-container eighty">
            <img alt="Static Badge" src="https://img.shields.io/badge/ {{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }} -crimson">{{ publication.Title }}</strong><br>
            Authors: {{ publication.Authors }}<br>
            Conference: {{ publication.Conference }}<br>
            {% if publication.Location %}
                    <img src="https://img.shields.io/badge/Location-{{ publication.Location }}-yellow?style=plastic" alt="DOI: {{ publication.shortDOI }}">
            {% endif %}
            </div>
        
        </li>
      </div>
      {% endfor %}
  </ol>
</div>