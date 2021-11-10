# VideoThumbnail

Class `\dukt\videos\models\VideoThumbnail`

## Properties

### smallestSourceUrl
`string|null` The video's smallest image source url.

### largestSourceUrl
`string|null` The video's largest image source url.

## Methods

### getUrl
Get the thumbnail's url by size.  
```php
getUrl(int $size = 300): string
```