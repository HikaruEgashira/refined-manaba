import { Html } from '../0_domain/parser';

export interface Parce {
  GetContentByClass(html: Html, className: string): Html;
  GetContentById(html: Html, idName: string): Html;
}
