const _getLoginError = (error: string) => {
  switch (error) {
    case 'auth/wrong-password':
      return 'This password is invalid';
    case 'auth/user-not-found':
      return 'No user with this email was found';
    case 'auth/too-many-requests':
      return "There's an issue with your account, please send a screenshot to support@nowala.io to resolve";
    default:
      return 'Something went wrong';
  }
};

const _getSignUpError = (error: string) => {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'This email address is already in use by another account.';
    default:
      return 'something went wrong';
  }
};

export { _getLoginError, _getSignUpError };
