---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: post
---

<div class="container">
    <div class="box only-box">    
     <h4>M. Usman Hanif</h4>
     <p>Assistant Professor, SDU Structures, University of Southern Denmark, Odense, Denmark</p>
     <p>Research Interests: <em> Reinforced Concrete | Non Destructive Testing | SHM | FE Modeling</em></p>
     </div>
</div>

<div class="container">
    <div class="box only-box">    
     <h4>Currently</h4>
     <p>I am involved in teaching and research at SDU Structures</p>
     <p>I am teaching masters course Advanded Finite element Method</p>
     <p>I am finishing my research analysis on acoustic emission application on reinforced concrete beams.</p>
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
                <a href="{{ post.url | relative_url }}" class="post-titles">{{ post.title }}</a> &nbsp; &nbsp;
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
            <span class="yearbadge yearbadge-red">{{ publication.Date | date: "%Y" | uri_escape | replace:'.','%2E' }}</span>
                <strong>{{ publication.Title }}</strong><br>
                Journal:<em> {{ publication.Journal }}</em><br>
                {% if publication.DOI %}
                    <a href="{{ publication.DOI }}" target="_blank" class="badge-link">
                        <div class="doi-container"><span class="doi-text doi-badge">DOI</span><span class="doi-text badge badge-primary">{{ publication.DOI | uri_escape | replace:'%2D','-' }}</span></div>
                    </a>
                {% endif %}
        </div>
    {% endfor %}

        </div>
    </div>



<div class="container">
    <div class="box only-box">  
        <div class="social-thumbnails">
            <div class="social-thumbnail">
                <a href="https://portal.findresearcher.sdu.dk/da/persons/muha" target="_blank">
                    <img src="/assets/icons/icon_sdu.png" alt="SDU" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://www.linkedin.com/in/usmanhnf" target="_blank">
                    <img src="/assets/icons/icon_linkedin.svg" alt="linkedin" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://orcid.org/0000-0002-1490-2350" target="_blank">
                    <img src="/assets/icons/icon_orcid.svg" alt="orcid" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://scholar.google.com.pk/citations?user=v-OxcFMAAAAJ&hl=en&oi=ao" target="_blank">
                    <img src="/assets/icons/icon_gscholar.svg" alt="gcsholar" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://www.scopus.com/authid/detail.uri?authorId=55737908100" target="_blank">
                    <img src="/assets/icons/icon_scopus.svg" alt="scopus" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://www.researchgate.net/profile/Usman_Hanif3" target="_blank">
                    <img src="/assets/icons/icon_researchgate.svg" alt="researchgate" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://www.webofscience.com/wos/author/record/D-9996-2019" target="_blank">
                    <img src="/assets/icons/icon_wos.svg" alt="wos" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://sciprofiles.com/profile/444581" target="_blank">
                    <img src="/assets/icons/icon_sci.png" alt="sci" />
                </a>
            </div>
            <div class="social-thumbnail">
                <a href="https://github.com/usmanhnf" target="_blank">
                    <img src="/assets/icons/icon_github.png" alt="github" />
                </a>
            </div>
        </div> 
    </div>
</div>