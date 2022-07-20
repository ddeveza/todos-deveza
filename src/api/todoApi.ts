import { collection, Firestore, query, where } from "firebase/firestore";

export default class Todos {
  static get(db: Firestore, docID: string) {
    const col = collection(db, "todos");
    return query(col, where("__name__", "==", docID));
  }

  //query data from database
  //dispatch an action to save from redux
}
