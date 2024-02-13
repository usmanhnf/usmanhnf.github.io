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
                <p style="font-size:13px;">I am an Assistant Professor in Structural Engineering at NUST since 2019. I have PhD in Structural Mechanics from University of Malaya, Malaysia. Before the pursuit of my PhD, I worked full-time as a structural engineer. Currently, as a postdoctoral researcher, I am working on multiple research projects in Korea National University of Transportation (KNUT). My research interests focus on understanding the fracture mechanism of RC structures, and, developing technology in monitoring the progression of damage. Due to my involvement in developind these methods, I have gained experience in sensor development, deploying complex sensing mechanisms. </p>
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