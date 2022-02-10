import { nanoid } from "nanoid";

const content = {
  heroData: {
    title: "Hi, my name is ",
    name: "Rajesh D",
    subtitle: "I am a FullStack developer.",
    knowMoreBtn: "Know more",
  },
  aboutData: {
    img: "/assets/images/rajesh.jpg",
    paragraphOne:
      "I’m a fullstack software developer from Bangalore, India. Currently, I am a part of the TCS family. I’ve been designing and developing solutions since 2020. I’ve mostly worked with JavaScript",
    paragraphTwo:
      "I have extensively worked on managing React apps. Apart from this, I also like taking sessions and coaching programs for a long-lasting impact.",
    paragraphThree:
      "I love working, reading and learning JS ❤️. I believe in using the right tool for the job. A programming language is just a tool!",
    paragraphFour:
      "Beside programming you can also hit me up to discuss movies/tv-series 🎬.",
    resume: "",
  },
  projectsData: [
    {
      id: nanoid(),
      img: "",
      title: "Note-Pad-Application",
      info: "A note taking application where we can take notes then save, update and delete it. Implemented a search feature.",
      info2: "",
      url: "",
      repo: "https://github.com/therajesh24/Note-Pad-Application",
    },
    {
      id: nanoid(),
      img: "",
      title: "Voice Control Robot with Google Assistant",
      info: "The uniqueness of this robot is, it can either be operated using Google Assistance on our mobile phone or the app we designed.",
      info2: "",
      url: "",
      repo: "",
    },
  ],
  contactData: {
    cta: "Super impressed by my elevator pitch? Let's Talk",
    mailBtn: "Mail me",
    callBtn: "Over phone",
    email: "anmol5varma@gmail.com",
    number: "+918098469331",
  },
  footerData: {
    networks: [],
  },
};
export default content;
