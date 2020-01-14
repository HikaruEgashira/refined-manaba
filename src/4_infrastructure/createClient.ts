import axios from 'axios';
import axiosCookiejarSupport from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import FileCookieStore from 'tough-cookie-filestore';

export default (baseURL: string, cookiePath: string) => {
  const filestore: any = new FileCookieStore(cookiePath);
  const jar = new CookieJar(filestore);
  axiosCookiejarSupport(axios);
  return axios.create({
    withCredentials: true,
    jar,
    baseURL
  });
};
