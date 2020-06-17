import React from 'react'
import {useHistory} from 'react-router-dom'

const Admin=()=> {
    let history =useHistory();
    return (
        <div>
            <p>You must log in to view the page at /admin</p>
            <button onClick={()=>history.push('/Welcome')}>Log in</button>
        </div>
    )
}

export default Admin
