import { ChangeEvent } from "react"

interface InputProps {
    type : string,
    placeholder : string,
    className ? : string,
    value ? :string,
    onChange : (value : string) => void
}

const Input = ({type,placeholder,className,value,onChange}:InputProps) => {

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

  return (
    <input type={type} placeholder={placeholder} className={`${className} block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500`} value={value} onChange={handleChange}/>
  )
}

export default Input