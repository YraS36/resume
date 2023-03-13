// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var heder = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Hrishatik street 27',
}

var footer = {
  social: {
    email: {
      text: 'Ivanov dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume $ sammary',
    },

    heder,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start towork on a new project I learn the domain and try to understand the idea of the project.Good teamplayer, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probabilityfor such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume $ Skills',
    },

    heder,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 7,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 9,
        },
        {
          name: 'Git',
          point: 2,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'NodJS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Грати у футбол',
          isMain: false,
        },
        {
          name: 'Плавати',
          isMain: true,
        },
        {
          name: 'Бігати',
          isMain: false,
        },
        {
          name: 'Рибалити',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume $ education',
    },

    heder,

    main: {
      enducations: [
        {
          name: 'Karazina',
          isEnd: true,
        },
        {
          name: 'Beketova',
          isEnd: false,
        },
        {
          name: 'Scovoroda',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'Cat',
          id: 5,
        },
        {
          name: 'Dog',
          id: 8,
        },
        {
          name: 'fish',
          id: 56,
        },
        {
          name: 'frog',
          id: 32,
        },
      ],
    },
    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume $ education',
    },

    heder,

    main: {
      works: [
        {
          position: 'Junior Fulstack Developer',
          company: {
            name: 'IT Brains',
            ulr: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmaunt: 3,
          projects: [
            {
              name: 'Resume',
              ulr: 'https://itbrains.com.ua/',
              about:
                'Airbnb competitor. High-load application for searching apartmens',
              stacks: [
                {
                  name: 'React JS',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'NodeJs',
                },
              ],
              stackAmount: 87,
              awardAmount: 96,
              awards: [
                {
                  name: 'Beckgraund ieorutioi ium ;i r oio!',
                },
                {
                  name: 'Realkeirutooi oiu u poiu ow uoi u[ upu!',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
