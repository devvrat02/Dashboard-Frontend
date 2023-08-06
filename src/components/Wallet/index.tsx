import { BsArrowRight } from "react-icons/bs";
import { RiWallet2Line } from "react-icons/ri";

function Wallet() {
    return (
         <div className="w-full p-3 pl-0 rounded-lg my-2">
            <div>
                <div className={` font-extrabold text-3xl`}>
                    My Wallet
                </div>
                <div className="flex flex-col w-full md:w-8/12 lg:w-3/12 bg-white mt-4 p-4 rounded-lg">
                    <div className="flex flex-row items-center ">
                        <div className="p-2 rounded-md cursor-pointer" style={{background:`#63483225`}} >
                            <RiWallet2Line fill="#a98f7a" size={'1.5em'}/>
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className=" font-light text-lg pb-1 ">
                                Current Balance
                            </div>
                            <div className="w-full justify-start flex flex-col text-lg  text-ternary">
                                $12,848
                            </div>
                        </div>
                    </div>
                    <div className=" flex p-2 rounded-lg mt-2 w-full justify-between cursor-pointer items-center bg-primary">
                        <div className=" text-white">
                            Withdraw Money
                        </div>
                        <div className="">
                            <BsArrowRight fill="#fff" size={"1.3rem"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Wallet;