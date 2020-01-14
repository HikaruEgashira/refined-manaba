import { Option } from 'fp-ts/lib/Option';
import { Url } from './parser';

export interface Auth {
  state: Option<boolean>;
  userName: Option<string>;
  passWord: Option<string>;
}

export type IsLogin = (url: Url) => Promise<Auth>;
export type GetCokkie = (loginUrl: Url) => Promise<Auth>;
export type RemoveCookie = (path: string) => void;
