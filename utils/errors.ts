const _getLoginError = (error: string) => {
  switch (error) {
    case 'auth/wrong-password':
      return 'This password is invalid';
    case 'auth/user-not-found':
      return 'No user with this email was found';
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
