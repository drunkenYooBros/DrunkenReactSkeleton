import React from 'react'

function Login () {
    const loginContainerStyle: any = {
        width: "300px",
        padding: "10px"
      }
    return (
        <div style={loginContainerStyle}>
            <div className="field">
                <p className="control">
                    <input className="input" type="email" placeholder="Email" />
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <input className="input" type="password" placeholder="Password" />
                </p>
            </div>
            <div className="buttons">
                <button className="button is-primary is-fullwidth">Sign In</button>
            </div>
        </div>
    )
}

export default Login