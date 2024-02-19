import classes from "./Header.module.css";
import { navItems } from "../../data";

export default function Header(props) {
  return (
    <>
      <div className={classes.container}>
        <section className={classes.section}>
          <img src="/logo-name.svg" alt="logo"/>
          <a href={"https://react.dev/"} className={classes.label} style={{color: "var(--react-color)", textDecoration: "none"}}>React</a>
        </section>
        <div style={{display: "flex", height: "100%"}}>
            {navItems.map((label, i) => (
              <p key={i} className={`${classes.item} ${navItems[i]==props.selected ? classes.selected : ''}`} onClick={() => props.onChange(navItems[i])}>{label}</p>
            ))}
        </div>
        <p className={classes.label} style={{marginRight: "30px"}}>User</p>
      </div>
    </>
  );
}
