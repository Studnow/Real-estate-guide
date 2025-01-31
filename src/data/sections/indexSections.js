import navbar from "./navbar";
import hero from "./hero";
import slider from "./slider";
import cards from "./cards";
import about from "./about";
import price from "./price";
import footer from "./footer";

export default {
  sections: {
    header: navbar,
    heroSec: hero,
    cardsSec: cards,
    aboutSec: about,
    sliderSec: slider,
    priceSec: price,
    footer,
    extraCards: {
      bg: false,
      heading: { title: "Дополнительно Вы можете заказать", headingClass: "text-3xl lg:text-4xl text-accent" },
      cards: [
        {
          class: "w-32 h-20 px-8 pt-8",
          headingClass: "text-primary",

          path: "/assets/icons/extra-icons/lawyer.svg",
          title: "Консультация юриста",
          description: "",
        },
        {
          class: "w-32 h-20 px-8 pt-8",
          headingClass: "text-primary",

          path: "/assets/icons/extra-icons/contract.svg",
          title: "Составление договора",
          description: "",
        },
        {
          class: "w-32 h-20 px-8 pt-8",
          headingClass: "text-primary",

          path: "/assets/icons/extra-icons/deal.svg",
          title: "Сопровождение сделки",
          description: "",
        },
      ],
    },
  },
};
