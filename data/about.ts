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
  nameCn: "\u9b4f\u5d9a",
  position: "Product Designer",
  direction: "Product Design / Interaction Design / Hardware Experience",
  bio: "\u805a\u7126\u4ea7\u54c1\u8bbe\u8ba1\u4e0e\u4ea4\u4e92\u4f53\u9a8c\uff0c\u901a\u8fc7\u7814\u7a76\u3001\u63a8\u6f14\u4e0e\u539f\u578b\u9a8c\u8bc1\uff0c\u5c06\u590d\u6742\u95ee\u9898\u8f6c\u5316\u4e3a\u6e05\u6670\u3001\u53ef\u843d\u5730\u7684\u8bbe\u8ba1\u65b9\u6848\u3002\u5173\u6ce8\u8bbe\u8ba1\u8fc7\u7a0b\u4e2d\u6bcf\u4e00\u4e2a\u51b3\u7b56\u7684\u903b\u8f91\u63a8\u6f14\uff0c\u8ffd\u6c42\u5f62\u6001\u3001\u7ed3\u6784\u4e0e\u529f\u80fd\u4e4b\u95f4\u7684\u7cbe\u786e\u5339\u914d\u3002",
  bioEn: "A product designer focused on research-driven design processes, from user insight to prototype validation. Passionate about turning complexity into clarity through systematic thinking and careful execution.",
  education: [
    {
      school: "\u6d59\u6c5f\u79d1\u6280\u5927\u5b66",
      degree: "\u672c\u79d1",
      major: "\u4ea7\u54c1\u8bbe\u8ba1",
      period: "2023 \u2014 2027",
      description: "\u7cfb\u7edf\u5b66\u4e60\u4ea7\u54c1\u8bbe\u8ba1\u7406\u8bba\u4e0e\u65b9\u6cd5\uff0c\u6db5\u76d6\u7528\u6237\u7814\u7a76\u3001\u6982\u5ff5\u8bbe\u8ba1\u3001\u5de5\u7a0b\u5236\u56fe\u3001\u6750\u6599\u5de5\u827a\u4e0e\u4ea7\u54c1\u53ef\u89c6\u5316\u7b49\u9886\u57df\u3002",
    },
  ],
  experience: [
    {
      company: "\u82af\u6bc5\u667a\u80fd\u5bb6\u5177\u516c\u53f8",
      role: "\u5e73\u9762\u8bbe\u8ba1\u5b9e\u4e60\u751f",
      period: "2025.7 \u2014 2025.8",
      description: "\u8d1f\u8d23\u667a\u80fd\u5bb6\u5c45\u4ea7\u54c1\u6d77\u5916\u5e02\u573a\u7535\u5546\u8be6\u60c5\u9875\u3001\u5916\u5305\u88c5\u521d\u7a3f\u8bbe\u8ba1\uff0c\u8f93\u51fa30+\u5957\u5b8c\u6574\u7248\u5f0f\u3002\u534f\u540c\u5bf9\u63a5\u8fd0\u8425\uff0c\u6839\u636e\u7528\u6237\u53cd\u9988\u8fed\u4ee3\u7248\u5f0f\uff0c\u63d0\u5347\u5546\u54c1\u9875\u9762\u8f6c\u5316\u89c6\u89c9\u5438\u5f15\u529b\u3002",
    },
  ],
  awards: [
    {
      name: "\u300e\u4e92\u8054\u7f51+\u300f\u5927\u5b66\u751f\u521b\u65b0\u521b\u4e1a\u5927\u8d5b",
      detail: "\u7701\u7ea7\u94f6\u5956",
    },
    {
      name: "\u5168\u56fd\u5927\u5b66\u751f\u7535\u5b50\u5546\u52a1\u300e\u521b\u65b0\u3001\u521b\u610f\u53ca\u521b\u4e1a\u300f\u6311\u6218\u8d5b",
      detail: "\u7701\u7ea7\u4e09\u7b49\u5956\u3001\u6821\u7ea7\u4e00\u7b49\u5956",
    },
    {
      name: "\u7eff\u8272\u4f4e\u78b3\u82d4\u82d4\u8bbe\u8ba1\u5927\u8d5b",
      detail: "\u4e00\u7b49\u5956",
    },
    {
      name: "\u6e56\u5dde\u5434\u5174\u65b0\u9752\u5e74\u57ce\u5e02\u521b\u610f\u5927\u8d5b",
      detail: "\u9752\u6625\u6d3b\u529b\u5956",
    },
    {
      name: "\u4e91\u548c\u6728\u73a9\u4ea7\u4e1a\u8d5b\u9053",
      detail: "\u4e09\u7b49\u5956",
    },
    {
      name: "\u6c99\u76d8\u6a21\u62df\u7ade\u8d5b",
      detail: "\u884c\u4e1a\u5148\u950b\u5956",
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
