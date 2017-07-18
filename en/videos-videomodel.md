# Videos_VideoModel

## Properties

### id

The ID of the video.

### url   

The URL of the video

### gatewayHandle

The video gateway handle. For example: "youtube"

### gatewayName

The video gateway name. For example: "YouTube"
### date

A [DateTime](http://buildwithcraft.com/docs/templating/datetime) object of the date the asset was last updated.

### plays

The number of times the video has been played.

### durationSeconds

Duration of the video in seconds

### authorName

Video's author name.

### authorUrl

Video's author URL.

### authorUsername

Video's author username.

### title

Video's title.

### description

Video's description.

### private

Whether the video is private or not.

### width
The width of the video.

### height
The height of the video.

### raw
Raw response from the API.

## Methods

### getDuration()

Duration of the video with HH:MM:SS format.

### getEmbed($opts = array())

Returns the embed HTML code.

### getEmbedUrl($opts = array())

Returns the embed URL.

### getThumbnail($size = 300)

Return the URL of the resized thumbnail.