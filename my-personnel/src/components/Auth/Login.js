import React, { useState } from "react";
import Input from "../AppUtils/Input";
import ButtonSubmit from "../AppUtils/ButtonSubmit";

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <form className="h-full flex flex-col justify-center items-center">
      <h1>Login</h1>
      <Input
        value={email}
        name={'Email'}
        onChange={e => setEmail(e.target.value)}
        required={true}
      />
      <Input
        value={password}
        name={'Password'}
        onChange={e => setPassword(e.target.value)}
        required={true}
      />
      <ButtonSubmit />
    </form>
  )
}

export default Login;
