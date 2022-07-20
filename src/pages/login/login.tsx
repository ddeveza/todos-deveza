import { faKey, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../api/authApit";
import { useLoginForm } from "./hook";

export function Login() {
  const { onSubmit, getInputProps } = useLoginForm();
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    const response = await Auth.signin(values);
    console.log(response);
  };

  return (
    <form onSubmit={onSubmit((values) => handleSubmit(values))}>
      <Stack spacing={5}>
        <TextInput
          label="Email"
          placeholder="login email"
          {...getInputProps("user")}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <TextInput
          mt="sm"
          type="password"
          label="Password"
          autoComplete="false"
          placeholder="password"
          icon={<FontAwesomeIcon icon={faLock} />}
          {...getInputProps("password")}
        />

        <Group position="center" mt="4rem">
          <Button type="submit" px={50}>
            Sign in
          </Button>
        </Group>
      </Stack>

      <Text size="sm" mt={"lg"}>
        <FontAwesomeIcon icon={faKey} style={{ paddingRight: "0.5rem" }} />
        Don't have an account?
        <Text<typeof Link>
          underline
          size="sm"
          pl={"3px"}
          to="/signup"
          color="#228be6"
          component={Link}
        >
          Sign up
        </Text>
      </Text>
    </form>
  );
}
