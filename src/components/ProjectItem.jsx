export const ProjectItem = () => {
    return <div className="md:col-span-2 col-span-1 min-h-[300px] mt-2 h-auto 
    bg-white rounded-lg flex justify-center">
        <div className="w-full h-[50px] text-center border-b-[1px] 
        border-gray-400 rounded-t-lg text-black leading-[50px] relative">
            <span className="font-bold">My Project name</span>
            <button className="absolute top-0 right-[15px] text-black">ico</button>
        </div>

    </div>
}