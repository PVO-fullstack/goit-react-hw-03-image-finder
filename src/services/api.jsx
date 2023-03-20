import axios from 'axios';

const key = '33230147-590fd19dde6d7b5b8f6ceacce';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async ({ query = '', currentPage = 1 }) => {
  const response = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
