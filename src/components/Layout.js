import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.scss";
import ButtonUp from "./Button-Up";


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
            <ButtonUp/>
            <Footer/>
        </>
    );
};

export default Layout;
