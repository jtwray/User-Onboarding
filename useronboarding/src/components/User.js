import React from "react"

export function User( {users} ) {
    return (
        <>
            {users.map( ( u, index ) => (
                <div key={index}>
                    <h2>
                    {u.name!=" "? <li> {u.name}</li> : <li>incomplete</li>}
                    </h2>
                    <ul>
                        {u.email!=" "? <li> {u.email}</li>:<li>incomplete</li>}
                        {u.tos? <li> Terms of Service Accepted</li>:<li>Terms of Service incomplete</li>}
                    </ul>
                </div> ) )}
        </>
    )
}