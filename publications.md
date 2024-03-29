---
layout: page
title: Publications
permalink: /publications/
order: 4
---


{% assign cards = site.data.references | sort: 'Date published' | 'reverse' %}

--------------
### Journal Articles
{% assign journals = cards | where: "Item_type", "Journal Article" | sort: 'Date_published' | 'reverse'  %}

-----------------
{% assign j24 = journals | where: "Publication_year", "2024" | sort: 'Date_published' | 'reverse'  %}
#### 2024

{% for J_24 in j24 %}
<ul>
<li> {{ J_24.Authors }}. <b>({{ J_24.Publication_year }})</b> {{ J_24.Title }}. {{ J_24.Volume}}, {{ J_24.Issue }} <i>{{ J_24.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_24.doi }}"> DOI </a></b></span></p>
</ul>

{% endfor %}


{% assign j23 = journals | where: "Publication_year", "2023" | sort: 'Date_published' | 'reverse'  %}
#### 2023

{% for J_23 in j23 %}
<ul>
<li> {{ J_23.Authors }}. <b>({{ J_23.Publication_year }})</b> {{ J_23.Title }}. {{ J_23.Volume}}, {{ J_23.Issue }} <i>{{ J_23.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_23.doi }}"> DOI </a></b></span></p>
</ul>

{% endfor %}


#### 2022

{% assign j22 = journals | where: "Publication_year", "2022" | sort: 'Date_published' | 'reverse'  %}

{% for J_22 in j22 %}
<ul>
<li> {{ J_22.Authors }}. <b>({{ J_22.Publication_year }})</b> {{ J_22.Title }}. {{ J_22.Volume}}, {{ J_22.Issue }} <i>{{ J_22.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_22.doi }}"> DOI </a></b></span></p>
</ul>

{% endfor %}


#### 2021
{% assign j21 = journals | where: "Publication_year", "2021" | sort: 'Date_published' | 'reverse'  %}

{% for J_21 in j21 %}
<ul>
<li>  {{ J_21.Authors }}. <b>({{ J_21.Publication_year }})</b> {{ J_21.Title }}. {{ J_21.Volume}}, {{ J_21.Issue }} <i>{{ J_21.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_21.doi }}"> DOI </a></b></span></p>
</ul>
{% endfor %}


#### 2020
{% assign j20 = journals | where: "Publication_year", "2020" | sort: 'Date_published' | 'reverse'  %}

{% for J_20 in j20 %}
<ul>
<li> {{ J_20.Authors }}. <b>({{ J_20.Publication_year }})</b> {{ J_20.Title }}. {{ J_20.Volume}}, {{ J_20.Issue }} <i>{{ J_20.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_20.doi }}"> DOI </a></b></span></p>
</ul>
{% endfor %}



#### 2018
{% assign j18 = journals | where: "Publication_year", "2018" | sort: 'Date_published' | 'reverse'  %}

{% for J_18 in j18 %}
<ul>
<li> {{ J_18.Authors }}. <b>({{ J_18.Publication_year }})</b> {{ J_18.Title }}. {{ J_18.Volume}}, {{ J_18.Issue }} <i>{{ J_18.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_18.doi }}"> DOI </a></b></span></p>
</ul>
{% endfor %}


#### 2017
{% assign j17 = journals | where: "Publication_year", "2017" | sort: 'Date_published' | 'reverse'  %}

{% for J_17 in j17 %}
<ul>
<li> {{ J_17.Authors }}. <b>({{ J_17.Publication_year }})</b> {{ J_17.Title }}. {{ J_17.Volume}}, {{ J_17.Issue }} <i>{{ J_17.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_17.doi }}"> DOI </a></b></span></p>
</ul>
{% endfor %}


#### 2016
{% assign j16 = journals | where: "Publication_year", "2016" | sort: 'Date_published' | 'reverse'  %}

{% for J_16 in j16 %}
<ul>
<li> {{ J_16.Authors }}. <b>({{ J_16.Publication_year }})</b> {{ J_16.Title }}. {{ J_16.Volume}}, {{ J_16.Issue }} <i>{{ J_16.Journal }}</i>. </li>
<p style="text-indent: 50px; color: #243763; font-size: 13px;"><span style="background-color: #CBE4DE; border:thin green solid; padding:1px"><b><a href="{{ J_16.doi }}"> DOI </a></b></span></p>
</ul>
{% endfor %}


------------------
### Conference Proceedings
{% assign conferences = cards | where: "Item_type", "Conference Paper" | sort: 'Date_published' | 'reverse'  %}
-----------------

{% for card in conferences %}
<ul>
<li> {{ card.Authors }}. <b>({{ card.Publication_year }})</b> {{ card.Title }}. {{ card.Volume}}, {{ card.Issue }} <i>{{ card.Proceedings_title }}</i>. </li>
</ul>
{% endfor %}


---------------
