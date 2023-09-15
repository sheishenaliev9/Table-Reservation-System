import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;