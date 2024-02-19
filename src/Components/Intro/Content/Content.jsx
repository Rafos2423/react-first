import classes from './Content.module.css'

export default function Content(props) {
  return (
    <>
      <div className={classes.item} style={{backgroundColor: props.backgroundColor}}>
        <h3 style={{color: props.titleColor}}>{props.title}</h3>
        <p style={{color: props.titleColor}}>{props.content}</p>
      </div>
    </>
  );
}
