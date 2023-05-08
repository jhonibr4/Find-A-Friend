//
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes.routes";

// Estilização
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/themes/GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
