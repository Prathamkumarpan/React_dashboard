import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFound = () =>{
    return(
        <div class="errorPage">
            <h1>404 - Page Not Found</h1>
            <NavLink to="/" className="link">Go Home</NavLink>
        </div>
    )
}

export default NotFound;