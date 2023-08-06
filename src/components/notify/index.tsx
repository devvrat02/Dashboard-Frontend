
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import styles from "./style.module.css";

const notify = ({title='',message='',success=true}:any) =>
  toast.custom(
    (t) => (
      <div className={`${styles[`notificationWrapper`]} ${success?` bg-green-400 `: `bg-red-400 ` } bg-opacity-50 ${t.visible ? "top-0" : "-top-96"}`}>
        <div className={`${styles["contentWrapper"]} `}>
          <h1 className="font-semibold">{title} </h1>
          <p className=" font-medium">
            {message}
          </p>
        </div>
        <div className={`${styles['closeIcon']}`} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-right" }
  );

  
export default notify;