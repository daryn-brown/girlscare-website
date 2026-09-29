# GirlsCARE Website Prototype

Static HTML, CSS, and JavaScript are served from `public/`.

## Local preview

From the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4173/`. The dedicated Mentorship page is at
`http://127.0.0.1:4173/programmes/mentorship.html`; About is at
`http://127.0.0.1:4173/about.html`. Envisioning Resilience is at
`http://127.0.0.1:4173/programmes/envisioning-resilience.html`, and Lend a Girl a
Hand is at `http://127.0.0.1:4173/programmes/lend-a-girl-a-hand.html`.

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

The pages in `public/programmes/` use the existing site header, navigation
script, footer, and brand styles. Shared long-form programme styles live in
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

Envisioning Resilience entry points lead to its dedicated programme page; the
existing `impact.html#envisioning-resilience` summary remains available. Its
audience and outcomes are specific to the Jamaica photography/storytelling work,
not inherited from Mentorship's cohorts or age range. Existing programme photos
and their established activity captions are reused; no partner-owned photo
essays, new portraits, or testimonials have been copied into the site.

The text-only Jamila Falak account follows the supplied content guide and was
cleared for website publication during the feature review on 29 September 2026.
New quotes or portraits still require appropriate permission; do not present
later achievements as caused solely by the programme.
Programme recruitment dates, current availability, and unconfirmed totals are
not inferred from historical coverage.

The Knowledge Hub links to the NAP Global Network's Jamaica account,
Lensational's photo-story collection and programme overview, Climate Home News'
2026 Jamaica feature, and IISD's account of the earlier Ghana/Kenya pilots.
The latter is labelled as background on the wider initiative, not evidence of
GirlsCARE's Jamaica results. Resource links return to the relevant programme;
original photographs and articles remain with their publishers.

Lend a Girl a Hand is the broader programme; hurricane relief is one part of it,
as confirmed during the feature review. The programme menu still has four
entries. All former relief entry links now lead to
`public/programmes/lend-a-girl-a-hand.html`, while the existing
`impact.html#hurricane-relief` summary remains available for older links.
The new programme page also supports a direct `#hurricane-relief` section link.

The Westmoreland Hurricane Relief Project and Back to School Support Initiative
use the programme attribution and 2026 captions already present in the site.
Wider farming, livelihood, and parish/community context is explicitly identified
as organisation-wide GirlsCARE work, not an exclusive Lend a Girl a Hand reach
claim. No beneficiary totals, specific aid packages, recruitment windows,
clinical services, or new funding amounts are inferred. Support actions use the
existing enquiry routes and retain the distinction between donation interest
and taking payment.
