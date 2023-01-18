# WhatsApp Proxy

[![Netlify Status](https://api.netlify.com/api/v1/badges/d937e0a7-e93b-40c7-aa34-72b438aa9340/deploy-status)](https://app.netlify.com/sites/whatsapp-proxy/deploys)

WhatsApp Proxy is a web-app that enables users to connect to WhatsApp via a proxy server. This is useful for users who are unable to connect to WhatsApp Web due to their network restrictions.

## Bypass Firewall in China

To bypass the Firewall in China, the WhatsApp Proxy hoster has to change the `SSL_SUBJECT` to a random string.

See the image below as example:

![Screenshot_20230109-201948](https://user-images.githubusercontent.com/33700526/211390177-7414e5da-1e8b-4ee9-b9bb-9ba2f2aa07cb.png)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# Or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
