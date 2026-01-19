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

  <table  style="width: 100%; border: 1px solid #FEF9EF; border-collapse: collapse;">
      {% for publication in publications_sorted %}
      <tr>
        <td style="width:2%; border: 1px solid #FEF9EF;">{{ forloop.index }}</td>
        <td style="width:90%; ; border: 1px solid #FEF9EF;">
          <img alt="Year Badge"
               src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-firebrick?style=flat-square">
               <strong>{{ publication.Title }}</strong>
               <br />
               Authors: {{ publication.Authors }}
               <br />
               Journal: {{ publication.Journal }}
               <br />
               <div style="display: flex ;flex-direction: row; ">
                 
                  {% if publication.shortDOI %}
                    <a href="{{ publication.DOI }}" target="_blank">
                    <img src="https://img.shields.io/badge/DOI-{{ publication.shortDOI | replace: '-', '--' }}-blue?style=flat"
                      alt="DOI: {{ publication.shortDOI }}">
                  </a>
                  {% endif %} 
                  &nbsp;
                  <span class="__dimensions_badge_embed__" data-doi="{{ publication.shortDOI }}" data-hide-zero-citations="true" data-style="small_rectangle"></span> &nbsp;
                  <div class='altmetric-embed' data-badge-type="2" data-hide-less-than='1' data-badge-popover='right' data-doi="{{ publication.shortDOI }}"></div> 
                  <div>
                  {{ publication.plumx }}
                  </div>
                <a href="https://plu.mx/plum/a/?doi={{ publication.shortDOI | url_encode }}"
                   class="plumx-plum-print-popup"
                   data-popup="right"
                   data-size="medium"
                   data-site="plum"
                   data-hide-when-empty="true">
                  {{ publication.Title }}
                </a>
               </div>
              
              
        </td>
        </tr>
      {% endfor %}
  </table>


## Conference Proceedings

{% assign conferences_sorted = site.data.conferences | sort: "Date" | reverse %}

  <table  style="width: 100%;">
      {% for publication in conferences_sorted %}
      <tr>
        <td style="width:2%; border: 1px solid #FEF9EF">{{ forloop.index }}</td>
        <td style="width:98%; border: 1px solid #FEF9EF">
          <img alt="Year Badge"
               src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-firebrick?style=flat-square">
               <strong>{{ publication.Title }}</strong>
               <br />
               Authors: {{ publication.Authors }}
               <br />
               Conference: {{ publication.Conference }}
               <br />
              {% if publication.Location %}
                    <img src="https://img.shields.io/badge/Location-{{ publication.Location }}-darkorange?style=flat-square" alt="DOI: {{ publication.shortDOI }}">
              {% endif %}
        </td>
      </tr>
      {% endfor %}
  </table>

