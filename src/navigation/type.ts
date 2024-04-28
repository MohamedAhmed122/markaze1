type NO_PARAMS = undefined;

export enum AppStackParams {
  login = 'Login',
  register = 'Register',
  home = 'Home',
}

export type AppStackParamsList = {
  [AppStackParams.login]: NO_PARAMS;
  [AppStackParams.register]: NO_PARAMS;
  [AppStackParams.home]: NO_PARAMS;
};
