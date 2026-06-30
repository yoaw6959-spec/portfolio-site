export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Award {
  name: string;
  detail: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface AboutData {
  name: string;
  nameCn: string;
  position: string;
  signature: string;
  direction: string;
  bio: string;
  bioEn: string;
  education: Education[];
  experience: Experience[];
  awards: Award[];
  skills: Skill[];
}

export const aboutData: AboutData = {
  name: "YAO WEI",
  nameCn: "魏垚",
  position: "Product Designer",
  signature: "",
  direction: "Product Design / Interaction Design / Hardware Experience",
  bio: "聚焦产品设计与交互体验，通过研究、推演与原型验证，将复杂问题转化为清晰、可落地的设计方案。关注设计过程中每一个决策的逻辑推演，追求形态、结构与功能之间的精确匹配。",
  bioEn: "A product designer focused on research-driven design processes, from user insight to prototype validation. Passionate about turning complexity into clarity through systematic thinking and careful execution.",
  education: [
    {
      school: "浙江科技大学",
      degree: "本科",
      major: "产品设计",
      period: "2023 — 2027",
      description: "系统学习产品设计理论与方法，涵盖用户研究、概念设计、工程制图、材料工艺与产品可视化等领域。",
    },
  ],
  experience: [
    {
      company: "芯毅智能家具公司",
      role: "平面设计实习生",
      period: "2025.7 — 2025.8",
      description: "负责智能家居产品海外市场电商详情页、外包装初稿设计，输出30+套完整版式。协同对接运营，根据用户反馈迭代版式，提升商品页面转化视觉吸引力。",
    },
  ],
  awards: [
    {
      name: "『互联网+』大学生创新创业大赛",
      detail: "省级银奖",
    },
    {
      name: "全国大学生电子商务『创新、创意及创业』挑战赛",
      detail: "省级三等奖、校级一等奖",
    },
    {
      name: "绿色低碳苔苔设计大赛",
      detail: "一等奖",
    },
    {
      name: "湖州吴兴新青年城市创意大赛",
      detail: "青春活力奖",
    },
    {
      name: "云和木玩产业赛道",
      detail: "三等奖",
    },
    {
      name: "沙盘模拟竞赛",
      detail: "行业先锋奖",
    },
  ],
  skills: [
    {
      category: "Design & Research",
      items: ["User Research", "Concept Design", "Interaction Design", "Ergonomic Analysis", "Prototyping", "Product System Design", "Design Psychology"],
    },
    {
      category: "Tools",
      items: ["Rhino 7", "Blender", "Keyshot", "Figma", "Photoshop", "Illustrator", "CapCut", "Arduino", "Betaflight"],
    },
    {
      category: "Visualization",
      items: ["Product Rendering", "Layout Design", "Video Editing", "Exploded View", "Engineering Drawing", "AIGC"],
    },
  ],
};
