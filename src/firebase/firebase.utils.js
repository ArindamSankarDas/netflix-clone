import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO5ptYCBSpl6WY3_-6sAjUi171WHHrp-E",
  authDomain: "netflix-clone-1eef0.firebaseapp.com",
  projectId: "netflix-clone-1eef0",
  storageBucket: "netflix-clone-1eef0.appspot.com",
  messagingSenderId: "761128274501",
  appId: "1:761128274501:web:447d58d8f3fb59f1f4b12c",
  measurementId: "G-42DV07TB91",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (user, addtionalData) => {
  if (!user) {
    return;
  } else {
    const userRef = firestore.doc(`users/${user.uid}`);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      const { displayName, email } = user;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData,
        });
      } catch (error) {
        alert("There was some problem during the authentication");
        console.log(error);
      }
    }

    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
