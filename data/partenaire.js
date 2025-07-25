export const parternCards = [
  {
    id: 29,
    thumbSrc: "/assets/img/service/serviceThumb2_1.png",
    link: "https://www.microsoft.com/",
    delay: ".3s",
    hasRipple: true
  },
  {
    id: 30,
    thumbSrc: "/assets/img/service/serviceThumb2_2.png",
    link: "https://www.dell.com/",
    delay: ".6s"
  },
  {
    id: 31,
    thumbSrc: "/assets/img/service/serviceThumb2_3.png",
    link: "https://partners.comptia.org/",
    delay: ".9s"
  },
  {
    id: 32,
    thumbSrc: "/assets/img/service/serviceThumb2_4.png",
    link: "https://pecb.com/",
    delay: "1.2s"
  },
  {
    id: 33,
    thumbSrc: "/assets/img/service/serviceThumb2_5.png",
    link: "https://www.ibm.com/",
    delay: "1.3s",
    hasRipple: true
  },
  {
    id: 34,
    thumbSrc: "/assets/img/service/serviceThumb2_6.png",
    link: "https://www.fortinet.com/",
    delay: "1.5s"
  },
  {
    id: 35,
    thumbSrc: "/assets/img/service/serviceThumb2_7.png",
    link: "https://www.veeam.com/",
    delay: "1.7s"
  },
  {
    id: 36,
    thumbSrc: "/assets/img/service/serviceThumb2_8.png",
    link: "https://www.knowbe4.com/",
    delay: "1.9s"
  },
  {
    id: 36,
    thumbSrc: "/assets/img/service/tenable.png",
    link: "https://fr.tenable.com/",
    delay: "1.9s"
  }
];

export const partenaireLogos =[
{id:1,
  bgImage: "/assets/img/hero/black-2.png",
},

{id:6,
  bgImage:"/assets/img/hero/black-1.png"
},

{
  id:3,
  bgImage:"/assets/img/partenaire/ibm.png"
},
{
  id:4,
  bgImage:"/assets/img/partenaire/comptia.png"
},

{
  id:2,
  bgImage:"/assets/img/partenaire/Dell.png"
},

{
  id:8,
  bgImage:"/assets/img/partenaire/fortinet.png"
},
{
  id:9,
  bgImage:"/assets/img/partenaire/cissp.png"
},
{
  id:10,
  bgImage:"/assets/img/partenaire/force.png"
},
{
  id:11,
  bgImage:"/assets/img/partenaire/knowbe4.png"
},
{
  id:12,
  bgImage:"/assets/img/partenaire/logoPecb.png"
},
{
  id:13,
  bgImage:"/assets/img/partenaire/tenable.png"
}
]

export const getLogoById = (id) => {
  const match = partenaireLogos.find((p) => p.id === id);
  return match?.bgImage || "/assets/img/partenaire/comptia.png";
};