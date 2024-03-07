import classes from "./Pagination.module.css";

export default function Pagination(props) {
    const pageCount = Math.ceil(props.elementsCount / 10) - 1;
    const maxPagesToShow = 4;

    let isElementsOverflow = props.elementsCount / 10 - 1 > maxPagesToShow;
    let elementsCount = isElementsOverflow ? maxPagesToShow : props.elementsCount / 10 + 1;

    const pages = Array.from({ length: elementsCount - 1 }, (_, index) => props.active === 1 ? index + 1 : props.active + index - 1);

    console.log(props.active);

    if (isElementsOverflow) {
        pages.push("...");
        pages.push(pageCount + 1);
    }

    // function isActive(active, index) {
    //     if (active == 1) {
    //         return index == 1
    //     }
    //     else {
    //         return active == index + active - 1
    //     }
    // }

    return (
        <div className={classes.container}>
            <ul className={classes.pagination}>
                <li className={classes.pageItem} onClick={() => props.scrollPage(props.active > 1 ? props.active-1 : props.active)}>{'<'}</li>
                {pages.map((page, index) => (
                    <li key={index} className={`${classes.pageItem} ${(props.active === 1 ? index === 0 : props.active === index + props.active - 1) ? classes.active : ''}`} onClick={() => props.scrollPage(index +1)}>{page}</li>
                ))}
                <li className={classes.pageItem} onClick={() => props.scrollPage(props.active < pageCount ? props.active+1 : props.active)}>{'>'}</li>
            </ul>
        </div>
    );
}