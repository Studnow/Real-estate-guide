export default {
  cards: {
    wrapperClass: "cards grid gap-12 md:grid-cols-2 md:items-center",
    headingClass: "text-accent",
    title: "Что проверяем",
    description: false,
    cardB: [
      {
        cardClass:
          "lg:flex-row justify-end items-center bg-house bg-cover bg-left bg-no-repeat  w-full min-h-[236px] lg:h-[362px]",
        cardBTitle: {
          class: "card-title text-sm md:text-lg lg:text-2xl text-accent w-[35%] lg:w-1/2 self-end",
          text: "Проверяем историю объекта недвижимости",
        },
        cardBImg: {
          alt: "house history",
          class: "rounded-lg p-6 ",
          path: "/assets/img/list-cards-bg/house.jpg",
          w: "64",
          h: "64",
        },
        cardBDesc: "cardB desc",
        cardActions: false,
        cardPicture: false,
        cardBBtn: "CardB 1 Buy now!",
        listClass: "text-base lg:w-full lg:translate-x-10",
        list: [
          "Проверка по объявлениям и базам продаж",
          "Проверка по надзорным ведомствам",
          "Проверка по коммунальным службам, сбор иной информации",
        ],
      },
      {
        cardClass:
          "flex-row justify-end items-center bg-plan bg-cover bg-left bg-no-repeat w-full min-h-[236px] lg:h-[362px]",
        cardBTitle: {
          class: "card-title text-sm md:text-lg lg:text-2xl text-accent w-[35%] lg:w-1/2 self-end",
          text: "Проверяем характеристики объекта недвижимости",
        },
        cardBImg: {
          alt: "Card image",
          class: "rounded-lg p-6 ",
          path: "/assets/img/waterfall.png",
          w: "64",
          h: "64",
        },
        cardBDesc: "cardB desc",
        cardActions: false,
        cardPicture: false,
        cardBBtn: "CardB 2 Buy now!",
        listClass: "text-base lg:w-full lg:translate-x-10",
        list: [
          "Проверка на наличие/отсутствие права собственности на объект недвижимости",
          "Проверка документации на объект недвижимости",
          "Проверка документов на соответствие реальному состоянию объекта недвижимости",
          "Проверка градостроительных условий, зон, границ, целевого назначения и иных характеристик",
        ],
      },
      {
        cardClass:
          "flex-row justify-end items-center bg-woman bg-cover bg-left bg-no-repeat  w-full min-h-[236px] lg:h-[362px]",
        cardBTitle: {
          class: "card-title text-sm md:text-lg lg:text-2xl text-accent w-[35%] lg:w-1/2 self-end",
          text: "Проверяем продавца",
        },
        cardBImg: {
          alt: "Card image",
          class: "rounded-lg p-6",
          path: "/assets/img/0e.gif",
          w: "64",
          h: "64",
        },
        cardBDesc: "cardB 3 desc",
        cardActions: false,
        cardPicture: false,
        cardBBtn: "CardB 3 Buy now!",
        listClass: "text-base lg:w-full lg:translate-x-10",
        list: [
          "На наличие несовершеннолетних детей (справка)",
          "На недееспособность граждан",
          "На «порядочность» продавца",
          "Состоит ли продавец в браке и состоял ли в тот момент, когда приобрел продаваемый объект недвижимости",
          "Проверка представителя продавца",
          "Проверка на наличие не исполненных долговых обязательств",
          "ФССП, Суды",
        ],
      },
      {
        cardClass:
          "flex-row justify-end items-center bg-floors bg-cover bg-left bg-no-repeat  w-full min-h-[236px] lg:h-[362px]",
        cardBTitle: {
          class: "card-title text-sm md:text-lg lg:text-2xl text-accent w-[35%] lg:w-1/2 self-end",
          text: "Проверяем отсутствие прав третьих лиц",
        },
        cardBImg: {
          alt: "Card image",
          class: "rounded-lg p-6",
          path: "/assets/img/0e.gif",
          w: "64",
          h: "64",
        },
        cardBDesc: "cardB 3 desc",
        cardActions: false,
        cardPicture: false,
        cardBBtn: "CardB 3 Buy now!",
        listClass: "text-base lg:w-full lg:translate-x-10",
        list: [
          "Проверка на наличие споров в судах общей юрисдикции РФ",
          "Проверка на наличие споров в арбитражных судах РФ",
          "Проверка  наличия ограничений по базам РФ",
        ],
      },
    ],
  },
};
