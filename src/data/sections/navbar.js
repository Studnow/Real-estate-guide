export default {
  navbar: {
    left: "my left header",
    center: {
      components: { showMenu: false, showContacts: true },
      list: {
        class: "flex justify-start w-full",
        "list-items": [
          {
            link: true,
            class: "btn btn-link no-underline flex items-start p-2 gap-2 border border-bottom border-2",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5_139)"><path d="M3.53911 0.0609283C3.43598 0.0984287 3.28598 0.159367 3.2063 0.201553C3.02348 0.295303 1.55161 1.70155 1.11098 2.19374C0.735983 2.6203 0.384421 3.27187 0.215671 3.84843C-0.646829 6.82968 1.12973 11.2406 5.02973 15.7969C5.70005 16.575 7.73442 18.5766 8.55473 19.2609C12.9516 22.9219 17.0907 24.5625 20.0438 23.8125C20.2454 23.7609 20.6485 23.6016 20.9297 23.4656C21.5391 23.1656 21.7922 22.95 22.9454 21.75C23.8829 20.775 23.9766 20.6203 23.9766 20.0391C23.9766 19.3922 24.0141 19.4391 21.5766 17.0109C19.561 15.0047 19.4157 14.8641 19.1719 14.7844C18.7922 14.6578 18.361 14.6766 18.0235 14.8312C17.8079 14.9297 17.5875 15.1125 16.9969 15.6984C16.0219 16.6594 15.6985 16.8375 14.9016 16.8375C14.4188 16.8375 14.0954 16.7344 13.5235 16.4156C11.6204 15.3516 9.96098 13.8891 8.64848 12.1219C7.98755 11.2266 7.37348 10.1812 7.23755 9.72655C7.07348 9.1453 7.17192 8.41405 7.48598 7.9078C7.55161 7.79999 7.92661 7.3828 8.32505 6.98437C8.89223 6.4078 9.07036 6.19687 9.1688 5.98124C9.32348 5.63905 9.34223 5.2078 9.21567 4.82812C9.13598 4.58436 8.99536 4.43905 6.98911 2.42343C4.62661 0.0515537 4.62192 0.0468655 4.04067 0.0187416C3.85786 0.00936508 3.64692 0.0281162 3.53911 0.0609283Z" fill="#654D31"/></g><defs><clipPath id="clip0_5_139"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
            text: "+7 978 221 26 88",
            href: "tel:+7 978 221 26 88",
          },
          {
            link: true,
            class: "btn btn-link no-underline flex items-start p-2 gap-2",
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5_142)"><path d="M1.52333 3.06561C1.20458 3.1453 0.918646 3.29999 0.670209 3.52967C0.346771 3.82967 0.267084 4.03592 0.384271 4.28436C0.412396 4.34999 1.4624 5.27343 2.71396 6.33749C5.72802 8.89686 9.35615 12.0047 10.5374 13.0406C11.3624 13.7625 11.5265 13.8844 11.7468 13.95C11.9765 14.0156 12.0233 14.0156 12.2483 13.95C12.5202 13.8703 12.5108 13.8797 13.828 12.7266C14.9343 11.7562 18.1921 8.96718 21.2858 6.33749C22.5374 5.27343 23.5874 4.34999 23.6155 4.28436C23.7327 4.03592 23.653 3.82967 23.3296 3.52967C23.0718 3.29061 22.7483 3.12186 22.4155 3.05155C22.0405 2.97186 1.84677 2.98592 1.52333 3.06561Z" fill="#654D31"/><path d="M0.220244 6.00466C-0.00944368 6.1406 -6.86705e-05 5.85935 -6.86705e-05 12.7172C-6.86705e-05 16.8187 0.0186813 19.2 0.0468063 19.3594C0.196806 20.1562 0.843681 20.8031 1.63587 20.9531C1.98274 21.0187 22.0171 21.0187 22.364 20.9531C23.1562 20.8031 23.8031 20.1562 23.9531 19.3594C23.9812 19.2 23.9999 16.8187 23.9999 12.7172C23.9999 5.82654 24.0093 6.13122 23.7702 5.99998C23.639 5.92966 23.3343 5.94372 23.2218 6.01873C23.0671 6.12654 16.8093 11.4609 15.3327 12.7453C14.6015 13.3781 13.8093 14.0625 13.5749 14.2687C12.9093 14.8453 12.3421 15.0562 11.7234 14.9578C11.1374 14.864 10.9734 14.7562 9.70306 13.6406C8.24056 12.3562 1.27024 6.4031 0.824931 6.05622C0.679619 5.94372 0.370244 5.9156 0.220244 6.00466Z" fill="#654D31"/></g><defs><clipPath id="clip0_5_142"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
            text: "info@gidrealter.ru",
            href: "mailto: info@gidrealter.ru",
          },
        ],
      },
    },
    right: "my right header",
  },
};
