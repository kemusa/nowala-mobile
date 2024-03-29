const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getAnalyticsScreenName = (routeName: string) => {
  let screenName;
  switch (routeName) {
    case 'Dashboard':
      screenName = 'Dashboard';
      break;
    case 'Projects':
      screenName = 'Projects';
      break;
    case 'ProjectDetails':
      screenName = 'Project Details';
      break;
    case 'ImpactDetail':
      screenName = 'Impact Detail';
      break;
    case 'Account':
      screenName = 'Account Pending';
      break;
    case 'SignUp':
      screenName = 'Sign Up';
      break;
    case 'Login':
      screenName = 'Login';
      break;
    case 'ForgotPassword':
      screenName = 'Forgot Password';
      break;
    case 'YourOrders':
      screenName = 'Your Orders';
      break;
    case 'BankPayment':
      screenName = 'Bank Payment';
      break;
    default:
      screenName = 'Undisclosed';
      break;
  }
  return screenName;
};

export { numberWithCommas, getAnalyticsScreenName };
