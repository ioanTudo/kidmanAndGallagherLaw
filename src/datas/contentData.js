import heroBanner1 from "../images/bannersHero/craigandbarb1.jpg";
import heroBanner2 from "../images/bannersHero/about-banner.jpg";

export const NavData = [
  {
    id: 0,
    content: "home",
    path: "/",
  },
  {
    id: 1,
    content: "about",
    path: "/about",
  },
  {
    id: 2,
    content: "attorneys",
    path: "/attorneys",
  },
  {
    id: 3,
    content: "practice areas",
    path: "/practice-areas",
  },
  {
    id: 4,
    content: "testimonials",
    path: "/testimonials",
  },
  {
    id: 5,
    content: "community activity",
    path: "/community-activity",
  },

  {
    id: 6,
    content: "contact",
    path: "/contact",
  },
];

export const HeroImgData = [
  {
    id: 0,
    imgSrc: heroBanner1,
    header: "reno's top law firm for personal injuries ",
    subHeader: "pay nothing unless you win, let us fight for you",
    beforeDesign: true,
    displayBtn: true,
  },
  {
    id: 1,
    imgSrc: heroBanner2,
    header: "reno's top law firm for personal injuries ",
    subHeader: "pay nothing unless you win, let us fight for you",
    beforeDesign: false,
    displayBtn: false,
  },
];
