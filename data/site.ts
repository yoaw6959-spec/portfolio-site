export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  taglineEn: string;
  bio: string;
  bioEn: string;
  url: string;
  email: string;
  phone: string;
  github: string;
  position: string;
  direction: string;
  nameCn?: string;
}

export const siteConfig: SiteConfig = {
  name: "YAO WEI",
  nameCn: "魏垚",
  title: "YAO WEI — Product Designer",
  description:
    "Product Designer focusing on product design and interaction experience, turning complex problems into clear, deliverable design solutions.",
  tagline: "赋形态以思考，\n予设计以实效。",
  taglineEn: "Shaping products through research, reasoning and execution.",
  bio: "聚焦产品设计与交互体验，通过研究、推演与原型验证，将复杂问题转化为清晰、可落地的设计方案。",
  bioEn: "A product designer focused on research-driven design processes, from user insight to prototype validation. Passionate about turning complexity into clarity through systematic thinking and careful execution.",
  url: "https://yaowei.design",
  email: "hello@yaowei.design",
  phone: "+86 13588136162",
  github: "https://github.com/yoaw6959-spec",
  position: "Product Designer",
  direction: "Product Design / Interaction Design / Hardware Experience",
};
