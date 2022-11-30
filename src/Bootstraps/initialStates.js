import yuni from '../Assets/images/porto/yuni.png'
import feed from '../Assets/images/porto/feed.png'
import ubud from '../Assets/images/porto/ubud.png'
import eLib from '../Assets/images/porto/e-lib.png'


const users = {
  blue: true,
  red: false,
  purple: false,
  green: false,
  datas: [
    {
      category: "Website -",
      title: "Weeding Invitation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae assumenda harum, expedita maxime ipsum ea veniam vel iusto non?",
      link: 'turah-yuni',
      image: yuni,
    },
    {
      category: "Design -",
      title: "Design Feed Instagram",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae assumenda harum, expedita maxime ipsum ea veniam vel iusto non?",
      link: "feed-saydanco",
      image: feed,
    },
    {
      category: "Web Design -",
      title: "Web Design Wisata Ubud",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae assumenda harum, expedita maxime ipsum ea veniam vel iusto non?",
      link: "wisata-ubud",
      image: ubud,
    },
    {
      category: "Website -",
      title: "Website Bootcamp E-Library",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae assumenda harum, expedita maxime ipsum ea veniam vel iusto non?",
      link: "e-library",
      image: eLib
    }
  ]
}


export const states = {
  ...users
  // ...data
}