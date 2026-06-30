export interface NavItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Works", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "Works", path: "/projects" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "GitHub", path: "https://github.com/yoaw6959-spec", external: true },
      { label: "Email", path: "mailto:hello@yaowei.design", external: true },
      { label: "Resume", path: "/files/resume.pdf" },
    ],
  },
];

export const SOCIAL_LINKS: NavItem[] = [
  { label: "GitHub", path: "https://github.com/yoaw6959-spec", external: true },
  { label: "Email", path: "mailto:hello@yaowei.design", external: true },
];