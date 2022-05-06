import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import environment from '../environments';
const { firebaseConfig } = environment();

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
