import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

type Props = {
  children: React.ReactNode;
};

export default function CommonProviders({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
