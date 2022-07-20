import { faLock, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../api/authApit";
import { useRegistrationForm } from "./hooks";

export default function Signup() {
  const navigate = useNavigate();
  const { getInputProps, onSubmit } = useRegistrationForm();

  const handleSubmit = async (value: any) => {
    const response = await Auth.signup(value);
    if (response) {
      alert("Registered Succesfully");
      navigate("/", { replace: true });
    }
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
          label="Email"
          type="email"
          placeholder="login email"
          {...getInputProps("email")}
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
            Register
          </Button>
        </Group>
      </Stack>
      <Text size="sm" mt={"lg"}>
        <FontAwesomeIcon icon={faSignIn} style={{ paddingRight: "0.5rem" }} />
        Already have an account?
        <Text<typeof Link>
          component={Link}
          to="/"
          underline
          size="sm"
          color="#228be6"
          pl={"3px"}
        >
          Sign in
        </Text>
      </Text>
    </form>
  );
}
