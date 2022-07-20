import { faArrowLeft, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Group, Select, Stack, Text, TextInput } from "@mantine/core";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import Todos from "../../api/todoApi";
import { RootState } from "../../features/store";
import { TodoStatus } from "../../features/todosSlice";
import { useEditForm } from "./hook";

export default function EditForm() {
  const navigate = useNavigate();
  const match = useMatch("/edit/:id");

  const selectedTodoID = match?.params?.id;

  const { uid } = useSelector((state: RootState) => state.todos.user);
  const todos = useSelector((state: RootState) => state.todos.todos);

  const { getInputProps, onSubmit } = useEditForm();

  const selectedTodo = useMemo(
    () => todos.find((todo) => todo.id === selectedTodoID),
    [selectedTodoID, todos]
  );
  const handleSubmit = async (value: any) => {
    Todos.update(todos, value, uid);
    navigate("/home");
  };

  return (
    <form
      onSubmit={onSubmit((values) => {
        console.log(values);
        handleSubmit(values);
      })}
    >
      <Stack spacing={5}>
        <TextInput
          label="Todo"
          placeholder="Add Todo"
          {...getInputProps("todo")}
          icon={<FontAwesomeIcon icon={faTasks} />}
        >
          {selectedTodo?.todo}
        </TextInput>
        <Select
          label="Todo Status"
          placeholder="Update Status ?"
          value={selectedTodo?.status}
          data={[
            { value: TodoStatus.Completed, label: "Completed" },
            { value: TodoStatus.InProcess, label: "In Process" },
            { value: TodoStatus.Todo, label: "Todo" },
          ]}
        />

        <Group position="center" mt="3rem">
          <Button type="submit" px={50}>
            Add Todo
          </Button>
        </Group>
      </Stack>

      <Text<typeof Link>
        component={Link}
        to="/home"
        underline
        size="sm"
        color="#228be6"
        pl={"3px"}
        pt={"lg"}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ paddingRight: "0.5rem" }}
        />
        Go Back
      </Text>
    </form>
  );
}
