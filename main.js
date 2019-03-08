const projects = [
    {
        title: 'Product Cards',
        screenshot: '1',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '2',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '3',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: false,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '4',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '5',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: false,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
    domString += `<div class='projectsPage'>`
    domString += `<h2>${projects[i].title}</h2>`
    domString += `<p>${projects[i].screenshot}</p>`
    domString += `<p>${projects[i].description}</p>`
    domString += `<p>${projects[i].technologiesUsed}</p>`
    domString += `<p><a href=${projects[i].url}>View project HERE</a></p>`
    domString += `<p><a href=${projects[i].githubUrl}>GitHub</a></p>`
    domString += `</div>`
    }
  printToDom('projectsPage', domString);
  }
};

const init = () => {
createProjectCards();
};

init();