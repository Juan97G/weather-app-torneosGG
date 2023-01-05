import React from 'react';
import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>WEATHER APPLICATION</h1>
        </div>
    );
};

export default Header;
