import 'bootstrap';
import util from '../../helpers/util';
import projectsInfo from '../../helpers/data/projectsData';
import './cards.scss';

const createProjectCards = () => {
  projectsInfo.getProjectsData()
    .then((projects) => {
      let domString = '';
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].available === true) {
          domString += '<div class="card-group">';
          domString += '<div class="card">';
          domString += `<img class="card-img-top" ${projects[i].screenshot}>`;
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
