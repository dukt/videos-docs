# Video Field

Craft Videos field type lets you add videos to your entries. Retrieving video informations is then pretty easy : a video variable is provided which let's you retrieve all the informations related to your video.

<img src="./images/video-field@2x.png" title="Video Field" width="740" />

## Templating

```twig
{% set video = entry.video %}

<ul>
    <li>title: {{ video.title }}</li>
    <li>url: {{ video.url }}</li>
    <li>embed: {{ video.embed({ width: 300, height: 200 }) }}</li>
</ul>
```