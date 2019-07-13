import 'bootstrap';
import '../styles/main.scss';
import projects from './components/cards/cards';

const init = () => {
  projects.createProjectCards();
};

init();
