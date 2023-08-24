import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5967ee60fc2d4916b8c06696eca60c4d',
  },
});
