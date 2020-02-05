import axios from 'axios';

require('dotenv').config();

export const fetch = async () => {
  const a = await axios.get('https://manaba.tsukuba.ac.jp/ct/home');
  console.log(a);
};
