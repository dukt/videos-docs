# Video Field

![Image](assets/craft-videos-1.0-field.png)

Craft Videos field type lets you add videos to your entries. Retrieving video informations is then pretty easy : a video variable is provided which let's you retrieve all the informations related to your video.

	{% set video = entry.video %}

	<ul>
		<li>title: {{ video.title }}</li>
		<li>url: {{ video.url }}</li>
		<li>embed: {{ video.embed({ width: 300, height: 200 }) }}</li>
	</ul>
