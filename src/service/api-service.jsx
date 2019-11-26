import axios from 'axios';

const URL =
  'https://pixabay.com/api/?key=14161279-eaec42196a52c7ac05c722c91&image_type=photo&orientation=horizontal&';

const apiService = (query = '', page = 1) =>
  axios
    .get(`${URL}&q=${query}&page=${page}&per_page=12`)
    .then(response => response.data);

export default apiService;
