---
layout: page
permalink: /test/
---

{% assign cards = site.data.references | sort: 'Date published' | 'reverse' %}

--------------
### Journal Articles
{% assign journals = cards | where: "Item_type", "Journal Article" | sort: 'Date_published' | 'reverse'  %}

-----------------

{% for J in journals %}

{{ J.Date_published | first }}



<ul>
<li> {{ J.Authors }}. <b>({{ J.Publication_year }})</b> {{ J.Title }}. {{ J.Volume}}, {{ J.Issue }} <i>{{ J_23.Journal }}</i>. </li>
</ul>

{% endfor %}











------------
------------
------------
