import React, {useState} from 'react';
import FormikLoginForm from "./components/Form"
import {User} from "./components/User"


function App() {
    const initialState=[
        {name: " ", email: " ", password: " ", tos:false},
    ]
    const [users, setUsers]=useState( initialState );
    return (
        <div className="App" >
            <header className="App-header" >
                <FormikLoginForm users={users}
                    setUsers={setUsers} />
                <User users={users} /> </header>
        </div>
    );
}

export default App;