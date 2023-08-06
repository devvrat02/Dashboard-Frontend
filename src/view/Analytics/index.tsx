import { StaticsGraph, StatCard , SalesGraph, InvoiceTable} from "../../components";
import { props } from "../../type";
import {SlGraph} from 'react-icons/sl'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {PiFileTextLight} from 'react-icons/pi'


function Analytics() {
    const cardsDetail=[
        {
            title:`Customers`,
            Counts:`2,848`,
            icon: ({...item})=><HiOutlineUserGroup {...item}/>,
            change:'positive',
            color:"#ae9582",
            percentage:'6.5%',
        },
        {
            title:`Revenue`,
            Counts:`$2,344`,
            icon: ({...item})=><SlGraph {...item}/>,
            change:'negative',
            color:"#7a9ea9",
            percentage:'6.5%',
        },
        {
            title:`Profit`,
            Counts:`40%`,
            icon: ({...item})=><SlGraph {...item}/>,
            change:'positive',
            color:"#d4a681",
            percentage:'0.5%',
        },        
        {
            title:`Invoices`,
            Counts:`1,162`,
            icon: ({...item})=><PiFileTextLight {...item}/>,
            change:'positive',
            color:"#9ad5c0",
            percentage:'11.5%',
        },
    ]
    return (
        <div className="w-full mb-10">
            <div className="w-11/12 flex flex-row flex-wrap m-auto">
                {cardsDetail.map((data:props,key:number):any=>{
                        return <div key={key} className="w-full md:w-6/12 lg:w-3/12 p-2 mt-2">
                                    <StatCard {...data}/>
                            </div>
                        }
                    )
                }
            </div>
            <div className="w-11/12 flex flex-row flex-wrap m-auto ">
                <div className="w-full lg:w-7/12 flex flex-row p-2">
                    <SalesGraph/>
                </div>
                <div className="w-full lg:w-5/12 flex flex-row p-2">
                    <StaticsGraph/>
                </div>
            </div>
            
            <div className="w-11/12 flex flex-row m-auto p-2 ">
                <InvoiceTable />
            </div>

        </div>
    );
}

export default Analytics;