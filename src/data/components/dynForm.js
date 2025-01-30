export default {
  form: {
    title: 'Оставьте заявку и получите чек-лист по покупке недвижимости',
    headingClass: 'text-accent',
    fields: {
      Email: false,
      Name: true,
      Phone: true,
      button: true,
      check: false,
      radio: false,
      select: false,
      file: false,
      range: false,
      rating: false,
      text: false,
      textArea: false,
      toggle: false,
    },
    placeholder: {
      name: 'Имя',
      phone: 'Номер телефона'
    },
    submit: {cta: 'Получить чек-лист', class:'btn btn-primary text-base-100 text-lg'},
  },
};