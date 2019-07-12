import 'bootstrap';
import util from '../helpers/util';
import projects from '../helpers/data/projectsData';

const createProjectCards = () => {
  let domString = '';
  projects.forEach((project) => {
    domString += '<div class="card">';
    domString += `<h2>${project.title}</h2>`;
    domString += `<p>${project.screenshot}</p>`;
    domString += `<p>${project.description}</p>`;
    domString += `<p>${project.technologiesUsed}</p>`;
    domString += `<p>View project <a href=${project.url}>HERE</a></p>`;
    domString += `<p><a href=${project.githubUrl}>GitHub</a></p>`;
    domString += '</div>';
  });
  util.printToDom('projectsPage', domString);
};

const displayProjects = () => {
  projects.getProjectsData()
    .then((projects) => {
      createProjectCards(projects);
    })
    .catch(err => console.error('no projects', err));
};

export default { displayProjects };
