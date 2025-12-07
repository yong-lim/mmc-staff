<!--The calendar code below is taken from this website. Please start there...
https://blog.jakelee.co.uk/jekyll-calendar-custom-events/#displaying-a-month-->
<div class="calendar-container">
  {%- if page.year %}
    {% assign current_year = page.year %}
  {%- else %}
    {% assign current_year = 'now' | date: '%Y' %}
  {%- endif %}

  {% for month in (1..12) %}
    <!-- Month prep -->
    {% assign month_str = month | prepend: '0' | slice: -2, 2 %}
    {% assign month_start_date = current_year | append: '-' | append: month_str | append: '-01' %}
    {% assign month_start_timestamp = month_start_date | date: "%s" %}
    {% assign first_day_found = false %}

    <div class="calendar-month">
      <h2>{{ month_start_date | date: "%B" }}</h2>
      <div class="calendar-grid">
          <b>Mo</b><b>Tu</b><b>We</b><b>Th</b><b>Fr</b><b>Sa</b><b>Su</b>
          <!-- First day finder, for correct formatting -->
          <!-- Adapted from: https://mikhail-yudin.ru/blog/frontend/jekyll-calendar-css-grid -->
          {%- for i in (-7..30) %}
            {%- assign day_timestamp = 86400 | times: i | plus: month_start_timestamp %}
            {%- assign day_of_week = day_timestamp | date: '%u' %}
            {%- assign month_number = day_timestamp | date: '%m' %}
            {%- assign formatted_day = day_timestamp | date: "%Y-%m-%d" %}
            {%- unless first_day_found %}
              {%- if day_of_week == '1' %}
                {% assign first_day_found = true %}
              {% else %}
                {%- continue %}
              {% endif %}
            {%- endunless %}

            {%- if month_str == month_number %}
              {%- assign events = "" %}
                {%- for event in page.dates %}
                  <!--{% assign event_date = event.date | date: "%Y-%m-%d" %}-->
                  {%- if event.date == formatted_day %}
                    {%- assign event_year = event.date | date: "%Y" %}
                    {%- assign years_ago = current_year | minus: event_year %}
                    {%- if years_ago == 0 %}
                      {%- assign years_ago_text = "<b>This year:</b> " %}
                    {%- else %}
                      {%- assign years_ago_text = "<b>" | append: years_ago | append: " years ago:</b> " %}
                    {%- endif %}
                    <!--{%- assign events = events | append: years_ago_text | append: event.sheetID | append: " <i>(in <a href='" | append: post.url | append: "'>" | append: post.sheetID | append: "</a>)</i><br>" %}-->
                    {%- assign e_month = "m" | append: month_str %}
                    {%- assign events = page.gdrive | append: page.[e_month] | append: event.sheetID %}
                  {%- endif %}
                {%- endfor %}

              {% if events != "" %}
                <a href="{{ events }}" target="_blank" rel="noopener noreferrer">
                  <span class="calendar-event" data-events="{{ events }}">
                    {{ day_timestamp | date: '%e' }}
                  </span>
                </a>
              {% else %}
                <span>{{ day_timestamp | date: '%e' }}</span>
              {% endif %}
            {%- else %}<span></span>{% endif %}
          {%- endfor %}

        </div>
      </div>
  {% endfor %}

</div>
