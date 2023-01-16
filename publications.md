---
layout: page
title: Publications
permalink: /publications/
order: 4
---

------


-----------------


{% assign cards = site.data.references | sort: 'Date published' | 'reverse' %}
{% for card in cards %}
<ul>
  <li>{{ card.Date published }} {{ card.Title }} {{ card.Journal }} </li>
  <ul> {{ card.Authors }} {{ card.Authors }} </ul>
</ul>
{% endfor %}

----------------