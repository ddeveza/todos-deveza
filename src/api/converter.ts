import {
  FirestoreDataConverter,
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { Todo } from "../features/todosSlice";
const todosConverter: FirestoreDataConverter<Todo[]> = {
  toFirestore(project: PartialWithFieldValue<Todo[]>) {
    return [];
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Todo[] {
    const data = snapshot.data(options);
    const Todo: Todo[] = data?.todos?.map((d: Todo) => {
      return {
        id: d?.id,
        dateCreated: d?.dateCreated,
        dateUpdated: d?.dateUpdated,
        todo: d?.todo,
        status: d?.status,
      };
    });

    return Todo;
  },
};

export default todosConverter;
