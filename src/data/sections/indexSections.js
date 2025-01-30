import navbar from './navbar'
import hero from './hero'
import slider from './slider'
import cards from './cards'
import about from './about'
import price from './price'
import footer from './footer'

export default {
  sections: {
    header: navbar,
    heroSec: hero,
    cardsSec: cards,
    aboutSec: about,
    sliderSec: slider,
    priceSec: price,
    footer,
    extraCards: [
      {
        icon: "/assets/icons/extra-icons/lawyer.svg",
        title: "Консультация юриста",
        description: "",
      },
      {
        icon: "/assets/icons/extra-icons/contract.svg",
        title: "Составление договора",
        description: "",
      },
      {
        icon: "/assets/icons/extra-icons/deal.svg",
        title: "Сопровождение сделки",
        description: "",
      },
    ],
  },
};
