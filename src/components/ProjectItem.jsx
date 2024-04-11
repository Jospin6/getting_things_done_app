import { useDispatch, useSelector} from 'react-redux'
import { TaskItem } from './TaskItem'

export const ProjectItem = () => {
    return <div className="md:col-span-2 col-span-1 min-h-[300px] mt-2 h-auto 
    bg-white rounded-lg relative pb-[40px]">
        <div className="w-full h-[50px] text-center border-b-[1px] 
        border-gray-400 rounded-t-lg text-black leading-[50px] relative">
            <span className="semi-bold text-[20px]">My Project name</span>
            <button className="absolute top-0 right-[15px] px-[5px] text-black semi-bold">X</button>
        </div>
        <TaskItem/>
        <TaskItem/>
        <button className='absolute bottom-0 left-0 h-[40px] bg-green-500 w-full rounded-b-lg text-white semi-bold'>Add task</button>
    </div>
}