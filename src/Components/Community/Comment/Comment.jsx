import classes from './Comment.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function Comment(props) {
    const [liked, setLiked] = useState(false)
    return (
        <>
            <div className={classes.item}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <section class={classes.headerSection}>
                        <FontAwesomeIcon icon={faUser}/>
                        <h4 className={classes.commentAuthor}>{props.title}</h4>
                    </section>
                    <section class={classes.headerSection} style={{width: 30, justifyContent: "space-between"}}>
                        <div class={classes.buttonContainer}>
                            <FontAwesomeIcon icon={faHeart} onClick={() => setLiked(true)}/>
                        </div>
                        <a>{liked || props.liked ? '1' : ''}</a>
                    </section>
                </div>
                <p className={classes.commentText} style={{maxWidth: "600px", textOverflow: "ellipsis"}}>{props.text}</p>
            </div>
        </>
    )
}