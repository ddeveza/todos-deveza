import { faArrowLeft, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Todos from "../../api/todoApi";
import { RootState } from "../../features/store";
import { useAddForm } from "./hook";

export default function AddForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log({ pathname });

  const { uid } = useSelector((state: RootState) => state.todos.user);
  const todos = useSelector((state: RootState) => state.todos.todos);

  const { getInputProps, onSubmit } = useAddForm();

  const handleSubmit = async (value: any) => {
    Todos.add(todos, value, uid);
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
