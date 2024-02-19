import classes from './Pagination.module.css';

export default function Pagination() {
    return (
        <>
            <div className={classes.container}>
                <ul className={classes.pagination}>
                    <li className={classes.pageItem}>«</li>
                    <li className={classes.pageItem}>1</li>
                    <li className={classes.pageItem}>2</li>
                    <li className={classes.pageItem}>3</li>
                    <li className={classes.pageItem}>»</li>
                </ul>
            </div>
        </>
    )
}