type Falsy = boolean | undefined | null | 0;

export const classNames = (...classes: (string | Falsy)[]): string => {
  return classes.filter(Boolean).join(' ');
};
