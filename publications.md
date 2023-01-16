---
layout: page
title: Publications
permalink: /publications/
order: 4
---

# Google Scholar Stats
* [Google Scholar Profile](https://scholar.google.com/citations?user={{ site.data.scholar.id }})
* Citations: {{ site.data.scholar.citations }}
* h-index: {{ site.data.scholar.h_index }}
* i10-index: {{ site.data.scholar.i10_index }}

-------

## Articles
{% bibliography --query @article --group_by year --group_order descending %}

--------

## Conferences
{% bibliography --query @inproceedings --group_by year --group_order descending %}

--------

