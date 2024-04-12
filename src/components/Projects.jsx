import { ProjectItem } from './ProjectItem'
import { getAllProjects } from '../slices/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const Projects = () => {
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.todos.projects)

    useEffect(() => {
        const projectsFromLocalStorage = JSON.parse(localStorage.getItem('projects'));
        if (projectsFromLocalStorage) {
          dispatch(getAllProjects(projectsFromLocalStorage));
        }
    }, [dispatch])

    return <div className='px-[50px] fixed top-0 left-0 h-[92vh] w-full mt-[50px] overflow-x-auto'>
        <div className="w-full min-h-[300px] h-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:gap-4">
            {
                projects.map(project => <ProjectItem project={project}/>)
            }
            
        </div>
    </div>
}