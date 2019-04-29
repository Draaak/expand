# Expand
A react interface for Behance. It is a standard react app, built from create-react-app using functional components and hooks.

## Get started
```bash
$ npm install
$ npm start
```
The dev server should now be running on **localhost:3000**
>Override the default port with a --port flag.
## Production build
```bash
$ npm run build
```
> This will not work currently because of the CORS issues with behance.
## Notes
- CORS is an issue with Behance requests, I had to use https://api.behance.net/ as a dev proxy. Subsequently it can not run as a production build.
- Behance accounts can not be registered anymore. I had to scrape one from their website. A bit of a time waister.
## Todo
- Show loading twirlers.
- Only fetching the first set of projects for a field. Should fetch the next bunch once you get to the end of the first batch.
- Toggle menu between popular and all, currently only showing all.
- The css needs a redo, it is hacky.
- Use reducers for actions to effect state.
- Use container/component pattern.
- Get rid of fixed positions for elements. It was the quickest to get things up and running, not ideal though.
- Add comments.
- Add tests (lol... sounds familiar).