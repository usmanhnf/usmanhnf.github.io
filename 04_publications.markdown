---
layout: page
title: Publications
permalink: /publications/
order: 4
---
<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>
<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
<script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"></script>
<script type="text/javascript" src="https://embed.altmetric.com/assets/embed.js"></script>


## Journals

{% assign publications_sorted = site.data.journals | sort: "Date" | reverse %}

  <table  style="width: 100%;">
      {% for publication in publications_sorted %}
      <tr>
        <td style="width:2%">{{ forloop.index }}</td>
        <td style="width:85%;">
          <img alt="Year Badge"
               src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-red?style=plastic">
               <strong>{{ publication.Title }}</strong>
               <br />
               Authors: {{ publication.Authors }}
               <br />
               Journal: {{ publication.Journal }}
               <br />
              {% if publication.shortDOI %}
              <a href="{{ publication.DOI }}" target="_blank">
                <img src="https://img.shields.io/badge/DOI-{{ publication.shortDOI | replace: '-', '--' }}-blue?style=plastic"
                   alt="DOI: {{ publication.shortDOI }}">
              </a>
              {% endif %} 
              <span class="__dimensions_badge_embed__" data-doi="{{ publication.shortDOI }}" data-hide-zero-citations="true" data-style="small_rectangle"></span>
              <div class='altmetric-embed' data-badge-type='medium-bar' data-hide-less-than='1' data-badge-popover='right' data-doi="{{ publication.shortDOI }}"></div>
        </td>
        <td style="width:7%">{{ publication.plumx }}</td>
        <td style="width:7%">{{ publication.altmeric }}</td>
      </tr>
      {% endfor %}
  </table>


## Conference Proceedings

{% assign conferences_sorted = site.data.conferences | sort: "Date" | reverse %}

  <table  style="width: 100%;">
      {% for publication in conferences_sorted %}
      <tr>
        <td style="width:2%">{{ forloop.index }}</td>
        <td style="width:98%">
          <img alt="Year Badge"
               src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-red?style=plastic">
               <strong>{{ publication.Title }}</strong>
               <br />
               Authors: {{ publication.Authors }}
               <br />
               Journal: {{ publication.Conference }}
               <br />
              {% if publication.Location %}
                    <img src="https://img.shields.io/badge/Location-{{ publication.Location }}-yellow?style=flat-square" alt="DOI: {{ publication.shortDOI }}">
              {% endif %}
        </td>
      </tr>
      {% endfor %}
  </table>

