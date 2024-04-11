import { useSelector} from 'react-redux'

export const AddProject = (props) => {
    const {} = props
    return <div className="w-[300px] h-[200px] mt-[150px] bg-white rounded-lg m-auto">
        <div className="rounded-t-lg border-b-[1px] border-gray-200 pb-2">
            <div className="w-full h-[40px] rounded-t-lg text-center leading-[40px] semi-bold text-[20px] relative">
                <span>New Project</span>
                <button className="absolute right-[15px] px-2 text-[16px] top-0">X</button>
            </div>
            <div className="text-[14px] text-gray-400 text-center">
                Start a new project
            </div>
        </div>
        <div className="w-full p-2">
            <input type="text" className="w-full h-[35px] border-[1px] border-gray-400 rounded-lg pl-2 outline-none" 
            placeholder="Name your project" />
        </div>
        <div className="w-full flex justify-center pt-2">
            <button className="bg-green-500 px-[20px] py-[5px] semi-bold text-white rounded-lg text-[15px]">
                Create Project
            </button>
        </div>
    </div>
}