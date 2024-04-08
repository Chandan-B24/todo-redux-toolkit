interface ButtonProps {
    children : string,
    className? : string,
    handleClick? : () => void
}


const Button = ({children,className,handleClick}:ButtonProps) => {
  return (
    <button className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={handleClick}>{children}</button>
  )
}



export default Button
