import { initializeApp } from 'firebase/app';
import { FirestoreSettings, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVdyN39f08FOvTfT5Zcn3GvPJu2dXKU8Q',
  authDomain: 'nowala.firebaseapp.com',
  databaseURL: 'https://nowala.firebaseio.com',
  projectId: 'nowala',
  storageBucket: 'nowala.appspot.com',
  messagingSenderId: '351027834464',
  appId: '1:351027834464:web:9984f7fd00a23a02675d05',
};

const firbaseInit = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Added to fix error:Connection WebChannel transport errored
  // https://stackoverflow.com/questions/65594133/react-native-to-firestore-firestore-8-2-1-connection-webchannel-transport-er
  const firestore = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
};

export { firbaseInit };
