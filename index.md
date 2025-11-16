---
layout: index
---

<ul class="horizontal-list">
  {% for post in site.data.menu.navbar %}
    <li class="card">
      <a href="{{ post.url | relative_url }}" style="display: block;">
        <span class="header">
          {{ post.title }}
          {% if post.highlight %}
            <mark>{{ post.highlight }}</mark>
          {% endif %}
        </span>
      </a>
    </li>
  {% endfor %}
</ul>
