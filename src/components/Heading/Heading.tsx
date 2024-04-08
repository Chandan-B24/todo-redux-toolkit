interface HeadingProps {
    children : string,
    className ? : string,
}

const Heading = ({children,className}:HeadingProps) => {
  return (
    <h1 className={`${className} font-semibold font-poppins text-4xl`}>{children}</h1>
  )
}

export default Heading