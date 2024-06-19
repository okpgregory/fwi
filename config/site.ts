export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "On a mission to Heal Wounds",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Referral",
      href: "/referral",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};
