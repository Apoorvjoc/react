import React from 'react'
import {NavLink} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Error = () => {
    const history = useHistory();
    return (
        <>
           <h1> Error 404 page not found</h1>
           <p>The page you are looking for might have been removed or is temporarily unavailable</p>
            <button type="button"  className="btn btn-outline-info btn-lg"  onClick={() => history.goBack()}> Go Back</button>
        </>
    )
}

export default Error
