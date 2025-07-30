import { DarkModeProvider } from "context/DarkModeProvider";
import Footer from "./footer";
import Header from "./header";
import { Navigation } from "./Navigation";

const AppLayout = ({children}) => {

    return (
        <DarkModeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <Navigation />
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </DarkModeProvider>
    );

};

export default AppLayout;
