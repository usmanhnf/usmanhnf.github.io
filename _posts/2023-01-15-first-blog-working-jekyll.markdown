---
layout: post
title:  "Website migrated to Jekyll"
date:   2023-01-15 23:00:38 +0900
---

It has been a painfully steep learning curve in deploying website on GitHub using Jekyll.

#### Adapting to Jekyll

I am under the process of migrating my personal profile on github. I have researched into `HTML` but for a person like me who has no knowledge of hard-core programming, it gets very tricky to manage the site. Jekyll fulfills my needs as, with substantial effort, once I set it up, then things will be easier. Jekyll has very simplistic blog-like writing style and most of the processes are automated. Also, it is supported on github and has a very clean interface.

While I was migrating my website to `Jekyll`, the first problem I faced was populating my `Publications` page. I spent days in finding solution to the problem while trying to get hang of very unfamiliar terms like `ruby`, `liquid` and what-not with a weird syntax that looked like this {% raw %}`{{%- scary -%}}`{% endraw %}. And working with this kind of code, it was difficult to implement automated citations from google scholar.

I tried [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar) and it worked somehow. However, it was a mess deploying the website on github. After a thorough research, I found that github does not allow any invasion of plugins. I could not find any way to keep it simple in a way that I keep my later effort to the minimum. 

But there is a way; using `_data` tables which has the support for `.csv` files. So I started looking into a native solution where no matter how much messed up code is, but I do not have to face the nightmare of finding errors in deploying the website. I was able to make an ugly code which I works for me and can be demonstrated on `publications` page. I just have to {% raw %}`bundle exec jekyll serve`{% endraw %} after updating the csv file with publications. Here is the procedure for building publications on the `publications page`

#### Dr. Jekyll and reDesign

First of all, I exported google scholar files as a `.bib` file and then converted to csv using [bibtex-converter](https://www.bibtex.com/c/bibtex-to-csv-converter/). The reason for doing it was that I could not differentiate between the publication types. So, I placed the `refences.csv` in the `_data` folder (probably I made the new folder). The order of items in the csv files are shown below:

```handlebars

"Item_type","Authors","Title","Journal","Publication_year","Volume","Issue","Pages","Institution","Publisher","Proceedings_title","Date_published","Sub-type","School"
```

Furthermore, I do not have any idea how to use two-worded variables in dot notation for displaying the values. I just added `_` for every space between the words for making things temporarily working (I hope I find the solution). 
First I called the references `csv` and sorted in descending order of the publish year.

{% raw %}
```handlebars
{% assign cards = site.data.references | sort: 'Date published' | 'reverse' %}
```
{% endraw %}

Then from `cards`, I prepared separate headings to filter out journal articles only. 

{% raw %}
```handlebars
{% assign journals = cards | where: "Item_type", "Journal Article" | sort: 'Date_published' | 'reverse'  %}
```
{% endraw %}

Further, I filtered the year for the journal articles (for example 2023) and applied minor html formatting until I was satisfied with the results.
{% raw %}
```handlebars
#### 2023
{% assign j23 = journals | where: "Publication_year", "2023" | sort: 'Date_published' | 'reverse'  %}

{% for J_23 in j23 %}
<ul>
<li> {{ J_23.Authors }}. <b>({{ J_23.Publication_year }})</b> {{ J_23.Title }}. {{ J_23.Volume}}, {{ J_23.Issue }} <i>{{ J_23.Journal }}</i>. </li>
</ul>
{% endfor %}
```
{% endraw %}

The end resuls can be found [here](https://usmanhnf.github.io/publications/). 

I also added Dr. [Chang's](https://jonathanchang.org/blog/easily-showcase-your-google-scholar-metrics-in-jekyll/) google scholar metrics. Probably, they have to be {% raw %}`bundle exec jekyll serve`{% endraw %} (read bejs'ed) before deploying. Still a cool feature.

I will try to clean up the code for convenient workaround if I find time from my research.