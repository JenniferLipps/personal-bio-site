import 'bootstrap';
import util from '../../helpers/util';
import projectsInfo from '../../helpers/data/projectsData';
import './cards.scss';

const createProjectCards = () => {
  projectsInfo.getProjectsData()
    .then((projects) => {
      console.error(projects);
      let domString = '';
      for (let i = 0; i < projects.length; i += 1) {
        console.error(projects[i].available);
        if (projects[i].available === true) {
          domString += '<div class="projects col-3">';
          domString += '<div class="card">';
          domString += `<h2>${projects[i].title}</h2>`;
          // domString += `<div id="projectImg">${projects[i].screenshot}</div>`;
          domString += `<p>${projects[i].description}</p>`;
          domString += `<p>${projects[i].technologiesUsed}</p>`;
          domString += `<p>View project <a href=${projects[i].url}>HERE</a></p>`;
          domString += `<a href=${projects[i].githubUrl}>GitHub</a>`;
          domString += '</div>';
          domString += '</div>';
        }
      }
      util.printToDom('projectsPage', domString);
    })
    .catch(err => console.error('no projects from createCards', err));
};

export default { createProjectCards };
