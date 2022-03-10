import React from 'react';
import Nav from './Nav';

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <div>
                <a href="./">
                    <h1>Readme Generator Revisited</h1>
                </a>
            </div>
            <div>
                <Nav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Nav>
            </div>
        </header>
    );
}

export default Header;