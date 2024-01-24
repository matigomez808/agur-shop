import theme from "theme";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "@Components/Navbar/Navbar";
import Footer from "Components/Footer/Footer";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ES">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Container maxWidth="lg">{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
