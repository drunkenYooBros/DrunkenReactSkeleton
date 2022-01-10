import withFetchData from 'helpers/withFetchData'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import UserDetail from './userDetail/UserDetail'

function Users ({data, loading}: {data: Array<any>, loading: boolean}) {
    const navigate = useNavigate()
    const userList: Array<any> = data
    let userListKey: Array<any> = []

    if (loading) {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td></td>
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

export default withFetchData(Users, '/users')
