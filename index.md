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
                <p style="font-size:15px;">PhD | PE | Assistant Professor <a href="https://portal.findresearcher.sdu.dk/da/persons/muha">(SDU DenmarkT)</a> </p>
                <!-- <img src="assets/images/id.jpg" alt="ID" style="float:right;height:200px;"> -->
                <p style="font-size:13px;">I have joined assistant professor at University of Southern Denmark where I will be teaching as well as conducting research. I will keep my academic activities updated here.  </p>
                <h3>Research Interests</h3>
                <p style="font-size:13px;">Damage assessment in concrete structures, reusability of structural elements, circularity in construction, NDT for RC members, SHM of existing structures. </p>
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