import style from "./header.module.css"
import { IoEarthOutline } from "react-icons/io5";

function Header() {
  return (
    <div className={style.container}>
  
    <IoEarthOutline className={style.icon}/>
        <h1 className={style.title}>Travel Journal</h1>
       </div>
  )
}

export default Header