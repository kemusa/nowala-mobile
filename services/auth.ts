import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import sponsorshipsInit from '../utils/consts/DATA';
import DbService from './db';
// import { LoginManager, AccessToken, Settings } from 'react-native-fbsdk-next';
// import BackendService from '../services/backend';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default class AuthService {
  private getAuth = getAuth();
  // private x = firebase.
  // private _socialAuth: boolean = false;
  constructor(private dbService: DbService) {} // private _backend: BackendService,

  // public initSocialAuth() {
  //   // Init Facebook auth
  //   Settings.initializeSDK();
  //   // Init Google auth
  //   // todo: env var
  //   GoogleSignin.configure({
  //     webClientId:
  //       '1044590360632-71jf75di3hpvfjtfajmponqd994hk6as.apps.googleusercontent.com',
  //   });
  // }

  // Create an event listener that runs a callback when the user auth status
  // changes
  public onAuthChange(
    // todo: identify type for user with refresh token
    callback: (user: User | null) => void,
  ) {
    try {
      return onAuthStateChanged(this.getAuth, async (user: User | null) => {
        // Only run if a new user object is sent
        callback(user);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Register new user with email and password
  public async signUpWithEmailAndPassword(
    name: string,
    email: string,
    password: string,
  ) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.getAuth,
        email,
        password,
      );
      await updateProfile(user, { displayName: name });
      // Create user document
      await this.dbService.writeDocumentWithId('users', user.uid, {
        uid: user.uid,
        displayName: name,
      });
      // Init user sponsorship
      await this.dbService.writeDocument(`users/${user.uid}/sponsorships`, {
        ...sponsorshipsInit,
      });
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  // Sign user in with email and password
  public async signInWithEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.getAuth, email, password);
  }

  // public async signInWithFacebook() {
  //   // Attempt login with permissions
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);

  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }

  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();

  //   if (!data) {
  //     throw 'Something went wrong';
  //   }

  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(
  //     data.accessToken,
  //   );
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential);
  // }

  // public async signInWithGoogle() {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   if (!idToken) {
  //     throw 'Something went wrong';
  //   }

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  // Sign user out
  public async signOut() {
    try {
      await signOut(this.getAuth);
    } catch (error) {
      console.error(error);
    }
  }

  public async passwordReset(email: string) {
    try {
      await sendPasswordResetEmail(this.getAuth, email);
    } catch (error) {
      console.error(error);
    }
  }
}
