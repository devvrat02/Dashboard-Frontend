import { col } from "../../type";
import { fake } from "../../utils/fake";
import style from "./style.module.css"
import { PiFileTextLight } from "react-icons/pi";
function InvoiceHistory() {
    const transactionValues:any=fake({limit:5})
    const columns:col[]=[
        {
            label:'Name',
            field: 'name',
            className:'px-6 py-3',
        },    
        {
            label:'Date',
            field: 'orderDate',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                        {rowdata.orderDate.toUTCString()}
                    </div>
                )
            }
        },
        {
            label:'Order Id',
            field: 'orderid',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                        #{rowdata.orderid}
                    </div>
                )
            }
        },
        {
            label:'Transaction Type',
            field: 'payment',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                        {rowdata.payment}
                    </div>
                )
            }
        },
        {
            label:'Amount',
            field: 'prices',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                        ${rowdata.prices}
                    </div>
                )
            }
        },
        {
            label:'Invoices',
            field: 'invoice',
            className:'px-3 py-3 flex items-center justify-center',
            render:(rowdata)=>{
                return (
                    <div className="flex items-center justify-center cursor-pointer">
                        <div className="flex flex-row items-center text-center justify-center rounded-md border border-solid  p-2 border-green-600">
                            <div className="p-1">
                                <PiFileTextLight fill="rgb(22 163 74 / var(--tw-border-opacity))"/>

                            </div>
                            <div className=" text-green-600">
                                Download
                            </div>
                        </div>
                    </div>
                        
                )
            }
        },
    ]

    return ( 
        <div className="w-full rounded-lg my-2">
            <div className="mb-2  font-extrabold text-3xl">
                 Transaction History
            </div>
            <div className={`w-full  relative ${style['cust']} ${style['table-container']}`}>
            <table className="w-full text-sm text-left border-separate border-spacing-y-4" >
                <thead className={`text-xs uppercase bg-white  `}  >
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
                    {transactionValues?.map((item:any,key:number)=>{
                        return (
                            <tr className={`bg-white `} key={key} style={{borderSpacing:'0px 15px'}}>
                                {columns?.map((x:any,index:number)=>{
                                    return (
                                        (x.render===undefined)?
                                        <td key={index} className="px-6 py-4 mt-5" >
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
            </div>
        </div>
     );
}

export default InvoiceHistory;