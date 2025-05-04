export const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Deutchland",
    children: [
      { name: "Politik", href: "/category/deutchland/politik" },
      {
        name: "Kultur und Bildung",
        href: "/category/deutchland/kultur-und-bildung",
      },
      { name: "Sport", href: "/category/deutchland/sport" },
      { name: "Divers", href: "/category/deutchland/divers" },
      {
        name: "Deutschland erleben",
        href: "/category/deutschland/deutschland-erleben",
      },
    ],
  },
  {
    name: "Ausland",
    children: [
      { name: "Politik", href: "/category/ausland/politik" },
      {
        name: "Kultur und Bildung",
        href: "/category/ausland/kultur-und-bildung",
      },
      { name: "Sport", href: "/category/ausland/sport" },
      { name: "Divers", href: "/category/ausland/divers" },
      { name: "Wirtschaft", href: "/category/ausland/wirtschaft" },
    ],
  },
  { name: "International", href: "/category/international" },
  { name: "All Posts", href: "/posts" },
];

export const footerItems = [
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Werbung", href: "/werbung" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Impressum", href: "/impressum" },
];
