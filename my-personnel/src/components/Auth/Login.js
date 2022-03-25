import React, { useState } from "react";
import Input from "../AppUtils/Input";
import Button from "../AppUtils/Button";
import Form from "../AppUtils/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-full flex items-center justify-center">
      <Form options={"basis-1/3"}>
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
        <Button
          text={"Log In"}
          options={"w-1/2"}
          type={"submit"}
          spaceAndCenter={true}
        />
      </Form>
    </div>
  );
};

export default Login;
