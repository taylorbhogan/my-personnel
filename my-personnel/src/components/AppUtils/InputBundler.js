// To implement, wrap each Input component in a FlexCol component with options={"basis-full"}

const InputBundler = ({children}) => {
  return (
    <div className="basis-full flex">
      {children}
    </div>
  )
}

export default InputBundler;
