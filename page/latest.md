---
permalink: "latest"
subject: "最終更新順アーカイブ"
---

{% assign sortposts = site.posts | sort: 'title' | reverse %}
{% for post in sortposts %}
- <a href="{{post.url}}" class="noteindex{% if post.tags %} {{post.tags[0]}}{% endif %}" id="{{post.permalink}}">{{post.subject}}</a><br>
{% endfor %}
