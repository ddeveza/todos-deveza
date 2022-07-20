import { useFirestore } from "reactfire";
import Todos from "../../api/todoApi";
import { useGetProjects } from "./hook";

export default function Home() {
  const db = useFirestore();
  const {
    data: todos,
    error,
    status,
  } = useGetProjects({ db, userID: "Dennis" });

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (status === "loading") {
    return <div>Loading......</div>;
  }

  const handleSave = (id: string) => {};

  const handleClick = () => {
    Todos.add(todos, { todo: "Add" }, "Dennis");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Todo</button>
      {todos?.map((todo) => (
        <>
          <li key={todo.id}>{todo.todo}</li>
          <button onClick={() => handleSave(todo.id)}>save</button>
        </>
      ))}
    </div>
  );
}
