# GirlsCARE Website Prototype

Static HTML, CSS, and JavaScript are served from `public/`.

## Local preview

From the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4173/`. The dedicated Mentorship page is at
`http://127.0.0.1:4173/programmes/mentorship.html`; About is at
`http://127.0.0.1:4173/about.html`.

## About and organisational identity

`public/about.html` contains the guide-backed identity, six grounding principles,
five expanded values, eight approach principles, team introduction, and five
current/emerging priorities. Its long-form layout is scoped in `public/about.css`
and reuses the site's existing navigation, brand styles, and team components.

All header/footer About links lead to the dedicated page. The homepage keeps its
About summary and the existing `#about`, `#coordinators`, and `#core-team` anchors.
Existing coordinator biographies remain on the homepage; the About page uses
the current team names and portraits without adding unconfirmed career details.

The founding year remains unpublished on About until the guide's 2021 founding
date and its separate "Since 2020" reach statement are reconciled. Expanded
biographies and preferred published names still need the team's confirmation.
The homepage introduction, metadata, and site-wide footer use the guide's
feminist-led climate justice identity.

## Programme pages

`public/programmes/mentorship.html` uses the existing site header, navigation
script, footer, and brand styles. Additional long-form programme styles live in
`public/programmes/programme.css`; assets use root-relative paths so direct
navigation to the nested page works.

Mentorship entry points in every page's programme menu, the homepage previews,
the Impact summary, and the Knowledge Hub lead to the dedicated page. The
existing `impact.html#mentorship` summary remains available for older links.

Programme copy follows the GirlsCARE Website Content Guide. Cohort figures are
historical snapshots, not cumulative totals or current application criteria.
Related publications have canonical entries in the Knowledge Hub. New quotes,
photos, eligibility rules, and aggregate figures require the appropriate
content and usage approval before publication.
