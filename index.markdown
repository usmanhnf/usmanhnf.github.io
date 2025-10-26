---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: post
---

**Usman Hanif**

Assistant Professor, SDU Structures, University of Southern Denmark, Odense, Denmark

Research Interests: **Reinforced Concrete, Non Destructive Testing, SHM, FE Modeling**

<br>

### Currently...
I am involved in teaching and research at SDU Structures

I am teaching the courses related to Finite Element Procedures at Bachelors and Masters levels

I am finishing my research analysis on acoustic emission application on reinforced concrete beams

<br>

### Recent blog posts

<ul style="list-style:none; padding:0; margin:0;">
    {% for post in site.posts limit:3 %}
      <li style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid #eee; padding-bottom:1rem;">
        {% if post.image %}
          <a href="{{ post.url | relative_url }}" style="flex-shrink:0;">
            <img 
              src="{{ post.image | relative_url }}" 
              alt="{{ post.title }}" 
              style="width:80px; height:80px; object-fit:cover; border-radius:8px;"
            >
          </a>
        {% endif %}
        <div>
          <h3 style="margin:0 0 0.25rem 0; font-size:1.1rem;">
            <a href="{{ post.url | relative_url }}" style="text-decoration:none; color:#222;">{{ post.title }}</a>
          </h3>
          <p style="color:#888; font-size:0.9rem; margin:0 0 0.5rem 0;">
            {{ post.date | date: "%B %d, %Y" }}
          </p>
          <p style="margin:0; color:#333; font-size:0.95rem;">
            {{ post.excerpt | strip_html | truncate: 120 }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
  <a href="{{ '/blog/' | relative_url }}" style="display:inline-block; margin-top:1rem; color:#007acc; text-decoration:none; font-weight:500;">
    View all posts →
  </a>

<br>

### Recent Publications

   {% assign publications_sorted = site.data.journals | sort: "Date" | reverse %}

<table style="width:80%;">
  {% for publication in publications_sorted limit:3 %}
  <tr>
    <td style="width:90%;">
      <img alt="Year Badge"
           src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-crimson?style=flat-square">
      <strong>{{ publication.Title }}</strong>
      <br />
      Authors: {{ publication.Authors }}
      <br />
      Journal: {{ publication.Journal }}
      <br />
      <div style="display:flex; flex-direction:row; align-items:center;">
        {% if publication.shortDOI %}
        <a href="{{ publication.DOI }}" target="_blank">
          <img src="https://img.shields.io/badge/DOI-{{ publication.shortDOI | replace: '-', '--' }}-blue?style=plastic"
               alt="DOI: {{ publication.shortDOI }}">
        </a>
        {% endif %}
        &nbsp;
        <span class="__dimensions_badge_embed__"
              data-doi="{{ publication.shortDOI }}"
              data-hide-zero-citations="true"
              data-style="small_rectangle"></span>
        &nbsp;
        <div class="altmetric-embed"
             data-badge-type="4"
             data-hide-less-than="1"
             data-badge-popover="right"
             data-doi="{{ publication.shortDOI }}"></div>
      </div>
    </td>
      </tr>
  {% endfor %}
</table>


### Recent Conferences

{% assign conferences_sorted = site.data.conferences | sort: "Date" | reverse %}

  <table  style="width: 80%;">
      {% for publication in conferences_sorted limit:3 %}
      <tr>
        <td style="width:98%">
          <img alt="Year Badge"
               src="https://img.shields.io/badge/{{ publication.Date | date: '%Y' | uri_escape | replace:'.','%2E' }}-crimson?style=flat-square">
               <strong>{{ publication.Title }}</strong>
               <br />
               <b>Conference</b>: {{ publication.Conference }}
               <br />
              {% if publication.Location %}
                    <img src="https://img.shields.io/badge/Location-{{ publication.Location }}-yellow?style=flat-square" alt="DOI: {{ publication.shortDOI }}">
              {% endif %}
        </td>
      </tr>
      {% endfor %}
  </table>