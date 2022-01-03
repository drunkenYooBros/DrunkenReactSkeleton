import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Http from 'service/Http'
import UserDetail from './userDetail/UserDetail'

function Users () {
    const navigate = useNavigate()
    const [userList, setUserList] = useState([])
    let userListKey: Array<any> = []

    useEffect(() => {
        Http.get('/users')
        .then((res: any) => {
            console.log(res.body.users)
            setUserList(res.body.users)
        })
    }, [])

    if (userList.length === 0) {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td>Empty</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const rowClickHandler = (user: any) => {
        navigate(`/users/${user.id}`)
    }

    userListKey = Object.keys(userList[0])
    const columns = userListKey.map((k) => <th key={k}>{k}</th>)
    const rows = userList.map((user, i) => {
        const td = userListKey.map((key) => <td key={user[key]}>{user[key]}</td>)
        return (
            <tr key={i} onClick={() => rowClickHandler(user)}>
                {td}
            </tr>
        )
    })
    
    return (
        <>
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        {columns}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <Routes>
                <Route path=":id" element={<UserDetail />} />
            </Routes>
        </>
        
    )
}

export default Users
