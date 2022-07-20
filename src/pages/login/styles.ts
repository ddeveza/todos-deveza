import { CSSObject } from "@mantine/core";

const mainGroupStyle: CSSObject = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const formPaperStyle = {
  width: "500px",
  height: "550px",
  padding: "4rem",
  margin: "auto",
  marginTop: "10em",
};

const linkStyle = {
  cursor: "pointer",
  "&:hover": { color: "#228be6" },
};

export { formPaperStyle, mainGroupStyle, linkStyle };
