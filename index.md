---
layout: home
title: MMC Video Tutorials
desc: > # description of the site (multiple lines allowed)
  This is a list of training videos and Google Forms for the MMC staff.
---

<ul class="horizontal-list">
  {% for post in site.data.menu.navbar %}
    <a class="card" href="{{ post.url | relative_url }}" style="margin: 0 1.2em 1.2em 0">
      <li>
        <span class="header">
          {{ post.title }}
          {% if post.highlight %}
            <mark>{{ post.highlight }}</mark>
          {% endif %}
        </span>
      </li>
    </a>
  {% endfor %}
</ul>
