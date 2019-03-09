const projects = [
    {
        title: 'Product Cards',
        screenshot: '<img src="./sampleImg1.jpg"></img>',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '<img src="./sampleImg2.jpg"></img>',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '<img src="./sampleImg3.jpg"></img>',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: false,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '<img src="./sampleImg4.jpg"></img>',
        description: '3 by 5 cards',
        technologiesUsed: 'HTML, CSS',
        available: true,
        url: 'http://www.google.com',
        githubUrl: 'https://github.com/JenniferLipps'
    },
    {
        title: 'Product Cards',
        screenshot: '<img src="./sampleImg5.jpg"></img>',
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
    // if (projects[i].available === true) {
    domString += `<div class='card'>`
    domString += `<h2>${projects[i].title}</h2>`
    domString += `<p>${projects[i].screenshot}</p>`
    domString += `<p>${projects[i].description}</p>`
    domString += `<p>${projects[i].technologiesUsed}</p>`
    domString += `<p>View project <a href=${projects[i].url}>HERE</a></p>`
    domString += `<p><a href=${projects[i].githubUrl}>GitHub</a></p>`
    domString += '</div>'
    // }
  printToDom('projectsPage', domString);
  }
};

const init = () => {
createProjectCards();
};

init();