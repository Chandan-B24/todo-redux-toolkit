import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button/Button"
import Heading from "../../components/Heading/Heading"
import Input from "../../components/Input/Input"
import TodoList from "../../components/TodoList/TodoList"
import { addTodo } from "../../store/slices/todoSlice"
import { useState } from "react"


const Todo = () => {

  const [todo,setTodo] = useState<string>('')
  const dispatch = useDispatch();

  const todoData = useSelector((state:any)=>{
    return state.todo;
  })

  const handleChange = (value:string) => {
    setTodo(value);
  }

  const handleClick = () => {
    dispatch(addTodo(todo))
    setTodo(' ')
  }

  return (
    <div className="w-full h-[100vh] bg-gray-100 flex flex-col justify-center items-center">
        <Heading>To do App</Heading>
        <div className="mt-5 flex justify-between items-center gap-5 w-[80%] md:w-[50%] lg:w-[50%]">
            <Input type="text" placeholder="enter you task" onChange={handleChange} value={todo}/>
            <Button handleClick={handleClick}>Add</Button>
        </div>
        {todoData.length > 0 && <TodoList/>}
    </div>
  )
}

export default Todo