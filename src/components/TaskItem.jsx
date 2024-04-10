
export const TaskItem = (props) => {
    const {} = props
    return <div className="w-full h-[auto] border-l-[2px] border-b-[1px] border-gray-400 p-2">
        <div className="border-b-[1px] border-gray-400 h-[40px] text-[17px] semi-bold">
            Task title
        </div>
        <div className="pt-2 text-[14px]">
            <div>task description</div>
            <div>2024-01-11</div>
        </div>
        <div>
            <button className="px-[10px] py-[2px] bg-red-500 text-white rounded-lg mr-2 text-[13px]">
                Delete
            </button>
            <button className="px-[10px] py-[2px] text-[13px] bg-gray-300 rounded-lg text-gray-600">
                Complete
            </button>
        </div>
    </div>
}