import { BsGrid,BsClipboard2Data,BsChatDots,BsFileEarmarkText,BsGraphUp, BsInfoCircle } from "react-icons/bs";
import { BiStore} from "react-icons/bi";
import { RiMoneyDollarBoxLine,RiWallet2Line} from "react-icons/ri";
import {CiDeliveryTruck ,CiSettings} from'react-icons/ci';
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/authSlice";
import { AppDispatch } from "../../store";
import { useAuth } from "../../Context/AuthContext";

function Sidebar({hider=()=>{}}:any) {
    const mainmenu=[
        {
            icon:({ color = "#a98f7a" })=><BsGrid fill={color}/>,
            title:"Dashboard",
            path: [""],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><BsClipboard2Data fill={color}/>,
            title:"Order",
            path: ["order"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><BiStore fill={color}/>,
            title:"Store",
            path: ["store"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><BsChatDots fill={color}/>,
            title:"Message",
            path: ["message"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><BsGraphUp fill={color}/>,
            title:"Statistics",
            path: ["statistics"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><BsFileEarmarkText fill={color}/>,
            title:"Invoices",
            path: ["invoice"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><CiDeliveryTruck fill={color}/>,
            title:"Shipment",
            path: ["shipment"],
            navigate: "/"
        },
        {
            icon:({ color = "#a98f7a" })=><RiMoneyDollarBoxLine fill={color}/>,
            title:"Finances",
            path: ["finance"],
            navigate: "/finance"
        },
    ];
    const menu2=[
        {
            icon:({ color = "#a98f7a" })=><BsInfoCircle fill={color}/>,
            title:"Help & Center",
            path:['help'],
            navigate:'/'
        },
        {
            icon:({ color = "#a98f7a" })=><CiSettings fill={color} size={'1.2rem'}/>,
            title:"Settings",
            path:['setting'],
            navigate:'/setting'
        },
    ]
    const navigate = useNavigate();
    const [head, sethead] = useState([`/`]);
    const location = useLocation();
    useEffect(() => {
      let href =location.pathname
        .split("/")
        .slice(1);
        console.log(href)
        if (href.length > 1) {
          href = href.filter((x) => (x !== ""))
        }

      sethead(href);
    }, [location.pathname]);
    const nav = (path:string) => {
        hider(false)
      navigate(path);
    };
    const includes = (x:any) => {
        // console.log(x)
        for (let i = 0; i < x.length; i++) {
          if (head.includes(x[i])) {
            return true;
          }
        }
        return false;
      };
    const {setisLoggedIn}:any=useAuth()
    const dispatch = useDispatch<AppDispatch>()
    const userLogout=()=>{
        dispatch(logout()).unwrap().then(()=>{   setisLoggedIn(false)  
            navigate('/');}
        )
    }

    return ( 
        <div className=" bg-secondary w-full justify-center p-4">
            <div className="w-full justify-center flex p-2 text-primary font-bold mb-2 cursor-pointer">
                BRANDING
            </div>
            <div className="w-full justify-center flex flex-col">
                <div className="w-full justify-start flex flex-col pt-2 text-ternary">MAIN MENU</div>
                <div className="w-full justify-center flex flex-col">
                    {mainmenu.map((x)=>{
                        const Icon=x.icon
                        return <div className={`flex flex-row p-2 items-center rounded-lg cursor-pointer ${includes(x.path)?` bg-primary text-white `:``}`} onClick={()=>{nav(x.navigate)}}  > 
                            <div className="m-2"><Icon color={includes(x.path)?`#fff`:`#a98f7a`}/></div>
                            <div className={`m-1 ${includes(x.path)?` bg-primary text-white `:`text-ternary`} `}>{x.title}</div>
                        </div>;
                    })
                    }
                </div>
                <div className="w-full justify-start flex flex-col pt-4 text-ternary">HELP & SUPPORT</div>
                <div className="mt-2">
                    {menu2.map((x,key)=>{
                            const Icon=x.icon
                            return <div className={`flex flex-row p-2  items-center cursor-pointer rounded-lg ${includes(x.path)?` bg-primary text-white `:``}`} key={key} onClick={()=>{nav(x.navigate)}}  > 
                                <div className="m-2"><Icon color={includes(x.path)?`#fff`:`#a98f7a`}/></div>
                                <div className={`m-1 ${includes(x.path)?` bg-primary text-white `:`text-ternary`}`}>{x.title}</div>
                            </div>;
                        })
                        }
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center bg-screenbg mt-4 p-2 rounded-lg cursor-pointer">
                    <div className="p-2">
                        <RiWallet2Line fill="#a98f7a" size={'1.5em'}/>
                    </div>
                    <div className="flex flex-col pl-2">
                        <div className=" font-light text-sm pb-1 ">
                            Current Balance
                        </div>
                        <div className="w-full justify-start flex flex-col  text-ternary">
                            $12,848
                        </div>
                    </div>
                </div>
                <div className="w-full justify-start flex flex-row items-center pt-2 text-ternary cursor-pointer" onClick={userLogout}>
                   <div className="p-2">
                       <FiLogOut size={'1.5em'}/>
                   </div>               
                   <div>
                     LOGOUT
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;