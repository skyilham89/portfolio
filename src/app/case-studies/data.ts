import type { StaticImageData } from "next/image";
import carsifuCover from "@/imports/carsifu-cover.png";
import starwebCover from "@/imports/starweb-cover.png";
import carsifuHero from "@/imports/carsifu-hero.png";
import starwebHero from "@/imports/starweb-hero.png";
import carsifuGallery1 from "@/imports/carsifu-gallery-1.png";
import carsifuGallery2 from "@/imports/carsifu-gallery-2.png";
import carsifuGallery3 from "@/imports/carsifu-gallery-3.png";
import starwebGallery1 from "@/imports/starweb-gallery-1.png";
import starwebGallery2 from "@/imports/starweb-gallery-2.png";
import starwebGallery3 from "@/imports/starweb-gallery-3.png";

export type Highlight = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  description: string;
  about: string[];
  highlights: Highlight[];
  role: string;
  duration: string;
  tools: string[];
  year: string;
  tags: string[];
  // Card thumbnail shown on the list and home page.
  // Leave as "" to show a placeholder instead.
  image: string | StaticImageData;
  // Optional hero image at the top of the detail page. Leave as "" for a placeholder.
  heroImage: string | StaticImageData;
  // Add image paths here (e.g. "/case-studies/starcarsifu-1.png") to fill the
  // gallery on the detail page. While empty, placeholders are shown so you know
  // where to drop your own screenshots.
  gallery: (string | StaticImageData)[];
  behanceUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "starcarsifu-website-redesign",
    title: "StarCarSifu Website Redesign",
    client: "StarCarSifu",
    description:
      "A full redesign of an automotive classifieds platform for buying and selling new and used vehicles, with a streamlined browsing and listing experience.",
    about: [
      "Star Carsifu is a classified website platform that facilitates the sale of both new and used vehicles. Additionally, it provides access to the latest automotive news, including reviews of the most recent cars and motorcycles.",
      "The redesign focused on making car discovery effortless: a clearer path from landing on the site to finding the right vehicle, with the information buyers care about surfaced earlier in the journey.",
    ],
    highlights: [
      {
        title: "Effortless car discovery",
        description:
          "A clearer search and filtering flow so buyers can quickly narrow down by make, model, body type and price range.",
      },
      {
        title: "Scannable listings",
        description:
          "Listing cards surface key specs, condition and pricing up front, making it easy to compare vehicles at a glance.",
      },
      {
        title: "News & reviews hub",
        description:
          "Dedicated space for the latest automotive news and reviews of recent cars and motorcycles to keep users engaged.",
      },
      {
        title: "Buyer decision tools",
        description:
          "Built-in loan calculator and extended-warranty information to support buyers through their decision.",
      },
    ],
    role: "UI/UX Designer",
    duration: "8 Weeks",
    tools: ["Adobe XD", "Figma", "FigJam", "Google Form"],
    year: "2024",
    tags: ["Product Design", "UI/UX", "Web Design"],
    image: carsifuCover,
    heroImage: carsifuCover,
    gallery: [carsifuGallery1, carsifuGallery2, carsifuGallery3],
    behanceUrl: "https://www.behance.net/gallery/212185049/Website-Redesign",
  },
  {
    slug: "star-media-group-web-redesign",
    title: "Star Media Group Web Redesign",
    client: "Star Media Group Berhad (SMG)",
    description:
      "A corporate website redesign for Malaysia's leading integrated media group, unifying its portfolio of brands and surfacing careers, programmes, and investor relations.",
    about: [
      "Star Media Group Berhad (SMG), Malaysia's leading integrated media group, is redesigning its website to better reflect the breadth of the organisation and the way it connects with audiences across multiple touchpoints.",
      "The goal was a single, cohesive home for a multi-brand media group — one that communicates that for Star Media Group, integrated media is more than just communications.",
    ],
    highlights: [
      {
        title: "Unified brand portfolio",
        description:
          "Brings SMG's brands together in one place — The Star, mStar, StarCarSifu, Suria, 988, Kuali and SoBA.",
      },
      {
        title: "Careers & talent",
        description:
          "A clear careers experience with open positions, internship details and application forms.",
      },
      {
        title: "StarTrack programme",
        description:
          "Showcases the StarTrack graduate development programme to attract and inform young talent.",
      },
      {
        title: "Investor relations",
        description:
          "Surfaces investor information including stock price and corporate updates in an accessible layout.",
      },
    ],
    role: "UI/UX Designer",
    duration: "4 Weeks",
    tools: ["Figma", "FigJam", "HTML", "CSS", "Bootstrap"],
    year: "2024",
    tags: ["UI/UX", "Web Design"],
    image: starwebCover,
    heroImage: starwebCover,
    gallery: [starwebGallery1, starwebGallery2, starwebGallery3],
    behanceUrl: "https://www.behance.net/gallery/213353481/Web-Redesign",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
