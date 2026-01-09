---
layout: post
title: Web Files
desc: This is a list of files for the public.
gdrive:  https://drive.google.com/drive/folders/
folders:
  - name: MMCC Residency Program
    folder-id: 1ixLh0EvYJhHJRAuxKriFn0VPl1yVKDrS
  - name: MMCC Services
    folder-id: 1AWI5RmStzN9om4H963HNCTRak8QZmxAE
  - name: All Files n Folders
    folder-id: 1nOv_odTCWHfPfncYWNluthS5ooSyvKkv
---
<ul class="horizontal-list">
  {% for f in page.folders %}
    <a class="card" href="{{ page.gdrive }}{{ f.folder-id }}" style="margin: 0 1.2em 1.2em 0">
      <li>
        <span class="header">
          {{ f.name }}
        </span>
      </li>
    </a>
  {% endfor %}
</ul>
