# Connect to YouTube

## 1. Configure Google OAuth

Go to **Admin / OAuth / Google Settings** and copy **Web Origin** and **Redirect URL**.

![Google Settings](assets/connect-youtube-1.png)

## 2. Create a Google Console Project

Go to the [Google Console](https://code.google.com/apis/console/) and create a new project.

![Google Console Create Project](assets/connect-youtube-2.png)

## 3. Enable YouTube APIs

Under **My Project / APIs & Auth / APIs**, enable the following services:

-  YouTube Analytics API
-  YouTube Data API v3

![Enable YouTube API](assets/connect-youtube-3.png)

## 4. Create a client ID

Go to **My Project / Credentials** and create a new client ID.

Here you can paste the **Web Origin** and **Redirect URL** that we copied earlier.

![Create a client](assets/connect-youtube-4.png)

Once created, copy the **client ID** and **secret**, we're going to need them later.

![Client credentials](assets/connect-youtube-5.png)


## 5. Product Name

Go to **My Project / Consent Screen** and make sure that the Product name field is **not** empty.

![Set the product name](assets/connect-youtube-6.png)

## 6. Set Client ID & Secret

Paste the **client ID** and **secret** from the Google Console.

![Google Settings with client ID & secret](assets/connect-youtube-7.png)

## 7. Connect to YouTube

Go to **Admin / Plugins / Settings / Videos** and connect to YouTube.

![Connect to YouTube](assets/connect-youtube-8.png)


## Localhost Usage

Google is very restrictive on domains that you can use when requesting their API. The request has to come from public domains or localhost :

- localhost
- site.com
- sub.site.com

Unfortunately, it will **not** work for local domains like these :

- site.local
- site.dev

You can trick Google by using a real domain for your dev virtual host, like this :

- local.site.com
- site.dk (or any alternative domain)

Just keep in mind that any public domain that you set up to point to your localhost won't be accessible anymore from your computer.
