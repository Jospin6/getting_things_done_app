import { ProjectItem } from './ProjectItem'
export const Projects = () => {
    return <div className='px-[50px] fixed top-0 left-0 h-[92vh] w-full mt-[50px] overflow-x-auto'>
        <div className="w-full min-h-[300px] h-auto grid grid-cols-6 gap-4">
            <ProjectItem/>
        </div>
    </div>
}