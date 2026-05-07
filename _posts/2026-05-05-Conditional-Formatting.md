---
layout: post
title: 5. Conditional Formatting / ប្តូរឈ្មោះ
desc: Add conditional formatting to Google Sheets
driveId: 1NXg_afF3YefZuBXGYKU7DA0mHTexKuMO
tags: [reg, google-docs]
order: 5
---

### How to rename Goole file and Google Sheet:

ប្រើលេខកូដនេះសម្រាប់ពិនិត្យអ្នកជំងឺស្ទួន:
Use this code for checking duplicate patients:
```
=COUNTIF(C:C, C7) > 1
```

ប្រើលេខកូដនេះសម្រាប់ការគិតថ្លៃខ្ពស់ ឬ IPD ឬ UC Dr.:
Use this code for highliting Charge or IPD or UC Dr.:
```
=OR($B7=$D$1,$B7=$D$2,$B7=$D$3,$B7=$D$4)
```

ប្រើលេខកូដនេះសម្រាប់ការបន្លិច dr.:
Use this code for highliting off dr.:
```
=OR($B7=$G$1, $B7=$G$2, $B7=$G$3, $B7=$G$4)
```

{% include googleDrivePlayer.html id=page.driveId %}
