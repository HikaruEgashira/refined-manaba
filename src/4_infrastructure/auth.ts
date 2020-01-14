import createClient from './createClient';

require('dotenv').config();

const axios = createClient(process.env.SAML_URL, './cookie.json');

export const login = async () => {
  await axios.post(process.env.LOGIN_URL, {
    j_username: process.env.USER_NAME,
    j_password: process.env.PASS_WORD,
    _eventId_proceed: ''
  });
};
