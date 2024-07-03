export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FWI - Home",
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
    { label: "Blog", href: "/blog" },
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
