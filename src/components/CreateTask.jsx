import { useState } from "react"

export const CreateTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)

    return <div className="balck-opacity w-full h-[100vh] fixed right-0 top-0">
        <div className="w-[300px] h-[350px] mt-[150px] bg-white rounded-lg m-auto">
            <div className="rounded-t-lg border-b-[1px] border-gray-200 pb-2">
                <div className="w-full h-[40px] rounded-t-lg text-center leading-[40px] semi-bold 
                text-[20px] relative">
                    <span>New Task</span>
                    <button className="absolute right-[15px] px-2 text-[16px] top-0">X</button>
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
                pl-2 outline-none" />
            </div>
            <div className="w-full pt-2 px-4">
                <input type="checkbox" id="priority" className="border-[1px] mr-2 border-gray-400 
                rounded-lg pl-2 outline-none" />
                <label htmlFor="priority">High priority ?</label>
            </div>
            <div className="w-full px-4">
                <input type="checkbox" id="done" className="border-[1px] mr-2 border-gray-400 rounded-lg 
                pl-2 outline-none" />
                <label htmlFor="done">Done ?</label>
            </div>
            <div className="w-full flex justify-center pt-4">
                <button className="bg-green-500 px-[20px] py-[5px] semi-bold 
                text-white rounded-lg text-[15px]">
                    Submit the task
                </button>
            </div>
        </div>
    </div>
}