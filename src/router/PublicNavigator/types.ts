export enum PublicScreenNames {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export type PublicStackParams = {
  [PublicScreenNames.LOGIN]: undefined;
  [PublicScreenNames.REGISTER]: undefined;
};
