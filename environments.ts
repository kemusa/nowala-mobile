import Constants from 'expo-constants';

const ENV = {
  dev: {
    segmentWriteKey: 'IUmq5tQIwDqfnQ9uNF2fkaGWDVejzFaP',
    firebaseConfig: {
      apiKey: 'AIzaSyCHnRZ2tqvGQ4q6D4Yn3cAiauGsqEVDs44',
      authDomain: 'nowala-dev.firebaseapp.com',
      projectId: 'nowala-dev',
      storageBucket: 'nowala-dev.appspot.com',
      messagingSenderId: '959761459114',
      appId: '1:959761459114:web:e37db36c8e1035d19bedd3',
    },
  },
  staging: {
    segmentWriteKey: 'rMwYGgIJdfCffsUA7quHXFy8ZfKAjIix',
    firebaseConfig: {
      apiKey: 'AIzaSyAQJ3GoyGS5Y_SuQSRqMFSpTNcyo0o9RrM',
      authDomain: 'nowala-staging.firebaseapp.com',
      databaseURL: 'https://nowala-staging.firebaseio.com',
      projectId: 'nowala-staging',
      storageBucket: 'nowala-staging.appspot.com',
      messagingSenderId: '153782113700',
      appId: '1:153782113700:web:6b6359b69e9cb5bb67dd31',
    },
  },
  prod: {
    segmentWriteKey: 'jNdxmY8AFCs2d7IBYCMD8ms6CoXYxEx9',
    firebaseConfig: {
      apiKey: 'AIzaSyCVdyN39f08FOvTfT5Zcn3GvPJu2dXKU8Q',
      authDomain: 'nowala.firebaseapp.com',
      databaseURL: 'https://nowala.firebaseio.com',
      projectId: 'nowala',
      storageBucket: 'nowala.appspot.com',
      messagingSenderId: '351027834464',
      appId: '1:351027834464:web:9984f7fd00a23a02675d05',
    },
  },
};

// Commands to build with the right env vars:
// Staging - expo build:ios --release-channel staging
// Production - expo build:ios --release-channel prod

// Update staging via OTA
// expo publish --release-channel staging

// View releases
// expo publish:history

// Promote staging code to production
// expo publish:set --publish-id <publicationId> --release-channel prod

const environment = (env = Constants?.manifest?.releaseChannel) => {
  console.log('env', env);
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
  return ENV.staging;
};

export default environment;
