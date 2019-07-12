import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseConfig.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projectsData.json`)
    .then((res) => {
      const projects = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        projects.push(res.data[fbKey]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjectsData };
