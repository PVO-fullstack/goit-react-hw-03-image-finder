import axios from 'axios';

const key = '33230147-590fd19dde6d7b5b8f6ceacce';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async (value, page) => {
  const response = await axios.get(
    `/?q=${value}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
