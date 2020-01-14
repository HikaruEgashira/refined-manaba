import _axios from 'axios';
import createClient from './createClient';

require('dotenv').config();

const axios = createClient(process.env.SAML_URL, './cookie.json');

export const fetch = async () => {
  const a = await axios.get('https://manaba.tsukuba.ac.jp/ct/home');
  console.log(a);
};
