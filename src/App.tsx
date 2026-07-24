import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </ThemeProvider>
  );
}
