---
layout: default
permalink: /test_pubs/
---

<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>

<style>
  .publications-container {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
  }
  
  .entry-container {
    width: 100%;
    font-family: Arial, sans-serif;
    display: inline-table;
    vertical-align: top
    }

  .eighty {
    width: 88%;
    
  }
  .twenty {
    width: 10%;
    
  }


h1 {
  text-shadow: 0 0 2px #140000;
}
  .publications-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 10px;
    font-size: 12px;
  }
  .badge-container {
    display: inline-block;
    font-family: "Times New Roman", Times, serif; /* Change font to Times New Roman */
    font-size: 12px;
    font-weight: normal;
    border-radius: 4px; /* Adjust border-radius as needed for roundness */
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); /* Add shadow effect to the text */
    text-rendering: "geometricPrecision";
}
.content {
    display: inline-block;
    padding: 1px 5px;
    margin-right: 0; /* Remove margin between elements */
}
.doi {
    background-color: #4f4f4f;
    text-rendering: "geometricPrecision";
    color: #fff;
    font-family: "Verdana,Geneva,DejaVu Sans,sans-serif";
}
.badge {
    background-color: #0375b6;
    text-rendering: "geometricPrecision";
    color: #f2f0ec;
}
.yearbadge {
    font-family: "DejaVu Sans", Times, serif; /* Change font to Times New Roman */
    text-rendering: "geometricPrecision";
    font-size: 12px;
    background-color: #3c8448;
    color: #fff;
    display: inline-block;
    padding: 1px 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect to the text */
    border-radius: 4px; /* Adjust border-radius as needed for roundness */
}
</style>

<h1 align="center">Publications</h1>

<div class="publications-container">
  <h1 class="publications-title">Journal Publications</h1>

  <ul>
    {% assign publications_sorted = site.data.publs | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
       <div class="entry-container">
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
  </ul>
</div>


<div class="publications-container">
  <h1 class="publications-title">Conference Proceedings</h1>

  <ul>
    {% assign publications_sorted = site.data.confs | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
        <div class="entry-container">
          <div class="entry-container eighty">
        <span class="yearbadge">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span><strong>{{ publication.Title }}</strong><br>
        Authors: {{ publication.Authors }}<br>
        Conference: {{ publication.Conference }}<br>
        <div class="badge-container"><span class="content doi">Location</span><span class="content badge badge-primary">{{ publication.Location }}</span></div>
        </div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>