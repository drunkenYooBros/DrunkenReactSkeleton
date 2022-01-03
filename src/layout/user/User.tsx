import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function User () {
    return (
        <div className="buttons">
            <a className="button is-primary">
                <strong>Sign up</strong>
            </a>
        
            <Link className="button is-light active-menu" to="/login">Sign in</Link>
        </div>
    )
}

export default User