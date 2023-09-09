import { facebookGray, twitterGray, instagramGray, linkedinGray } from "../assets/img"

export const footerNavigation = {
  slogan: ['Onze visie is om de grenzen van traditionele marketing te verleggen om samen met onze partners nieuwe hoogtes te bereiken.'],
  
  diensten: {
    title: 'Diensten' , 
    list: [
      { name: 'Website', href: '#' },
      { name: 'eCommerce', href: '#' },
      { name: 'SEO', href: '#' },
      { name: 'SEA', href: '#' },
      { name: 'CMS', href: '#' },
      { name: 'Steategie', href: '#' },
    ]
  },

  kennisbank:  {
    title: "Kennisbank",
    list:  [
      { name: 'Website', href: '#' },
      { name: 'eCommerce', href: '#' },
      { name: 'Seo', href: '#' },
    ],
  },

  documentatie: {
    title: "Documentatie",
    list:   [
      { name: 'Code Wiki', href: '#' },
      { name: 'SEO Wiki', href: '#' },
    ],
  },

  handigeLinks: {
    title: 'Handige Links' , 
    list: [
      { name: 'Over Massive', href: '#' },
      { name: 'Massive Webshop', href: '#' },
      { name: 'Blog Generator', href: '#' },
      { name: 'Persona Generator', href: '#' },
      { name: 'Vacatures', href: '#' },
    ]
  },
  
  

  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: facebookGray
    },
    {
      name: 'Twitter',
      href: '#',
      icon: twitterGray
    },
    {
      name: 'Instagram',
      href: '#',
      icon: instagramGray
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: linkedinGray
    }
  ],
}