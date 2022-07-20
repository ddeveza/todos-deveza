import { CSSObject, TextInputStylesNames } from "@mantine/core";
import { CSSProperties } from "react";

export const textInputStyle: Partial<Record<TextInputStylesNames, CSSObject>> =
  {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "30rem",
      position: "relative",
      height: "3rem",
    },

    error: {
      position: "absolute",
      bottom: -15,
      right: 0,
      width: "13rem",
      textAlign: "center",
    },
  };

export const errorStyle: Partial<Record<TextInputStylesNames, CSSObject>> = {
  root: {
    position: "relative",
  },
  error: {
    position: "absolute",
    bottom: -26,
    left: 0,
  },
  input: {
    width: "30rem",
  },
};
export const container: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
};

export const container_send_verification: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "10rem",
  height: "100vh",
};

export const container_confirmation: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "10rem",
  height: "100vh",
};
