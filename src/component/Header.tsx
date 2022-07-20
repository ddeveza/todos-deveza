import { Avatar, Button, Group, Paper, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Auth from "../api/authApit";
import "./style.css";
interface HeaderProps {
  email: string;
}

export default function Header({ email }: HeaderProps) {
  const navigate = useNavigate();
  const letters = (email.split("")[0] + email.split("")[1]).toUpperCase();
  const logout = async () => {
    await Auth.logOut();
    navigate("/", { replace: true });
  };
  return (
    <Paper p={"lg"} withBorder shadow={"lg"} mb="lg">
      <div className="header_content">
        <div />
        <Title align="center">My Todo-List</Title>
        <Group position="center">
          <Avatar color="cyan" radius="xl">
            {letters}
          </Avatar>
          <Text>{email}</Text>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </Group>
      </div>
    </Paper>
  );
}
