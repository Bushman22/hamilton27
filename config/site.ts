export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "27 on Hamilton",
  description: "Tranquil Guesthouse in the Heart of Sandton",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Accommodation",
      href: "/accommodation",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Accommodation",
      href: "/accommodation",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    contact: "/contact"
  },
};
