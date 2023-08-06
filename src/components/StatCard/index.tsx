import { props } from "../../type";
function StatCard(data:props|null) {
    let Icon:any=data?.icon
    return (
    <div className="w-full bg-white p-3 rounded-lg ">
        <div className="flex flex-row justify-between">
            <div className={`pl-2 border-l-4 mb-1`}   style={{borderColor:`${data?.color}`}} >
                <div className=" font-medium">{data?.title}</div>
                <div className=" font-semibold text-2xl" style={{color:`${data?.color}`}}>{data?.Counts}</div>
            </div>
            <div style={{background:`${data?.color}25`}} className="h-full p-1 m-2 rounded-sm">
                <Icon color={data?.color} size={'1.2rem'}/>
            </div>
        </div>
        <div>
            <span style={{color:`${data?.color}`}} className="p-2 pl-0 pt-3">{data?.change==='positive'?<>&#8593; +</>:<>&#8595; -</>}{data?.percentage} </span><span> Since last week</span>
        </div>
    </div>  
    );
}

export default StatCard;