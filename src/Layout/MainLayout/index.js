import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="container">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
