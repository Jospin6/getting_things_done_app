import { useDispatch, useSelector} from 'react-redux'
import { setTaskVisible, deleteProject, setTheSelectedProjectId } from '../slices/todoSlice'
import { TaskItem } from './TaskItem'

export const ProjectItem = (props) => {
    const {project} = props
    const dispatch = useDispatch()

    const deleteAProject = () => dispatch(deleteProject(project.id))

    const handleAddTask = () => {
        dispatch(setTheSelectedProjectId(project.id))
        dispatch(setTaskVisible())
    }

    return <div className="md:col-span-2 col-span-1 min-h-[300px] mt-2 h-auto 
    bg-white rounded-lg relative pb-[40px]">
        <div className="w-full h-[50px] text-center border-b-[1px] 
        border-gray-400 rounded-t-lg text-black leading-[50px] relative">
            <span className="semi-bold text-[20px]"> {project.title} </span>
            <button className="absolute top-0 right-[15px] px-[5px] 
            text-black semi-bold" onClick={deleteAProject}>
                X
            </button>
        </div>
        <div className='w-full h-auto'>
            {
                project.todos.map(todo => <TaskItem todo={todo} projectId={project.id} key={todo.id}/>)
            }
        </div>
        <button className='absolute bottom-0 left-0 h-[40px] bg-green-500
         w-full rounded-b-lg text-white semi-bold' onClick={handleAddTask}>
            Add task
        </button>
    </div>
}