import { ThemeProvider } from "next-themes";
import Header from "./Header";
import Footer from "./Footer";

export default async function LocaleLayout({ children, params : {locale}}) {

  return (
    <html>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
