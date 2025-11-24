---
layout: index
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
