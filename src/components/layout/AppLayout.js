import Header from "components/layout/header";
import { DarkModeProvider } from "context/DarkModeProvider";
import Footer from "./footer";

const AppLayout = ({ children }) => {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default AppLayout;
