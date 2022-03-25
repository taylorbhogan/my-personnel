import ButtonSubmit from "../AppUtils/ButtonSubmit";
import Input from "../AppUtils/Input";

const Signup = () => {
  return (
    <div>
      <form>
        <Input />
        <Input />
        <ButtonSubmit text={"Sign Up"} width={"w-1/2"} space={true}/>
      </form>
    </div>
  )
}

export default Signup;
