import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((results) => {
      const projectResults = results.data;
      const projectArray = [];
      Object.keys(projectResults).forEach((fbKey) => {
        projectResults[fbKey].id = fbKey;
        projectArray.push(projectResults[fbKey]);
      });
      resolve(projectArray);
    })
    .catch(err => reject(err));
});

export default { getProjectsData };
