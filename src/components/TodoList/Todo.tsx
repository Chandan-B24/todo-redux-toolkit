import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/slices/todoSlice";

interface TodoProps {
    index : number,
    todo : string
}


const Todo = ({index,todo}:TodoProps) => {
    const dispatch = useDispatch();
    
    const handleDelete = (id:number) => {
        dispatch(removeTodo(id))
    }
  return (
    <div className="mb-6">
        <div className="flex justify-between items-center px-4">
            <span className="text-gray-500">
                    {todo}
            </span>
            <button className="text-red-500" onClick={()=>handleDelete(index)}><MdDelete/></button>
        </div>
        <hr className="bg-black mt-1"/>
    </div>
  )
}

export default Todo