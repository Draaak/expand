# Expand
A react interface for Behance.

This is a standard react app, built from the create-react-app app.

## Get started
`>> npm install`
`>> npm start`

Now the dev server will be running on the default  port: localhost:3000

## Production build
`>> npm run build`

> This will not work currently because of the CORS issues with behance.

## Notes
- CORS is an issue with Behance requests, I had to use https://api.behance.net/ as a dev proxy. This app will not run as a production build.
- Behance accounts can not be registered anymore. I had to scrape one from their website. A bit of a time waister.
  
## Todo
- Show loading twirlers.
- Only fetching the first set of projects for a field. Should fetch the next bunch once you get to the end of the first batch.
- Toggle menu between popular and all.
- CSS force is not that strong... it needs a rework and some more reading for me.
- Use reducers for actions to effect state.
- Use container/component pattern.
- Get rid of fixed positions for elements. It was the quickest to get things up and running, not ideal though.
- Add comments
- Add tests (lol... sounds familiar)