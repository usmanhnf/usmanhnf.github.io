---
layout: page
permalink: /test_pubs/
---

<script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>


{% assign publications_sorted = site.data.publs | sort: "Date" | reverse %}
{% for publication in publications_sorted %}

{{ publication.Title }}</strong><br>
            Authors: {{ publication.Authors }}<br>
            Journal: {{ publication.Journal }}<br>


    {% endfor %}