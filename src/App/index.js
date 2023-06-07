import theme from "./theme";
import Router from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom/dist";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Router}></RouterProvider>
    </ThemeProvider>
  );
}
