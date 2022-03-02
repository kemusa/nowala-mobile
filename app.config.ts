import { ConfigContext } from '@expo/config';
import Constants from 'expo-constants';

export default ({ config }: ConfigContext) => {
  if (process.env.APP_ENV === 'prod') {
    console.info(`Running in prod environment`);
    return require('./app.prod.json');
  } else if (process.env.APP_ENV === 'staging') {
    console.info(`Running in staging environment`);
    return require('./app.staging.json');
  } else {
    console.info(`Running in dev environment`);
    return require('./app.dev.json');
  }
};
