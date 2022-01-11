import React, { useCallback, useState } from 'react'
import Input from 'components/Input'

function Login () {
    const loginContainerStyle: any = {
        width: "300px",
        padding: "10px"
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = useCallback((value) => {
        setEmail(value)
    }, [])

    const onChangePassword = useCallback((value) => {
        setPassword(value)
    }, [])

    return (
        <div style={loginContainerStyle}>
            <div className="field">
                <p className="control">
                    <Input type={"email"} placeHolder={"Input Email"} onChange={onChangeEmail} value={email}/>
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <Input type={"password"} placeHolder={"Input Password"} onChange={onChangePassword} value={password}/>
                </p>
            </div>
            <div className="buttons">
                <button className="button is-primary is-fullwidth">Sign In</button>
            </div>
        </div>
    )
}

export default Login