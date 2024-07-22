let BOOKS = [
  {
    id: 1,
    title: "خواجه تاجدار",
    author: "ژان گور",
    publishedDate: 2007,
    language: "persian",
    genre: "تاریخ",
    publishers: [
      {
        price: 250000,
        title: "نوین",
      },
      {
        price: 265000,
        title: "ایرانیان",
      },
      {
        price: 310000,
        title: "مهر",
      },
    ],
    imgSrc: "../images/item-images/1.jpg",
  },
  {
    id: 2,
    title: "ضیافت",
    author: "افلاطون",
    publishedDate: 385,
    language: "greek",
    genre: "فلسفه",
    publishers: [
      {
        price: 350000,
        title: "خجو",
      },
      {
        price: 305000,
        title: "ایران مهر",
      },
      {
        price: 285000,
        title: "مهر آور",
      },
    ],
    imgSrc: "../images/item-images/2.jpg",
  },
  {
    id: 3,
    title: "منطق الطیر",
    author: "عطار",
    publishedDate: 1177,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 410000,
        title: "واج نما",
      },
      {
        price: 305000,
        title: "کلاتی",
      },
      {
        price: 275000,
        title: "مهر آرا",
      },
    ],
    imgSrc: "../images/item-images/3.jpg",
  },
  {
    id: 4,
    title: "مثنوی معنوی",
    author: "مولوی",
    publishedDate: 1258,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 250000,
        title: "حیرت زده",
      },
      {
        price: 285000,
        title: "رزم آیین",
      },
      {
        price: 295000,
        title: "آشیانه",
      },
    ],
    imgSrc: "../images/item-images/4.jpg",
  },
  {
    id: 5,
    title: "دیوان حافظ",
    author: "حافظ",
    publishedDate: 1200,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 350000,
        title: "حافظانه",
      },
      {
        price: 355000,
        title: "ایران مهر",
      },
      {
        price: 455000,
        title: "مهر آور",
      },
    ],
    imgSrc: "../images/item-images/5.jpg",
  },
  {
    id: 6,
    title: "رومیو و جولیت",
    author: "ویلیام شکسپیر",
    publishedDate: 1595,
    language: "english",
    genre: "عاشقانه",
    publishers: [
      {
        price: 250000,
        title: "روان",
      },
      {
        price: 255000,
        title: "دوستی",
      },
      {
        price: 285000,
        title: "ایرانیان",
      },
    ],
    imgSrc: "../images/item-images/6.jpg",
  },
  {
    id: 7,
    title: "ویس و رامین",
    author: "فخرالدین اسعد گرگانی",
    publishedDate: 1054,
    language: "persian",
    genre: "عاشقانه",
    publishers: [
      {
        price: 450000,
        title: "خجو",
      },
      {
        price: 415000,
        title: "آشیانه",
      },
      {
        price: 440000,
        title: "آفرینش",
      },
    ],
    imgSrc: "../images/item-images/7.jpg",
  },
  {
    id: 8,
    title: "گلستان",
    author: "سعدی",
    publishedDate: 1258,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 5200000,
        title: "خجو",
      },
      {
        price: 510000,
        title: "ایران مهر",
      },
      {
        price: 500000,
        title: "مهر آور",
      },
    ],
    imgSrc: "../images/item-images/8.jpg",
  },
  {
    id: 9,
    title: "بوستان",
    author: "سعدی",
    publishedDate: 1257,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 300000,
        title: "خوارج",
      },
      {
        price: 275000,
        title: "نسیم",
      },
      {
        price: 255000,
        title: "خاورمیانه",
      },
    ],
    imgSrc: "../images/item-images/9.jpg",
  },
  {
    id: 10,
    title: "گلشن راز",
    author: "شیخ محمود شبستری",
    publishedDate: 1311,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 450000,
        title: "دوستی",
      },
      {
        price: 465000,
        title: "ایران زمین",
      },
      {
        price: 425000,
        title: "مهر آور",
      },
    ],
    imgSrc: "../images/item-images/10.jpg",
  },
  {
    id: 11,
    title: "لیلی و مجنون",
    author: "نظامی",
    publishedDate: 1188,
    language: "persian",
    genre: "عاشقانه",
    publishers: [
      {
        price: 350000,
        title: "خجو",
      },
      {
        price: 305000,
        title: "ایران مهر",
      },
      {
        price: 285000,
        title: "مهر آور",
      },
    ],
    imgSrc: "../images/item-images/11.jpg",
  },
  {
    id: 12,
    title: "شاهنامه",
    author: "فردوسی",
    publishedDate: 1010,
    language: "persian",
    genre: "شعر",
    publishers: [
      {
        price: 350000,
        title: "محمدیان",
      },
      {
        price: 325000,
        title: "شیرودی",
      },
      {
        price: 300000,
        title: "میهن",
      },
    ],
    imgSrc: "../images/item-images/12.jpg",
  },
  {
    id: 13,
    title: "ایلیاد",
    author: "هومر",
    publishedDate: 762,
    language: "greek",
    genre: "شعر",
    publishers: [
      {
        price: 150000,
        title: "راد مهر",
      },
      {
        price: 115000,
        title: "شهریور",
      },
      {
        price: 105000,
        title: "توکلی",
      },
    ],
    imgSrc: "../images/item-images/13.jpg",
  },
  {
    id: 14,
    title: "اودیسه",
    author: "هومر",
    publishedDate: 725,
    language: "greek",
    genre: "شعر",
    publishers: [
      {
        price: 350000,
        title: "رازیانه",
      },
      {
        price: 395000,
        title: "عشق کتاب",
      },
      {
        price: 365000,
        title: "کوچ",
      },
    ],
    imgSrc: "../images/item-images/14.jpg",
  },
  {
    id: 15,
    title: "هملت",
    author: "ویلیام شکسپیر",
    publishedDate: 1609,
    language: "greek",
    genre: "درام",

    publishers: [
      {
        price: 350000,
        title: "کوه",
      },
      {
        price: 300000,
        title: "ایران مهر",
      },
      {
        price: 325000,
        title: "رزم آور",
      },
    ],
    imgSrc: "../images/item-images/15.jpg",
  },
  {
    id: 16,
    title: "دن کیشوت",
    author: "میگل دسروانتس",
    publishedDate: 1605,
    language: "spanish",
    genre: "درام",
    publishers: [
      {
        price: 310000,
        title: "لیلی",
      },
      {
        price: 325000,
        title: "ایران مهر",
      },
      {
        price: 255000,
        title: "مهر آیین",
      },
    ],
    imgSrc: "../images/item-images/16.jpg",
  },
];
let YOURLAB = [];


// api 
api.open("FETCH")