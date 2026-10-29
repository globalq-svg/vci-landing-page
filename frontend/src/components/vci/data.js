const SITE = "https://www.victorycollege.international";

export const LINKS = {
  apply: `${SITE}/vci-director-application`,
  talk: `${SITE}/ask-a-regional-coordinator`,
  start: `${SITE}/how-to-start-a-vci`,
  benefits: `${SITE}/new-benefits`,
  beliefs: `${SITE}/beliefs-cultural-values`,
  courses: `${SITE}/sample-course-titles`,
  schools: `${SITE}/schools-by-nation`,
  coordinator: `${SITE}/find-your-regional-coordinator`,
  directory: `${SITE}/global-partner-network-directory`,
  guest: `${SITE}/guest-teacher`,
  resources: `${SITE}/downloadable-resources`,
  es: `${SITE}/espanol-application`,
  fr: `${SITE}/francais-application`,
  pt: `${SITE}/portugues-application`,
  home: SITE,
};

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

// Stand-in photos: replace with authentic VCI photographs
export const IMG = {
  hero: u("photo-1594750852517-f37738fa2384"),
  graduates: u("photo-1594750852563-5ed8e0421d40"),
  graduate: u("photo-1625061770820-514e6228f4ee"),
  worship: u("photo-1444664361762-afba083a4d77"),
  gathering: u("photo-1509099896299-af46ad97ff57"),
  prayer: u("photo-1686354714602-e45b401b327b"),
  pastor: u("photo-1698323792121-e8a8843e736b"),
  study: u("photo-1663162550932-f67b561e656f"),
  celebration: u("photo-1515657241610-a6b33f0f6c5a"),
};

export const NAV = [
  { id: "vision", label: "Vision" },
  { id: "partnership", label: "Partnership" },
  { id: "benefits", label: "Benefits" },
  { id: "process", label: "Process" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
];
