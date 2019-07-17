import 'bootstrap';
import '../styles/main.scss';
import projects from './components/cards/cards';
import navEvents from './components/navigation/navigation';

const init = () => {
  projects.createProjectCards();
  navEvents.navEvents();
};

init();
