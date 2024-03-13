import React from 'react';

function Header(props) {
    return (
        <div>
            Hello World!
            <div> {import.meta.env.VITE_API_URL}</div>
        </div>
    );
}

export default Header;