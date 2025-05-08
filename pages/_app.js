import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";  // Import the Layout component
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;