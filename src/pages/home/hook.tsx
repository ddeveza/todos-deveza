import { Firestore } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFirestoreCollectionData } from "reactfire";
import todosConverter from "../../api/converter";
import Todos from "../../api/todoApi";
import { saveTodos } from "../../features/todosSlice";

interface GetProjectsProps {
  db: Firestore;
  userID: string;
}

export const useGetProjects = ({ db, userID }: GetProjectsProps) => {
  const ref = Todos.get(db, userID).withConverter(todosConverter);
  const dispatch = useDispatch();

  const { data, error, status } = useFirestoreCollectionData(ref);

  useEffect(() => {
    if (status === "success") {
      dispatch(saveTodos(data[0]));
    }
  }, [status, dispatch, data]);

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (status === "loading") {
    return <div>Loading......</div>;
  }

  return data[0];
};
