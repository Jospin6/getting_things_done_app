import { ProjectItem } from './ProjectItem'
import {CreateTask} from './CreateTask'
export const Projects = () => {
    return <div className='px-[50px] fixed top-0 left-0 h-[92vh] w-full mt-[50px] overflow-x-auto'>
        <div className="w-full min-h-[300px] h-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:gap-4">
            <ProjectItem/>
            <CreateTask/>
        </div>
    </div>
}