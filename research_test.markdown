---
layout: page
title: Publications
permalink: /publications/
order: 4
---
<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>

<div class="publications-container">
    <h1>Journal Publications</h1>
    <div class="row">
    <ol>
    {% assign publications_sorted = site.data.publs | sort: "Date" | reverse %}
    {% for publication in publications_sorted %}
      <li>
       <div class="mainbar">
            <div class="entry-container eighty">
                <span class="yearbadge yearbadge-red">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span> <strong>{{ publication.Title }}</strong><br>
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
                {{ publication.plumx }}
            </div>
        </div>
    </li>
    {% endfor %}
  </ol>
  </div>
</div>
<div class="publications-container">
  <h1 class="publications-title">Conference Proceedings</h1>
  <ol>
    {% assign conferences_sorted = site.data.publications_conferences | sort: "Date" | reverse %}
    {% for publication in conferences_sorted %}
      <li>
        <div class="mainbar">
        <div class="entry-container eighty">
          <span class="yearbadge yearbadge-amber">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span><strong>{{ publication.Title }}</strong><br>
            Authors: {{ publication.Authors }}<br>
            Conference: {{ publication.Conference }}<br>
            <div class="badge-container"><span class="doi-text doi-badge">Location</span><span class="doi-text badge badge-primary">{{ publication.Location }}</span></div>
        </div>
        </div>
      </li>
    {% endfor %}
  </ol>
</div>


<style>
// Main layout
.wrapper {
  max-width: 1200px; /* Default width */
  margin: 0 auto;
  padding: 0 15px;
}

// Variables
$box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
$box-shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.2);
$border-color: #D1D0CE;
$background-gray: #E0DFDE;
$hover-color: #007bff;
$badgecolor: #002e36; // Default badge color

// Custom Color Variables with descriptive names
$amber: #e67e22; // Amber
$purple: #6c3483; // Purple
$blue: #2980b9; // Blue
$green: #27ae60; // Green
$red: #c0392b; // Red
$turquoise: #16a085; // Turquoise
$orange: #e67e22; // Orange
$grey: #808080; // Orange

// Base styles
body {
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: 'Lora', sans-serif;
  color: darken($blue, 40%);
  
}
::selection {
  background: #d1dba2;
}


// Site header
.site-header {
  border-top: 8px solid darken($blue, 20%);
  border-bottom: 1px solid #d3cfc9;
  min-height: 55.95px;
  position: relative;
}

.site-title {
  font-size: 26px;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: -1px;
  margin-bottom: 0;
  float: left;
}

.site-title, .site-title:visited, .site-title:hover {
  color: #1e2128;
  background-color: none;
}

.post-title {
  //font-size: 30px;
  /*font-weight: bold;*/
  line-height: 1;
  text-align: center;
}


// Link styles
a {
  color: #16949b;
  text-decoration: none;
}

a:visited {
  color: #302f2f;
}

a:hover {
  text-decoration: none;
  color: #1e2128;
  background-color: lighten($blue, 30%); /* Example color: Gold */
  border-radius: 3px; /* Adjust to make the corners rounded */
  display: inline-block; /* Makes the background fit the text */
}


// Container styles
.container {
  display: flex;
  width: 95%;
  max-width: 1200px;
  gap: 2%; // Space between containers
  justify-content: space-between;
  padding-top: 1em;
}

// Box styles
.box {
  flex: 1; // Equal flex size to start with
  padding: 20px;
  border-radius: 5px;
  box-shadow: $box-shadow;
  background-color: #fff;
  border: 1px solid lighten($grey, 30%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1);
    box-shadow: $box-shadow-hover;
  }
}

// Specific box styles
.only-box,
.left-box,
.right-box {
  background-color: lighten($grey, 45%);
}

/* Style for right containers */
.mainbar {
  padding-left: 5px;
  margin-bottom: 5px;
  border-left: 2px solid rgb(235, 231, 224);
  border: 2px solid rgb(235, 231, 224);
  font-size: 14px;
  text-align: left;
}

.mainbar:hover {
  border-left: 2px solid #dfdad3  ;
  border: 2px solid #dfdad3;
  color: #000000;
} 

// Mixin for Year Badge
@mixin yearbadge($bg-color) {
  background-color: $bg-color;
  color: #E5E6FA;
  font-size: 12px;
  display: inline-block;
  padding: 0 5px;
  box-shadow: 0 2px 4px darken($bg-color, 10%);
  text-shadow: 2px 2px 4px darken($bg-color, 5%);
  border-radius: 4px;
  border-right: 2px solid darken($bg-color, 10%);
}

// Year badge styles using custom colors
.yearbadge-amber {
  @include yearbadge($amber); // Amber
}

.yearbadge-purple {
  @include yearbadge($purple); // Purple
}

.yearbadge-blue {
  @include yearbadge($blue); // Blue
}

.yearbadge-green {
  @include yearbadge($green); // Green
}

.yearbadge-red {
  @include yearbadge($red); // Red
}

.yearbadge-turquoise {
  @include yearbadge($turquoise); // Turquoise
}

.yearbadge-orange {
  @include yearbadge($orange); // Orange
}

// Post preview styles
.post-preview {
  background: lighten($grey, 60%);
  padding: 8px 12px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  .post-thumbnail {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 3px;
    object-fit: cover;
    background-color: #e0e0e0;
  }

  .post-titles {
    text-align: center;
    font-size: 1rem;
    margin: 0;
    color: darken($blue,30%);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $hover-color;
    }
  }

  .post-meta {
    font-size: 0.8rem;
    color: $grey;
    margin-top: 1px;
    font-style: italic;
    text-align: right;
  }
}

//* DOI Container */
.doi-container {
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  font-weight: normal;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); /* Add shadow effect to the text */
  text-rendering: "geometricPrecision";
  margin-bottom: 0px;
}

.doi-text {
  display: inline-block;
  background-color: #0f81c1;
  color: #fffbee;
  padding: 1px 5px;
  margin-right: 0; /* Remove margin between elements */
}

.doi-text:hover {
  text-decoration: none;
  display: inline-block; /* Makes the background fit the text */
  background-color: none;
  margin-right: 0; /* Remove margin between elements */
}

.doi-badge {
  background-color: #4f4f4f;
  text-rendering: "geometricPrecision";
  color: #fff;
  background-color: none;
  font-family: "Verdana, Geneva, DejaVu Sans, sans-serif";
}

// Publications container

.publications-container {
  font-size: 14px;
}

.entry-container {
  width: 100%;
  font-family: 'Lora', sans-serif;
  display: inline-table;
  vertical-align: top;

  .eighty {
    width: 78%;
    border:black;
  }

  .ten {
    width: 10%;
    border:black;
  }
}
</style>