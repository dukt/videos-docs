# Installation

## Requirements

- Craft 2.3+
- PHP 5.6+
- [OAuth](https://github.com/dukt/oauth) plugin

Videos plugin relies on OAuth plugin for authenticating to web services. You'll be invited to download and install the plugin in Videos plugin settings.

[OAuth plugin for Craft CMS](https://github.com/dukt/oauth)

## Installation Instructions
1. Download and unzip the Videos plugin.
1. Drop videos plugin folder in craft/plugin.
1. Go to **Admin / Settings / Videos** and follow the installation instructions.
1. Select a website profile to work with.

Once the plugin is installed, the first thing you will want to do is configure a video gateway that you want to use. We currently support YouTube and Vimeo :

- [Connect to YouTube](connect-to-youtube.md)
- [Connect to Vimeo](connect-to-vimeo.md)

## Updating Instructions
1. Download and unzip the Videos plugin
1. Replace `craft/plugins/videos` folder by the one that you have downloaded.
