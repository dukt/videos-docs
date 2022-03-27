# Updating Instructions

Videos may be updated like any other update to Craft or its plugins.

## Updating from the Control Panel

When an update is available, users with permission to update Craft will see a badge in the control panel next to **Utilities** in the main navigation.

From **Utilities → Updates**, any available Videos updates will be listed along with those for Craft and other plugins. Choose “Videos” to view the release notes before updating.

Always check the release notes for any changes that may impact your site. Any critical changes will be clearly identified at the top.

You can then choose the **Update** button next to Videos to update the plugin, or **Update All** to run all available plugin updates.

## Updating from the Terminal

The [`update` console command](https://craftcms.com/docs/3.x/console-commands.html#update) can be used to update Craft and plugins including Videos.

To see available updates, go to your Craft project in your terminal and run this command:

```bash
php craft update
```

If a Videos update is available, run this command to apply it:

```bash
php craft update videos
```

To update to a specific version of Videos, run this command:

```bash
php craft update videos:2.1.0
```

## Updating from Videos 2.0 to 2.1

The Videos 2.1 introduced some breaking changes. 
If you’re upgrading from 2.0, you’ll need to update your templates to reflect these changes.

### Video model

If there are errors when trying to retrieve the video, they are now attached to the video model, on the URL attribute:

```twig
{% if video.hasErrors('url') %}
    <p>Video has errors:</p>
    <ul>
        {% for error in video.getErrors('url') %}
            <li>{{ error }}</li>
        {% endfor %}
    </ul>
{% endif %}
```

### Video field

Before:

```twig
{% set video = entry.video %}

{% if video %}
    <ul>
        <li>title: {{ video.title }}</li>
        <li>url: {{ video.url }}</li>
        <li>embed: {{ video.embed({ width: 300, height: 200 }) }}</li>
    </ul>
{% endinf %}
```

After:

```twig
{% set video = entry.video %}

{% if video %}
    {% if not video.hasErrors('url') %}
        <ul>
            <li>title: {{ video.title }}</li>
            <li>url: {{ video.url }}</li>
            <li>embed: {{ video.embed({ width: 300, height: 200 }) }}</li>
        </ul>
    {% else %}
        <p>Video has errors:</p>
        <ul>
            {% for error in video.getErrors('url') %}
                <li>{{ error }}</li>
            {% endfor %}
        </ul>
    {% endif %}
{% else %}
    <p>No video.</p>
{% endinf %}
```