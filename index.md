---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<head>
    <style>
    {
        box-sizing: border-box;
    }
    /* Set additional styling options for the columns*/
    .columna {
    float: left;
    width: 55%;
    }
    .columnb {
    float: right;
    width: 40%;
    }
     .row:after {
    content: "";
    display: table;
    clear: both;
    }
        
    </style>
 </head>
 <body>
    <div class="row">
        <div class="columna">
            <h2><b>Usman</b> Hanif </h2>
                <p style="font-size:15px;">PhD | PE | Postdoctoral Researcher <a href="https://www.ut.ac.kr/english.do">(KNUT)</a> | Assistant Professor <a href="https://nice.nust.edu.pk/faculty/">(NUST)</a> </p>
                <!-- <img src="assets/images/id.jpg" alt="ID" style="float:right;height:200px;"> -->
                <p style="font-size:13px;">I am an Assistant Professor in Structural Engineering at NUST since 2019. I have PhD in Structural Mechanics from University of Malaya, Malaysia. Currently, I am working on a research project as a postdoctoral researcher in Korea National University of Transportation (KNUT).
                    Usman Hanif is an Assistant Professor in Structural Engineering department at NUST, where he has been since 2019. From 2009 to 2014, he served as a Professional Structural Engineer where he developed his interest in Structural Mechanics and pursued his PhD from Universiti Malaya, Malaysia. Since then he is teaching undergraduate and graduate students the courses related to Mechanics of Reinforced Concrete. Currently, he is researching continuous health monitoring using hybrid acoustic emission in South Korea.</p>
                <h3>Research Interests</h3>
                <p style="font-size:13px;">I am processing acoustic emission (AE) data for continuous monitoring of CFRP retrofitted structural members. My research involves scaled-specimen testing, large data analysis, adapting to IOT-like system for monitoring setup and analytical and computational models. I am also doing computational modeling of RC precast wall-joints. </p>
            </div>
        <div class="columnb" style="overflow-y: scroll; height:400px; scrollbar-width: thin; scrollbar-color: hsl(0 0% 50%);">
            <h4 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h4>
            <ul class="post-list" style="font-size:12px;">
                {%- for post in site.posts -%}
                    <li>
                            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                            <span class="post-meta">{{ post.date | date: date_format }}</span>
                            <h6>
                                <a class="post-link" href="{{ post.url | relative_url }}"  >
                                    {{ post.title | escape }}
                                </a>
                            </h6>
                            <p style="font-size:12px;"> {{ post.excerpt }} </p>
                    </li>
                {%- endfor -%}
            </ul>
        </div> 
        <div class="columnb">
            <h4>News</h4>
            
        </div> 
    </div>
 </body>