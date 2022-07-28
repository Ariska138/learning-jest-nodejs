import axios from 'axios';

export const getTitle = async () => {
  let dataRes = await axios.get('http://localhost:3001');
  return dataRes.data[0].title;
}