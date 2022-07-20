import { uuidv4 } from "@firebase/util";
import {
  collection,
  doc,
  Firestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Todo, TodoStatus } from "../features/todosSlice";
import { db } from "../firebase";

export default class Todos {
  static get(db: Firestore, docID: string) {
    const col = collection(db, "todos");
    return query(col, where("__name__", "==", docID));
  }

  static async add(currentTodos: Todo[], todo: Partial<Todo>, userID: string) {
    const itemRef = doc(db, "todos", userID);

    await setDoc(itemRef, {
      todos: [
        ...currentTodos,
        {
          id: uuidv4(),
          dateCreated: new Date(),
          dateUpdated: new Date(),
          status: TodoStatus.Todo,
          todo: todo.todo,
        },
      ],
    });
  }

  static async update(
    currentTodos: Todo[],
    todo: Partial<Todo>,
    userID: string
  ) {
    const itemRef = doc(db, "todos", userID);

    const newTodo = currentTodos.map((prevTodo) => {
      if (prevTodo.id === todo.id) {
        return {
          ...prevTodo,
          ...todo,
          dateUpdated: new Date(),
        };
      }

      return prevTodo;
    });

    await setDoc(itemRef, {
      todos: newTodo,
    });
  }

  /*  async update(userID: string, todoID: string, todo: Todo) {
    const itemRef = doc(db, "todos", userID);

    //getAllTodo
    //map all todo
    //each todo
    //kapag todoID equal sa current todo update the todo id
    //kunin ko each todo {...todo , dateUpdated: new Date() , todo: todo.todo , status : todo.status }}

    setDoc(itemRef, {
      todos,
    });
  }
 */
  //query data from database
  //dispatch an action to save from redux
}
