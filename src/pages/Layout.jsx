import React from 'react';
import Header from '../Components/Header/Header';
import FooterComponent from '../Components/Footer';


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                {children}
            <FooterComponent />
        </div>
    );
};

export default Layout;
