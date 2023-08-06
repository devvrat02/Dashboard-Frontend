import {InvoiceHistory,Wallet} from "../../components";

function Finance() {
    return ( 
    <div className="w-full ">
        <div className="w-11/12 flex flex-row m-auto">
            <Wallet/>
        </div>
        <div className="w-11/12 flex flex-row m-auto">
            <InvoiceHistory/>
        </div>
    </div> 
    );
}

export default Finance;