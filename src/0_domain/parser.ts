import { Option } from 'fp-ts/lib/Option';
import { Either } from 'fp-ts/lib/Either';

import { iso, Newtype } from 'newtype-ts';

export type PContent = Either<Option<Html>, Option<Html[]>>;

export interface Url extends Newtype<{ readonly Url: unique symbol }, string> {}
export const isoUrl = iso<Url>();
export interface Html
  extends Newtype<{ readonly Html: unique symbol }, string> {}
export const isoHtml = iso<Html>();

export type GetContent = (url: Url) => Html;
export type getReferUrls = (html: Html) => Option<Url[]>;
export type getTargetUrls = (
  content: string,
  url: Url,
  deps: number
) => Option<Url[]>;
