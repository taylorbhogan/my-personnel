const EmployeeLink = ({ employee }) => {
  return (
    <a
      style={{"display": "block"}}
      href={`/employees/${employee._id}`}
    >
      {employee._id}
    </a>
  )
}

export default EmployeeLink;
