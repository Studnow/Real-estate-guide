export default {
  price: {
    class: "price",
    title: false,
    description: false,
    card: { class: "bg-primary md:flex-row w-full md:items-center", standart: "standart", pro: "pro" },
    bodyClass: "gap-8 md:w-1/2",
    buttons: [
      {
        text: "Цена: 15 000 рублей",
        class: "btn btn-outline btn-accent bg-base-100 hover:bg-accent hover:border-accent",
      },
      {
        text: "Вместо 33 000 рублей",
        class: "btn btn-disabled !bg-base-100 !bg-opacity-60 !text-opacity-50 relative cross-out",
      },
      { text: "Заказать", class: "btn btn-accent" },
    ],
    img: { path: "/assets/img/sale-img.png", class: "bg-base-100 rounded-t-full md:w-1/2" },
  },
};