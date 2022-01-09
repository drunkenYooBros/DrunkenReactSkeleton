import React from "react"
import { useParams } from "react-router-dom"

function UserDetail () {
    console.log(useParams())
    
    return (
        <div>user detail</div>
    )
}

export default UserDetail