import React from 'react';
import './projects.scss';
import "./project-card.css";
import Card from '../../components/Card/Card';
import Calc from '../../assets/img/calc1.png';
import gamePlatform from '../../assets/img/game-platform.png';
import Tvshows from '../../assets/img/TVShows.png';
import helloFresh from '../../assets/img/helloFresh.png';
import milestone from '../../assets/img/milestone.png';
import tasbeh from '../../assets/img/tasbeh.png';
import fabrx from '../../assets/img/fabrx.png';
import medium from '../../assets/img/medium.png';

const projectsData = [
  { url: "https://calculator-in-js-fn8i-8tj32r0am-mirzakhalov03s-projects.vercel.app/", image: Calc, title: "Calculator", description: "A simple and yet powerful and fully additional calculator app. Let your brain rest while we calculate... Leave it for us" },
  { url: "https://game-platform-5yukwbriv-mirzakhalov03s-projects.vercel.app/", image: gamePlatform, title: "Game Platform", description: "A platform for various games. Watch games, play games, and more. Let your creativity flow. Let yourself be happy. Let's accomplish missions together. " },
  { url: "https://tv-shows-list-app.vercel.app/", image: Tvshows, title: "TV Shows", description: "A website to track TV shows. Watch TV shows. Search TV shows. Listen to TV shows. Find TV shows. " },
  { url: "https://hello-fresh-one.vercel.app/", image: helloFresh, title: "Hello Fresh", description: "A meal delivery service. Order food online and get it delivered to your door instantly. Food is a necessity. Food brings people together. " },
  { url: "https://milestone-filler.vercel.app/", image: milestone, title: "Milestone", description: "A project management tool. A great way to plan and track progress. Reaching the end level is so exciting. Let you be your best." },
  { url: "https://tasbeh-app.vercel.app/", image: tasbeh, title: "Tasbeh", description: "A digital prayer counter. Tasbeh is a digital prayer counter. Tasbeh is a digital prayer counter. ZikrAllah, Tasbeh app helps users to count dhikrs ." },
  { url: "https://first-reac-tjs-project-h448.vercel.app/", image: fabrx, title: "Fabrx", description: "A fabric design platform. Create your own design with Fabrx. Fabrx is a fabric design platform. 6 facts about Fabrx." },
  { url: "https://medium-blog-posting.netlify.app/", image: medium, title: "Medium", description: "A blog website. Medium is a blog website. Medium is a blog website. 6 facts about Medium." }
];

const Projects = () => {
  return (
    <div className='projects'>
      <div className="container">
        <h1>Projects</h1>
        <div className="big__hug">
          <div className="projects__wrapper">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                url = {project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
