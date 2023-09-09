import { chartBar, cursorClick, desktopComputer, presentationChartLine, server, shoppingCart } from "../assets/img"

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/"
  },
  {
    id: "diensten",
    title: "Diensten",
    link: "/diensten"
  },
  {
    id: "over-ons",
    title: "Over ons",
    link: "/over-ons"
  },
  // {
  //   id: "blog",
  //   title: "Blog",
  //   link: "/blog"
  // },
  // {
  //   id: "contact",
  //   title: "Contact",
  //   link: "/contact"
  // },
];

export const navLinksDiensten = [
  {
    id: "seo",
    title: "SEO",
    subTitle: "Stijg uit boven je concurentie",
    icon: chartBar ,
    slug: "/diensten/seo-uitbesteden"
  },
  {
    id: "sea",
    title: "SEA",
    subTitle: "Effectieve SEA-campagnes",
    icon: cursorClick ,
    slug: "/diensten/sea-uitbesteden"
  },
  {
    id: "website",
    title: "Website",
    subTitle: "Creative, datagedreven websites",
    icon: desktopComputer ,
    slug: "/diensten/website-laten-maken"
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    subTitle: "Online web-winkeloplossingen",
    icon: shoppingCart ,
    slug: "/diensten/webshop-laten-maken"
  },
  {
    id: "strategie",
    title: "Strategie",
    subTitle: "Doelgerichte online strategieën",
    icon: presentationChartLine ,
    slug: "/diensten/online-marketing-strategie"
  },
  {
    id: "cms",
    title: "CMS",
    subTitle: "Innovatief contentbeheer",
    icon: server ,
    slug: "/diensten/cms"
  },
]