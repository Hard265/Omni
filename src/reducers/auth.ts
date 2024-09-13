type AuthState = {
  userToken: string | null;
  isSignout: boolean;
  isLoading: boolean;
};

export enum AuthStateAction {
  RESTORE_TOKEN = "RESTORE_TOKEN",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

export default function authReducer(
  prevState: AuthState,
  action: {
    type: AuthStateAction;
    token?: any;
  }
) {
  switch (action.type) {
    case AuthStateAction.RESTORE_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case AuthStateAction.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case AuthStateAction.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}
