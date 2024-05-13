
import style from "./cardlist.module.css"
import { MdLocationPin } from "react-icons/md";


export default function CardList(props) {
  return (
    <div className={style.container}>
    <div className={style.image}>
    <img src={props.imageUrl} alt="" />
    </div>
    <div className={style.another_container}>

      <span className={style.country}>
      <MdLocationPin className={style.icon} />
        {props.location}
      <a href={props.googleMapsUrl}>     View on Google Maps</a>
      </span>
      <h1 className={style.title}> {props.title}</h1>
 
      <h4 className={style.date}> {props.startDate} - {props.endDate}</h4>
      <div className={style.description}>{props.description}</div>
    </div>
      
    </div>
  )
}
