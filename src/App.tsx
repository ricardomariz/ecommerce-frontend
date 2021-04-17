import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider >
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
