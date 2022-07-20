import { useFirestore } from "reactfire";
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

  return (
    <div>
      {todos?.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
}
