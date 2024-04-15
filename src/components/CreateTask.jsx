import { useState } from "react"
import { isTaskVisible, setTaskVisible, addTask} from '../slices/todoSlice'
import { useDispatch, useSelector} from 'react-redux'

export const CreateTask = ({id}) => {
    const istaskVisible = useSelector(isTaskVisible)
    const dispatch = useDispatch()
    const projectId = id

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [priorityChecked, setPriorityChecked] = useState(false)
    const [doneChecked, setDoneChecked] = useState(false)

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleDateChange = (e) => setDate(e.target.value)
    const togglePriorityChecked = () => setPriorityChecked(!priorityChecked)
    const toggleDoneChecked = () => setDoneChecked(!doneChecked)

    const addNewTask = () => {
        if (title != "" && description != "") {
            dispatch(addTask(
                {
                    projectId: projectId,
                    todo: {
                    title: title,
                    description: description,
                    date: date,
                    priority: priorityChecked,
                    done: doneChecked
            }}))
            dispatch(setTaskVisible())
        } else {
            console.log("something going wrong !")
        }
    }

    let style = "balck-opacity w-full z-10 h-[100vh] text-black fixed right-0 top-0"

    return <div className={istaskVisible ? style : style.concat(" hidden")}>
        <div className="w-[300px] h-[350px] mt-[150px] bg-white rounded-lg m-auto">
            <div className="rounded-t-lg border-b-[1px] border-gray-200 pb-2">
                <div className="w-full h-[40px] rounded-t-lg text-center leading-[40px] semi-bold 
                text-[20px] relative">
                    <span>New Task</span>
                    <button className="absolute right-[15px] px-2 text-[16px] top-0" 
                    onClick={() => dispatch(setTaskVisible())}>
                        X
                    </button>
                </div>
                <div className="text-[14px] text-gray-400 text-center">
                    Write a new task
                </div>
            </div>
            <div className="w-full py-2 px-4">
                <input type="text" className="w-full h-[35px] border-[1px] border-gray-400 rounded-lg 
                pl-2 outline-none" onChange={handleTitleChange} value={title} placeholder="Title" />
            </div>
            <div className="w-full py-2 px-4">
                <input type="text" className="w-full h-[35px] border-[1px] border-gray-400 rounded-lg 
                pl-2 outline-none" onChange={handleDescriptionChange} value={description} placeholder="Description" />
            </div>
            <div className="w-full py-2 px-4">
                <input type="date" className="w-full h-[35px] border-[1px] border-gray-400 rounded-lg 
                pl-2 outline-none" onChange={handleDateChange} value={date} />
            </div>
            <div className="w-full pt-2 px-4">
                <input type="checkbox" id="priority" className="border-[1px] mr-2 border-gray-400 
                rounded-lg pl-2 outline-none" checked={priorityChecked} onChange={togglePriorityChecked} />
                <label htmlFor="priority">High priority ?</label>
            </div>
            <div className="w-full px-4">
                <input type="checkbox" id="done" className="border-[1px] mr-2 border-gray-400 rounded-lg 
                pl-2 outline-none" onChange={toggleDoneChecked} checked={doneChecked} />
                <label htmlFor="done">Done ?</label>
            </div>
            <div className="w-full flex justify-center pt-4">
                <button className="bg-green-500 px-[20px] py-[5px] semi-bold 
                text-white rounded-lg text-[15px]" onClick={addNewTask}>
                    Submit the task
                </button>
            </div>
        </div>
    </div>
}