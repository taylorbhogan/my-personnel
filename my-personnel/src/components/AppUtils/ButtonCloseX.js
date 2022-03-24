import { GrClose } from "react-icons/gr";

const ButtonCloseX = ({ setFunction }) => {
  return (
    <button
      onClick={() => setFunction(false)}
      className="absolute top-0 right-0 m-4"
    >
      <GrClose />
    </button>
  );
};

export default ButtonCloseX;
