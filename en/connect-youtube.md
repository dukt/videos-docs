# Connect to YouTube

## 1. Configure OAuth

Go to **CP / Settings / Videos / YouTube / OAuth** and copy the **Web Origin** and **Redirect URL** value.

## 2. Create a Google Console Project

Go to the [Google Console](https://code.google.com/apis/console/) and create a new project.

## 3. Enable YouTube APIs

Under **Google Console / My Project / APIs & services / Library**, enable the following services:

-  YouTube Analytics API
-  YouTube Data API v3

## 4. Configure consent screen

Before going further you need to configure the consent screen.

Go to **Google Console / My Project / Credentials / Consent Screen** and make sure to fill the Product name field.

## 5. Create an OAuth client ID

Go to **Google Console / My Project / Credentials** and create credentials for a new “OAuth client ID” with the following settings:

- **Application type:** Web application
- **Authorized JavaScript origins:** Web origin value from step #1
- **Authorized redirect URIs:** Redirect URL value from step #1

## 6. Set Client ID & Secret

The Google Console will provide you with a **client ID** and **client secret** for your application.

Copy the values, paste them in **CP / Settings / Videos / YouTube / OAuth**, and save.

## 7. Connect to YouTube

Go to **CP / Settings / Videos** and connect to YouTube.

🎉
