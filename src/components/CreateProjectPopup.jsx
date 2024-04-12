import { AddProject } from './AddProject'
export const CreateProjectPopup = (props) =>{
    const {isVisible} = props
    let style = "balck-opacity w-full h-[100vh] fixed left-0 z-10 top-0"
    return <div className={isVisible ? style : style.concat(" hidden")}>
        <AddProject/>
    </div>
}