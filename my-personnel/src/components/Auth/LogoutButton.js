import { useNavigate } from "react-router-dom"

const LogoutButton = ({setEmployees}) => {
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.clear()
    setEmployees({})
    navigate('/')
  }


  return (
    <button
      className="absolute top-0 right-0 m-6 border-2 rounded-lg px-3 py-1 border-red-700 hover:bg-red-700 hover:text-black"
      onClick={handleLogout}
    >Log Out</button>
  )
}

export default LogoutButton;
