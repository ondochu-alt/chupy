import type { TranslationDict } from "./types";

export const en: TranslationDict = {
  nav: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    role: "MARKETER & STRATEGIST",
    tagline1: "Building strategies from data,",
    tagline2: "proving results through compelling visuals—",
    taglineName: "Chu Yeeun",
    taglineSuffix: ", Brand Strategy Marketer.",
    cta: "☕ Coffee Chat",
    speechBubblePre: "I built this site with",
    speechBubbleTool: "Claude Code",
    speechBubblePost: "! 🩷",
    profileAlt: "Chu Yeeun profile photo",
  },
  stats: [
    {
      prefix: "#", end: 1, suffix: "",
      label: "Olive Young Body Care Ranking",
      sub: "#1 in Olive Young Body Care\n(2023, Dear Doer)",
    },
    {
      prefix: "", end: 2000, suffix: "%↑",
      label: "International Review Exposure",
      sub: "Based on cumulative views",
    },
    {
      prefix: "", end: 200, suffix: "K",
      label: "Naver Live Peak Viewers",
      sub: "Broadcast cumulative views",
    },
  ],
  philosophy: {
    title: "Work Philosophy",
    item1Title: "Data-Driven Strategy",
    item1Body:
      "I don't rely on intuition alone. I build hypotheses through data and validate results with numbers. Achievements like a 2,000% increase in review exposure, #1 in the body care category, and 5× sales growth are the direct result of this approach.",
    item2Title: "Creative Vision",
    item2Body:
      "Drawing on experience producing video content with global brands like YSL, Giorgio Armani Beauty, and Dior, I plan and produce content that aligns with each brand's tone and aesthetic. I handle the entire video content pipeline—from concept to editing and final production.",
  },
  projects: {
    title: "Selected Works",
    subtitle: "A curated selection of projects that directly drove brand results.",
    snsTitle: "Social Media Content Planning & Production",
    snsSub: "From short-form concept to final cut — reels I made myself",
    campaignTitle: "Marketing Campaigns & Event Planning",
    campaignSub: "Influencer marketing, trade show planning, live commerce, and more",
    campaigns: [
      { alt: "Olive Young Body Care Influencer Marketing", title: "Olive Young Body Care Influencer Marketing" },
      { alt: "Eleven Huesdays Beauty Expo Planning", title: "Eleven Huesdays Beauty Expo" },
      { alt: "Global Influencer Marketing", title: "Global Influencer Marketing" },
      { alt: "Naver Shopping Live Planning", title: "Naver Shopping Live" },
      { alt: "Dear Doer Supporters Program (×3)", title: "Dear Doer Supporters Program" },
      { alt: "Domestic Influencer Marketing", title: "Domestic Influencer Marketing" },
    ],
  },
  career: {
    title: "Professional Experience",
    items: [
      {
        role: "Brand Marketer",
        company: "TMC Korea",
        brand: "Eleven Huesdays",
        description:
          "Brand concept development & integrated online/offline marketing: Defined brand tone and mood to guide trade show planning and new product launch strategy. Led influencer seeding and oversaw short-form performance content production.",
      },
      {
        role: "Brand Marketer",
        company: "Icon BX",
        brand: "Dear Doer",
        description:
          "Media commerce-driven revenue maximization: Led beauty influencer & celebrity YouTube product placements and Naver Shopping Live campaigns. Produced channel-optimized ad content to simultaneously boost brand awareness and drive sales conversion.",
      },
      {
        role: "Content Marketer",
        company: "MCBrains",
        brand: null,
        description:
          "Multi-brand performance marketing: Planned and produced social media ad content across a diversified brand portfolio in beauty and health supplements, directly driving revenue through efficiency-focused video marketing.",
      },
      {
        role: "SNS Manager & Video Editor",
        company: "Insight Company",
        brand: null,
        description:
          "New media content planning and video editing: Produced high-quality video content ranging from news and informational formats to commerce-optimized videos, reflecting social media trends and developing brand films.",
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { category: "AI Tools", skills: ["Claude Code", "Gemini", "Git"] },
      { category: "Creative Production", skills: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"] },
      { category: "Product Strategy", skills: ["Figma", "Notion", "Brand Identity Visualization"] },
      { category: "Business Efficiency", skills: ["MS Office", "Data Analysis", "Proposal Writing"] },
    ],
    brandTitle: "Brand Experience",
    brands: ["Dear Doer", "Eleven Huesdays", "L'ESSENTIAL", "INACO", "Nubelle"],
    certTitle: "Certifications",
    certAcquired: "Passed",
  },
  footer: {
    heading: "Let's create something great together.",
    sub: "Open to brand strategy projects and collaborations — feel free to reach out anytime.",
    cta: "Start a Coffee Chat",
    copyright: "© 2026 Chu Yeeun Portfolio.",
  },
};
