export const toCapitalize = (str: string) =>
  `${str[0].toUpperCase()}${str.slice(1)}`;

export const replaceDash = (str: string) => str.replaceAll("-", " ");
