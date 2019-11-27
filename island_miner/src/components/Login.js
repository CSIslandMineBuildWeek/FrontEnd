import React, {useState} from 'react'
import "./CSS/Main.css";


export default function Login() {
    const[token, setToken] = useState("")

    return (
      <div className="login-form-container">
        <form className="login-form">
          <p className="title">• ISLAND MINER •</p>
            <input
              className="input-login"
              type="text"
              name="name"
              value={token}
              onChange={ (event) => {
                setToken(event.target.value)
              }}/>
            <button
              onClick={ () => {
                localStorage.setItem('token', token)
              }}>Login
            </button>
        </form>
      </div>
    )
}