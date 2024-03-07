import classes from './Community.module.css';
import { useRef, useState } from 'react'
import Comment from './Comment/Comment';
import Pagination from './Pagination/Pagination';

export default function Community() {
    const [commnets, setComments] = useState(Array.from({ length: 60 }, (_, index) => index))
    const [activePage, setActivePage] = useState(1)

    const input = useRef()

    function onKeyDown(event) {
        if (event.key == 'Enter' && input.current?.value && input.current?.value.trim()) {
            setComments([input.current?.value, ...commnets])

            input.current.value = '';
            event.preventDefault();
        }
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "block"}}>
                    <textarea ref={input} className={classes.input} rows="3" placeholder="Добавить комментарий:" onKeyDown={(e) => onKeyDown(e)}/>
                    {commnets.slice((activePage - 1)*10, activePage*10).map((text, i) => (
                        <Comment key={i} title={"User"} text={text}/>
                    ))}
                    {/* <Comment key={-1} title={"Admin"} text={"Здесь вы можете задать вопрос по фреймворку или оставить отзыв"} liked={true}/> */}
                    <Pagination elementsCount={commnets.length} active={activePage} scrollPage={setActivePage}/>
                </div>
            </div>
        </>
    )
}