import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './Pages/Cover/Cover';
import coverImg from "../assets/cover.png"
import FirstPage from './Pages/Hero/FirstPage';
import Skill from './Pages/Skills/Skill';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';

import ProjectImg1 from "../assets/Projects/project1.jpg";
import ProjectImg2 from "../assets/Projects/car-rental.jpg";
import ProjectImg3 from "../assets/Projects/restaurant.jpg";
import ProjectImg4 from "../assets/Projects/travel-website.jpg";

const ProjectData = [
  {
    name: "Ecommerce website",
    description: " Compleate Responsive websiteusing React js and  CSS",
    image: ProjectImg1,
    previewLink: "https://e-commerce-app-three-ecru.vercel.app/",
  },
  {
    name: "Change Theme",
    description: " Compleate Responsive websiteusing Javascript DOM",
    image: ProjectImg1,
    previewLink: "https://theme-change-iota.vercel.app/",
  }
];
const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: " Compleate Responsive websiteusing React js and  CSS",
    image: ProjectImg1,
    previewLink: "https://e-commerce-app-three-ecru.vercel.app/",
  },
  {
    name: "Change Theme",
    description: " Compleate Responsive websiteusing Javascript DOM",
    image: ProjectImg1,
    previewLink: "https://theme-change-iota.vercel.app/",
  }
]
function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skill />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects projectData={ProjectData}/>
      </Page>
      <Page number={7}>
        <Projects projectData={ProjectData2}/>
      </Page>

    </HTMLFlipBook>
  );
}
export default MyBook;