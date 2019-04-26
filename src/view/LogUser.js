import React from "react";

const LogUser = ({ username, password, onLogIn, onChange }) => (
    <div>
        <h2>Log in</h2>
        <div>
            <label>Username: </label>
            <input value={username} 
                onChange={ e => onChange("id", e.target.value) } />
            <br />
            <label>Password: </label>
            <input value={password} 
                onChange={ e => onChange("pass", e.target.value) } />
            <br />
            <button onClick={onLogIn}>Log in!</button>
        </div>
    </div>
);

export default LogUser;