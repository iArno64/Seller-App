import theme from "./theme";
import router from "./router";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// TODO ?? comment ca se comporte avc plusieurs conf api
const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
