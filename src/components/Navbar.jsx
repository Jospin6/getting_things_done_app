import { useDispatch, useSelector } from 'react-redux'
import {isVisible, setVisible} from '../slices/todoSlice'
import { CreateProjectPopup } from './CreateProjectPopup'
import { CreateTask } from './CreateTask'

export const Navbar = () => {
    const visible = useSelector(isVisible)
    const dispatch = useDispatch()


    const projectPopupVisibility = () => {
        
    }

    return <div className="w-full h-[50px] bg-blue-500 text-white flex justify-between">
        <div className="h-[50px] leading-[50px] semi-bold verdana pl-10">
            Getting Things Done
        </div>
        <button className="px-[10px] bg-red-500 h-[30px] mt-[10px] mr-[20px] 
        rounded-lg sans-serif text-[15px]" onClick={() => dispatch(setVisible())}>
            New Project
        </button>
        <CreateProjectPopup isVisible={visible}/>
        <CreateTask/>
    </div>
}