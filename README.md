# Ali Irshayyid — Academic Homepage

Personal academic website built with [Jekyll](https://jekyllrb.com/) on the
[AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template
(a Minimal Mistakes derivative), served via GitHub Pages at
**https://aliirshayyid.github.io**.

## Editing the content

Almost everything you'll want to change lives in two files:

- **`_pages/about.md`** — the whole homepage: intro, research interests, news,
  publications, honors, education, and experience. Edit the Markdown directly.
- **`_config.yml`** — your name, bio, location, and the contact/social links
  shown in the left sidebar (`author:` section).

The top navigation bar is defined in **`_data/navigation.yml`**.

## Things you may want to personalize

| What | Where |
| --- | --- |
| Profile photo | Replace `images/profile.svg` with your headshot (e.g. `images/profile.jpg`) and update `author.avatar` in `_config.yml`. |
| Publication figures | The three featured papers use placeholder figures `images/pub_*.svg`. Swap in real figures and update the `<img src=...>` paths in `_pages/about.md`. |
| Paper links | The featured papers currently link to Google Scholar searches — replace with direct DOI/PDF/arXiv links. |
| Social links | Fill in `googlescholar`, `linkedin`, `orcid`, `researchgate`, etc. in `_config.yml`. Blank fields are simply hidden. |
| Citation badge | See `.github/workflows/google_scholar_crawler.yaml` to enable live Google Scholar citation counts. |

## Running locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Color scheme

The visual style (navy `#012F63` + coral `#FE667B`, floating cards, gradient
text) is defined in `assets/css/accent-enhancements.css`.
