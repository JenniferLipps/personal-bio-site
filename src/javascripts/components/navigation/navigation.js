const navEvents = () => {
  const bio = document.getElementById('bioDiv');
  const tech = document.getElementById('techDiv');
  const projects = document.getElementById('projectContainer');
  const navBarLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navBarLinks.length; i += 1) {
    navBarLinks[i].addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'showBio') {
        bio.classList.remove('hide');
        tech.classList.add('hide');
        projects.classList.add('hide');
      }
      if (e.target.parentNode.id === 'showTech') {
        bio.classList.add('hide');
        tech.classList.remove('hide');
        projects.classList.add('hide');
      }
      if (e.target.parentNode.id === 'showProjects') {
        bio.classList.add('hide');
        tech.classList.add('hide');
        projects.classList.remove('hide');
      }
    });
  }
};

export default { navEvents };
