import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul>
                <li className={currentPage === 'about' ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage('about')}>About</span>
                </li>
                <li className={currentPage === 'contact' ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage('contact')}>Contact</span>
                </li>
                <li className={currentPage === 'display' ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage('display')}>Display</span>
                </li>                
            </ul>
        </nav>
    );
}

export default Nav;
