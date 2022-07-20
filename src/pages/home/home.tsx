import { useFirestore } from "reactfire";
import { useGetProjects } from "./hook";

export default function Home() {
  const db = useFirestore();
  const todos = useGetProjects({ db, userID: "Dennis" });

  console.log(todos);
  return <div>Home</div>;
}
