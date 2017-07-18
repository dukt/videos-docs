# Configuration

In addition to the settings available in the CP > Settings > Videos screen, the config items below can be placed into a `videos.php` file in your craft/config directory:

## cacheDuration

The amount of time cache should last.

See [http://www.php.net/manual/en/dateinterval.construct.php](http://www.php.net/manual/en/dateinterval.construct.php)

    'cacheDuration' => 'PT15M',

## enableCache

Whether request to APIs should be cached or not

    'enableCache' => true,

## videosPerPage

Number of videos per page in the explorer

    'videosPerPage' => 30