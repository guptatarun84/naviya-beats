# Naviya Beats — Dance Your Heart Out

A one-page landing site for Naviya Beats. Static HTML/CSS/JS — no build step
needed to deploy, no dependencies.

## Edit the content

**All copy, class names, social links, contact details, images and colours live in
one file: `src/content.js`.**

1. Edit `src/content.js`
2. Regenerate the page:
   ```bash
   node build.cjs
   ```
3. Commit and push.

`index.html` is the generated output — it is what the browser loads. You can also
edit it directly for a quick one-off tweak, but the next `node build.cjs` will
overwrite those changes.

## Structure

```
index.html          generated page (deploy this)
build.cjs           regenerates index.html from src/
src/content.js      <-- all the content, edit here
src/template.cjs    HTML/CSS/JS template
img/                placeholder photos (swap for your own)
```

## Swap the placeholder images

Drop your own photos into `img/` (or anywhere) and point the `image` / `src` fields
in `src/content.js` at them, then rebuild. Recommended: ~1600px wide, JPEG, under
300KB each. To use a video hero instead of a still, set `hero.video` in
`src/content.js` to e.g. `"media/hero.mp4"`.

## Adding videos

In `src/content.js`, find `videos`. Each item takes either a YouTube link or a local file:

```js
{
  title: "Kathak basics — first tatkar",
  note:  "Beginner batch, week 2",
  youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",  // or leave "" and use `file`
  file:    "media/clip.mp4",                                // a file committed to the repo
  thumb:   "img/ghungroo.jpg",                              // optional; YouTube thumbs are automatic
}
```

The section appears between **Kathak** and **Testimonials** and is in the top nav.
Set `videos.enabled: false` to hide it until you have clips ready.
For a local file, drop the `.mp4` in a `media/` folder at the repo root and commit it
(keep clips under ~10MB, or host them on YouTube and use the link instead).

## Adding awards

Find `awards` in `src/content.js` and add one line per award:

```js
{ year: "2025", title: "Best Choreography", org: "City Dance Festival" },
```

`awards.enabled: false` hides the section. Any number of rows works — the layout grows with the list.

## Forms

The contact form and the email signup work in "preview" mode: they validate the
email and show a thank-you message without sending anything. To make them live,
set `contact.form.action` and `contact.signup.action` in `src/content.js` to your
form endpoint — e.g. a Formspree form URL (`https://formspree.io/f/xxxxxxx`) — and
rebuild.

## Deploy with GitHub Pages

This repo is ready for Pages: the site is at the repo root and `CNAME` holds the
custom domain.

1. In the repo: **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)` → **Save**
4. Wait a minute; the site appears at `https://guptatarun84.github.io/naviya-beats/`

### Custom domain (naviyabeats.com)

The `CNAME` file already contains `naviyabeats.com`. At your DNS provider add:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | `185.199.108.153`         |
| A     | @    | `185.199.109.153`         |
| A     | @    | `185.199.110.153`         |
| A     | @    | `185.199.111.153`         |
| CNAME | www  | `guptatarun84.github.io`  |

Then in **Settings → Pages → Custom domain**, enter `naviyabeats.com` and tick
**Enforce HTTPS** once the certificate is issued (usually within an hour).

> Only do this once you are ready to move off the current host — changing these DNS
> records takes the existing site offline.

## Alternatives to GitHub Pages

Netlify, Vercel and Cloudflare Pages all deploy this repo for free: connect the
repository, leave the build command empty, set the publish directory to `/`, then
add `naviyabeats.com` as a custom domain in their dashboard.
