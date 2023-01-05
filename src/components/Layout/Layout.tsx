import React from 'react';
import css from "./Layout.module.css"
import Header from "../Header";
import Footer from "../Footer";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header />

            <main className={css.main}>
                {children}
            </main>

            <Footer />
        </>
    );
};

export default Layout;
