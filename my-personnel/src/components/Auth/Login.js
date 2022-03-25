import React, { useState } from "react";
import Input from "../AppUtils/Input";
import ButtonSubmit from "../AppUtils/ButtonSubmit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-full flex flex-col justify-center">
      <form className="border-4 border-sky-500 rounded-lg p-16 container mx-auto flex flex-col justify-center items-stretch">
        <h1 className="text-3xl mb-6">Welcome Back</h1>
        <Input
          value={email}
          name={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <Input
          value={password}
          name={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <ButtonSubmit text={"Log In"} width={"w-1/2"} space={true} />
      </form>
    </div>
  );
};

export default Login;
