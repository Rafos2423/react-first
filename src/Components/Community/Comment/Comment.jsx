import classes from './Comment.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Comment(props) {
    return (
        <>
            <div className={classes.item}>
                <div style={{display: "flex", padding: "15px 10px 15px 0px"}}>
                    <FontAwesomeIcon icon={faUser}/>
                    <h4>{props.title}</h4>
                </div>
                <p style={{maxWidth: "600px", textOverflow: "ellipsis"}}>{props.text}</p>
            </div>
        </>
    )
}