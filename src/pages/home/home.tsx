import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFirestore } from "reactfire";
import TodoCard from "../../component/Card";
import Header from "../../component/Header";
import { RootState } from "../../features/store";
import { useGetProjects } from "./hook";
import "./styles.css";

export default function Home() {
  const { uid, email } = useSelector((state: RootState) => state.todos.user);
  const db = useFirestore();
  const navigate = useNavigate();
  const { data: todos, error, status } = useGetProjects({ db, userID: uid });

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (status === "loading") {
    return <div>Loading......</div>;
  }

  return (
    <>
      <Header email={email} />

      <div className="home_content">
        <div>
          <Button component={Link} to="/add">
            Add Todo
          </Button>
        </div>

        <div className="home_todolist">
          {todos?.map((todo) => (
            <div key={todo.id}>
              <TodoCard {...todo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
