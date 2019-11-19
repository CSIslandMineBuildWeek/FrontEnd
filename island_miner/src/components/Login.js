import React, {useState} from 'react'

export default function Login() {
    const[token, setToken] = useState("")

    return (
        <form>
            <input
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
    )
}