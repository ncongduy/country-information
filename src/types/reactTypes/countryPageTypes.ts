import { Currencies } from '../index';

export type Item = {
  category: string;
  title: string;
  content: string[] | string | undefined | Currencies | { [key: string]: string };
};
