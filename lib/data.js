export const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Deutchland",
    children: [
      { name: "Politik", href: "/deutchland/politik" },
      { name: "Kultur und Bildung", href: "/deutchland/kultur-und-bildung" },
      { name: "Sport", href: "/deutchland/sport" },
      { name: "Divers", href: "/deutchland/divers" },
      { name: "Deutschland erleben!", href: "/deutchland/deutschland-erleben" },
    ],
  },
  {
    name: "Ausland",
    children: [
      { name: "Politik", href: "/ausland/politik" },
      { name: "Kultur und Bildung", href: "/ausland/kultur-und-bildung" },
      { name: "Sport", href: "/ausland/sport" },
      { name: "Divers", href: "/ausland/divers" },
      { name: "Wirtschaft", href: "/ausland/wirtschaft" },
    ],
  },
  { name: "International", href: "/international" },
  { name: "Deine Stimme", href: "/deine-stimme" },
];

export const footerItems = [
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Werbung", href: "/werbung" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Impressum", href: "/impressum" },
];
