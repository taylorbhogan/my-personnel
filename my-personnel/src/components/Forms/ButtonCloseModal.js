import { GrClose } from "react-icons/gr";


const ButtonCloseModal = ({setShowModal}) => {
  return (
    <button
    onClick={() => setShowModal(false)}
    className="absolute top-0 right-0 m-4"
  >
    <GrClose />
  </button>
  )
}

export default ButtonCloseModal;
