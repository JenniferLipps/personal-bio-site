import 'bootstrap';

const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i++) {
    domString += '<div class='card'>';
    domString += `<h2>${projects[i].title}</h2>`;
    domString += `<p>${projects[i].screenshot}</p>`;
    domString += `<p>${projects[i].description}</p>`;
    domString += `<p>${projects[i].technologiesUsed}</p>`;
    domString += `<p>View project <a href=${projects[i].url}>HERE</a></p>`;
    domString += `<p><a href=${projects[i].githubUrl}>GitHub</a></p>`;
    domString += '</div>';
  printToDom('projectsPage', domString);
  }
};

const init = () => {
createProjectCards();
};

init();
