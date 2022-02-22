import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rajesh D', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Rajesh D',
  subtitle: 'I am a FullStack Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero-profile.jpg',
  paragraphOne:
    'I’m a fullstack software developer from Bangalore, India. Currently, I am a part of the TCS family. I’ve been designing and developing solutions since 2020. I’ve mostly worked with JavaScript',
  paragraphTwo:
    'I have extensively worked on managing React apps. Apart from this, I also like taking sessions and coaching programs for a long-lasting impact.',
  paragraphThree:
    'I love working, reading and learning JS ❤️. I believe in using the right tool for the job. A programming language is just a tool!',
  paragraphFour: 'Beside programming you can also hit me up to discuss movies/tv-series 🎬.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project0.JPG',
    title: 'Crypto Tracker',
    info: 'A real time web application that tracks the Crypto Currency prices by market capital.',
    info2: '',
    url: 'https://crypto-tracker24.netlify.app/',
    repo: 'https://github.com/therajesh24/crypto-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Voice Controlled Robot With Google Assistant',
    info: 'Designed & developed the robot which is controlled using Google Assistance. It can also be controlled with the Secure mobile application configured.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Accident Detection and Alert System',
    info: 'Designed and developed embedded modules that can detect & alert the accidents to emergency contacts through call & sms. We can add our custom contacts as well.',
    info2: '',
    url: '',
    repo: 'https://github.com/therajesh24/Embedded-Projects', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.JPG',
    title: 'Traffic Lights Control System',
    info: 'Developed the module which is used to control the traffic lights system from anywhere through internet.',
    info2: '',
    url: '',
    repo: 'https://github.com/therajesh24/Embedded-Projects', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Super impressed by my elevator pitch? Let's Talk",
  mailBtn: 'Mail me',
  callBtn: 'Over phone',
  email: 'drajesh4041@gmail.com',
  number: '+918367455135',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/therajesh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/therajesh24/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
