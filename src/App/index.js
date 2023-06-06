import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Button>Kick Me</Button>
    </ThemeProvider>
  );
}
