import { useSelector } from "react-redux"
import Todo from "./Todo"


const TodoList = () => {

    const todoData = useSelector((state:any)=>{
        return state.todo;
    })


  return (
    <div className="p-4 bg-white mt-5 w-[80%] md:w-[50%] lg:w-[50%] rounded-lg shadow">
       {todoData.map((item:string,index:number)=><Todo todo={item} index={index}/>)}
    </div>
  )
}

export default TodoList