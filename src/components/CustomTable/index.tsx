type col={
    label:string,
    field:string,
    className:string,
    render?:(rowdata:any)=>JSX.Element,
}
interface prop{
    columns?:col[],
    data?:[{}],
    rowCss?:string,
    headCss?:string,
    rowStyle?:object,
    colStyle?:object,
}
function CustomTable({columns,data,rowCss,headCss,rowStyle,colStyle}:prop) {
    return (
        <table className="w-full text-sm text-left ">
        <thead className={`text-xs uppercase ${headCss}`} style={{...colStyle}} >
            <tr>
                {columns?.map((x:any,key:any)=>{
                    return (
                        <th key={key} scope="col" className={`px-6 py-3 ${x.className}`}>
                            {x.label}
                        </th>
                    )

                })}
            </tr>
        </thead>
        <tbody>
            {data?.map((item:any,key:number)=>{
                return (
                    <tr className={`${rowCss}`} style={{...rowStyle}}>
                        {columns?.map((x,index)=>{
                            return (
                                (x.render===undefined)?
                                <td key={index} className="px-6 py-4">
                                    {item[`${x.field}`]}
                                </td>:<td key={index}>
                                 {x?.render(item)}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
        </table>
    );
}

export default CustomTable;