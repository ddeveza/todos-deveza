import { Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { formPaperStyleAddEdit } from "./styles";

export default function AddEditLayout() {
  return (
    <Paper withBorder shadow={"md"} sx={formPaperStyleAddEdit}>
      <Outlet />
    </Paper>
  );
}
