import { fake } from "../../utils/fake";
import CustomTable from "../CustomTable";
import {col} from "../../type/index"
function InvoiceTable() {
    const invoiceValues:any=fake({limit:5})
    const columns:col[]=[
        {
            label:'No',
            field: 'no',
            className:'px-6 py-3',
        },
        {
            label:'Id Customers',
            field: 'id',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                        #{rowdata.id}
                    </div>
                )
            }
        },
        {
            label:'Customers Name',
            field: 'name',
            className:'px-6 py-3',
        },
        {
            label:'Items Name',
            field: 'itemsName',
            className:'px-6 py-3',
            render:(rowdata)=>{
                return (
                    <div className="px-6 py-3">
                       1 x {rowdata.itemsName}
                    </div>
                )
            }
        },
        {
            label:'Order Date',
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
            label:'Status',
            field: 'status',
            className:'px-6 py-3',
            render:(rowdata)=>{
                let color:any={
                    'paid':'text-cpaid',
                    'pending':'text-cpend',
                    'overdue':'text-cover'
                }
                let bgcolor=(rowdata.status==='paid')?`#ddf2e2`:(rowdata.status==='pending')?`#fef2eb`:`#fde7e7`;
                return (
                    <div className="flex items-center justify-center">
                        <div className={`px-2 py-2 rounded-3xl w-40 flex items-center justify-center capitalize	  ${color[rowdata.status]} `} style={{background:bgcolor}} >
                            {rowdata.status}
                        </div>
                    </div>
                )
            }
        },
        {
            label:'Prices',
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
    ]


    return ( 
    <div className="w-full bg-white p-3 rounded-lg my-2">
        <div className="text-md uppercase">
          Recent Invoices
        </div>
        <div>
        <div className="relative overflow-x-auto ">
            <CustomTable columns={columns} data={invoiceValues} />
        </div>
        </div>
    </div> 
    );
}

export default InvoiceTable;