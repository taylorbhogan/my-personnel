import React, { useState } from "react";
import Button from "../AppUtils/Button";
import Form from "../AppUtils/Form";
import Input from "../AppUtils/Input";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-full flex items-center justify-center">
      <Form options={"basis-1/3"}>
        <Input
          value={email}
          name={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          name={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text={"Sign Up"}
          options={"w-1/2"}
          type={"submit"}
          spaceAndCenter={true}
        />
      </Form>
    </div>
  );
};

export default Signup;
