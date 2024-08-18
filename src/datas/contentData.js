import heroBanner1 from "../images/bannersHero/craigandbarb1.jpg";
import heroBanner2 from "../images/bannersHero/about-banner.jpg";
import caseLogo1 from "../images/incons/truckIcon.png";
import caseLogo2 from "../images/incons/workerIcon.png";
import trustLogo1 from "../images/incons/bestAttorneyTrustIcon.png";
import trustLogo2 from "../images/incons/multiMillionTrustIcon.png";

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

export const CasesContainerData = [
  {
    id: 0,
    caseReason: "truck accident",
    amountWon: "$2.5M",
    caseLogo: caseLogo1,
  },
  {
    id: 1,
    caseReason: "truck accident",
    amountWon: "$1.98",
    caseLogo: caseLogo2,
  },
  {
    id: 2,
    caseReason: "truck accident",
    amountWon: "$1.45",
    caseLogo: caseLogo1,
  },
  {
    id: 3,
    caseReason: "truck accident",
    amountWon: "$1.15",
    caseLogo: caseLogo2,
  },
];

export const TrustIconsContainerData = [
  {
    id: 0,
    trustLogo: trustLogo1,
    altText: "best attorney award logo",
  },
  {
    id: 1,
    trustLogo: trustLogo2,
    altText: "best attorney award logo",
  },
  {
    id: 2,
    trustLogo: trustLogo1,
  },
  {
    id: 3,
    trustLogo: trustLogo1,
  },
  {
    id: 4,
    trustLogo: trustLogo1,
  },
];

export const ClaimsContainerData = [
  {
    id: 0,
    header: "trusted prsonal injury lawyer near reno, nevada",
    content: "",
  },
  {
    id: 1,
    header: "trusted prsonal injury lawyer near reno, nevada",
    content: "",
  },
];
