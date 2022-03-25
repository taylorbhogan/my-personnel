import Button from "../AppUtils/Button";
import Input from "../AppUtils/Input";

const Signup = () => {
  return (
    <div>
      <form>
        <Input />
        <Input />
        <Button
          text={"Sign Up"}
          options={"w-1/2"}
          type={"submit"}
          spaceAndCenter={true}
        />
      </form>
    </div>
  );
};

export default Signup;
