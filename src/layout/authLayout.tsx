import { Paper, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { formPaperHeadingStyle, formPaperStyle } from "./styles";

export default function AuthLayout({ pathname }: { pathname: string }) {
  return (
    <Paper withBorder shadow={"md"} sx={formPaperStyle}>
      <Title align="center" order={1} style={formPaperHeadingStyle}>
        {pathname === "/signup" ? "Sign Up" : "Account Login"}
      </Title>
      <Outlet />
    </Paper>
  );
}
