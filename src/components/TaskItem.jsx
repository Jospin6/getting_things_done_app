import { useDispatch } from 'react-redux'
import {deleteTask} from '../slices/todoSlice'

export const TaskItem = (props) => {
    const { projectId, todo } = props
    const dispatch = useDispatch()

    const deleteATask = () => dispatch(deleteTask({projectId: projectId, taskId: todo.id}))

    return <div className="w-full h-[auto] border-l-[2px] border-b-[1px] border-gray-400 p-2">
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
            <button className="px-[10px] py-[2px] text-[13px] bg-gray-300 rounded-lg text-gray-600">
                Complete
            </button>
        </div>
    </div>
}