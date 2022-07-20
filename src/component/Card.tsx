import {
  Badge,
  Button,
  Card,
  DefaultMantineColor,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todo, TodoStatus } from "../features/todosSlice";

export default function TodoCard({
  dateCreated,
  dateUpdated,
  status,
  id,
  todo,
}: Todo) {
  const theme = useMantineTheme();
  const [color, setColor] = useState<DefaultMantineColor>("");

  useEffect(() => {
    switch (status) {
      case TodoStatus.Todo:
        setColor("orange");
        break;
      case TodoStatus.Completed:
        setColor("green");
        break;
      case TodoStatus.InProcess:
        setColor("yellow");
        break;
      default:
        break;
    }
  }, []);

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{todo}</Text>
          <Badge color={color} variant="light">
            {status?.toUpperCase()}
          </Badge>
        </Group>

        <Text
          size="sm"
          style={{ color: theme.colors.gray[7], lineHeight: 1.5 }}
        >
          {`Date Created: ${moment(dateCreated)}`}
        </Text>
        <Text
          size="sm"
          style={{ color: theme.colors.gray[7], lineHeight: 1.5 }}
        >
          {`Date Updated: ${moment(dateUpdated)}`}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          component={Link}
          to={`/edit/${id}`}
        >
          Edit Todo
        </Button>
      </Card>
    </div>
  );
}
