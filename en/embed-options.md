# Embed Options

## Common

### width

Width of the player.


### height

Height of the player.


### default_size

This parameter can be helpful for responsive designs. Takes a `true` of `false` boolean.

Set default_size to `false` in order not to hard set width and height parameters, so you can style it with CSS for example.

### autoplay

Set to `true` in order to automatically play the video on page load.

### loop

Set to `true` to loop the video and play it from start when it ends.

### iframeClass

Set the iframe's class

## Vimeo

### color

Define the color of the Vimeo player with an hexadecimal value. For example: `336699`

### portrait

Set to `true` to show, or `false` to hide the video's author portrait.

### title

Set to `true` to show, or `false` to  hide the video title.

### byline

Set to `true` to show, or `false` to  hide the video byline.


## YouTube

### autohide

Takes `true` or `false` values.

The player controls fade out while the video progress bar remains visible. In the HTML5 player, which does not support it, the default behavior is for the player controls to and video progress bar to be visible throughout the video.

### cc\_load\_policy

Takes `true` or `false` values.

Cause closed captions to be shown by default even if the user has turned captions off. The default behavior is based on the user's preference. 

### color

Takes `red` or `white` values.

This parameter specifies the color that will be used in the player's video progress bar to highlight the amount of the video that the viewer has already seen. The default value is `red`.

### controls

Takes `true` or `false` values.

Enable or disable YouTube player controls. When set to "no" the player will appear like a chromeless player. Default is "no".

### disablekb

Takes `true` or `false` values.

Enable or disable player keyboard controls. Default is `false`.

### end

Number of seconds after which the video should stop playing.

### fs

Takes `true` or `false` values.

Enable or disable the fullscreen button. Default is `true`.

### iv\_load\_policy

- `1` — *(default)* Show video annotations . 
- `3` — Do not show video annotations.

### modestbranding

Takes `true` or `false` values.

This parameter lets you use a YouTube player that does not show a YouTube logo. Set the parameter value to yes to prevent the YouTube logo from displaying in the control bar.

Note that a small YouTube text label will still display in the upper-right corner of a paused video when the user's mouse pointer hovers over the player.

### rel

- `true` – *(default)* Load related videos once playback of initial video starts and display in "genie menu" when menu button is pressed.
- `false` – Do not load related videos. Also, disable the player search functionality, regardless of the showsearch parameter value.

### showinfo

- `true` – *(default)* Display information like the video title and rating before the video starts playing.
- `false` – Do not display this information.</span>

### start

The time offset in seconds at which the video should begin playing.

### theme

Takes `dark` or `light` values.

This parameter indicates whether the embedded player will display player controls (like a 'play' button or volume control) within a dark or light control bar.

Default value is `dark`.