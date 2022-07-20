import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default class Auth {
  static async signin({ email, password }: any) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => {
      alert(err);
    });

    return userCredential;
  }

  static async logOut() {
    await signOut(auth);
  }

  static async signup({ email, password }: any) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const refDoc = doc(db, "Todos", res.user.uid);
      await setDoc(refDoc, {
        todos: [],
      });
    } catch (error) {
      console.log("Unable to signUp");
    }
  }
}
