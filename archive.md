---
layout: page
title: Archive
---

## Blog Posts

<ul class="archive-list">
{% for post in site.posts %}
  <li>
    <span class="archive-date">{{ post.date | date_to_string }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
