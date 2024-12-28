---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: post
---

<div class="container">
    <div class="box only-box">    
     <h4>M. Usman Hanif</h4>
     <div style="font-size: 14px; line-height: 0.75">
     <p>Assistant Professor, SDU Structures, University of Southern Denmark, Odense, Denmark</p>
     <p>Research Interests: <em> Reinforced Concrete | Non Destructive Testing | SHM | FE Modeling</em></p>
     </div>
     </div>
</div>

<div class="container">
    <div class="box only-box">    
     <h4>Currently</h4>
     <div style="font-size: 14px; line-height: 0.75">
     <p>I am involved in teaching and research at SDU Structures</p>
     <p>I am teaching masters course Advanded Finite element Method</p>
     <p>I am finishing my research analysis on acoustic emission application on reinforced concrete beams.</p>
     </div>
     </div>
</div>



 <div class="container">
        <div class="box left-box">
            <div class="col-md-6">
            <h4>Latest Blogs</h4>
            {% for post in site.posts limit:5 %}
            <div class="post-preview" data-title="{{ post.title }}">
                {% if post.image %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-thumbnail">
                {% else %}
                <div class="post-thumbnail"></div> <!-- Placeholder for consistency -->
                {% endif %}
                <a href="{{ post.url | relative_url }}" class="post-titles">{{ post.title }}</a>
                <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
            </div>
            {% endfor %}
        </div>
        </div>
        <div class="box right-box">
            <h4>Recent Publications</h4>
    {% assign recent_publications = site.data.publs | sort: "Date" | reverse | slice: 0, 3 %}
    {% for publication in recent_publications %}
        <div class="mainbar">
            <span class="yearbadge">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span>
                <strong>{{ publication.Title }}</strong><br>
                Journal:<em> {{ publication.Journal }}</em><br>
                {% if publication.DOI %}
                  <a href="{{ publication.DOI }}" target="_blank" class="badge-link">
                      <div class="badge-container"><span class="content doi">DOI</span>
                      <span class="content badge badge-primary">{{ publication.DOI | uri_escape | replace:'%2D','-' }}</span></div>
                  </a>
                {% endif %}
        </div>
    {% endfor %}

        </div>
    </div>



<style>
    
    body {
        line-height: 1.5;
        margin: 0;
        padding: 0;
        font-family: 'Lora', sans-serif;
    }
    
    .container {
    display: flex;
    width: 95%;
    max-width: 1200px;
    gap: 2%; /* Space between containers */
    justify-content: space-between;
    padding-top: 1em;
}
.box {
    flex: 1; /* Equal flex size to start with */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-style: solid;
    border-color: #D1D0CE;
    border-width: 1px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.only-box {
    background-color: #E0DFDE; /* Customize left container color */
    
}

.left-box {
    background-color: #E0DFDE; /* Customize left container color */
}

.right-box {
    background-color: #E0DFDE; /* Customize right container color */
}

.mainbar {
  padding-left: 0px;
  margin-bottom: 10px;
  border-left: 0px solid rgb(235, 231, 224);
  border: 0px solid rgb(235, 231, 224);
  font-size: 14px;
  text-align: left;
}

.mainbar:hover {
  border-left: 0px solid #dfdad3  ;
  border: 0px solid #dfdad3;
  color: #000000;
} 

.yearbadge {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  background-color: #800020;
  color: #E5E6FA;
  display: inline-block;
  padding: 0px 5px;
  box-shadow: 0 2px 4pxrgb(171, 106, 133); /* Shadow effect */
  text-shadow: 2px 2px 4pxrgb(171, 106, 155); /* Add shadow effect to the text */
  border-radius: 4px; /* Adjust border-radius as needed for roundness */
  border-right: 2px solidrgb(171, 106, 162)  ;
}

.box:hover {
    transform: scale(1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
    .post-preview {
        background: #fff;
        padding: 8px 12px; /* Reduced padding for compactness */
        margin-bottom: 5px; /* Reduced margin for less space between posts */
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
    }
    .post-thumbnail {
        width: 2rem;
        height: 2rem; /* Matches the height of the title font size */
        margin-right: 10px; /* Reduced margin */
        flex-shrink: 0;
        border-radius: 3px;
        object-fit: cover;
        background-color: #e0e0e0; /* Placeholder background color */
    }
    .post-titles {
        text-align: center;
        font-size: 1rem; /* Reduced font size */
        margin: 0;
        color: #3e3831;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .post-titles:hover {
        color: #007bff;
    }
    .post-meta {
        font-size: 0.7rem; /* Smaller font size for compactness */
        color: #999;
        margin-top: 1px; /* Reduced margin to bring the meta closer to the title */
        font-style: italic;
        text-align: right;

    }
</style>