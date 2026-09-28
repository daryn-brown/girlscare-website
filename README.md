# GirlsCARE Website Prototype

Static HTML, CSS, and JavaScript are served from `public/`.

## Local preview

From the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4173/`. The dedicated Mentorship page is at
`http://127.0.0.1:4173/programmes/mentorship.html`.

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
