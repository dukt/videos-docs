# VideosVariable

## Methods

### getEmbed(videoUrl, options = [])

Returns the video HTML embed from a video url and options.

    {% craft.videos.embed('http://youtu.be/14pRmb5LAhU', {
			width:300,
			height:200,
			autoplay: true
	}) %}


### getVideoByUrl(videoUrl, enableCache = true, cacheExpiry = 3600)

Return a Video object from a Vimeo or YouTube URL.


	{% set video = craft.videos.url('http://youtu.be/14pRmb5LAhU') %}

	{{video.embed({ width: 300, height: 200, autoplay: true })}}

	<ul>
		<li>title : {{ video.title }}</li>
		<li>description : {{ video.description }}</li>
		<li>url : {{ video.url }}</li>
	</ul>

### url(videoUrl, enableCache = true, cacheExpiry = 3600)

Alias of [getVideoByUrl()](#getVideoByUrl).