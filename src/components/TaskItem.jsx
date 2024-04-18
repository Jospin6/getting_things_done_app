import { useDispatch } from 'react-redux'
import { deleteTask, completedTask } from '../slices/todoSlice'

export const TaskItem = (props) => {
    const { projectId, todo } = props
    const dispatch = useDispatch()

    const deleteATask = () => dispatch(deleteTask({projectId: projectId, taskId: todo.id}))
    const completeTask = () => dispatch(completedTask({projectId: projectId, taskId: todo.id}))

    let mainStle = "w-full h-[auto] border-l-[2px] border-b-[1px] p-2"
    let completeBtn = "px-[10px] py-[2px] text-[13px] rounded-lg"

    return <div className={!todo.done ? mainStle.concat(" border-gray-400") : mainStle.concat(" border-green-400")}>
        <div className="border-b-[1px] border-gray-400 h-[40px] text-[17px] semi-bold">
            { todo.title }
        </div>
        <div className="pt-2 text-[14px]">
            <div> { todo.description } </div>
            <div> { todo.date } </div>
        </div>
        <div>
            <button className="px-[10px] py-[2px] bg-red-500 text-white 
            rounded-lg mr-2 text-[13px]" onClick={deleteATask}>
                Delete
            </button>
            <button className={!todo.done 
                ? completeBtn.concat(" bg-gray-300 text-gray-600") 
                : completeBtn.concat(" bg-green-500 text-white")} 
                onClick={completeTask}>
                {!todo.done ? "Complete" : "Completed"}
            </button>
        </div>
    </div>
}