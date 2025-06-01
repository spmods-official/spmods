export type MediaQueryObject = {
  [feature: string]: string | number | (string | number)[];
};

export type MediaQuery = string | MediaQueryObject;