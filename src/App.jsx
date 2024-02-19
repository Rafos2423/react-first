import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Community from "./Components/Community/Community";
import { useState } from "react";
import { navItems } from "./data";
import "./index.css";

export default function App() {
  const [navItem, SetNavItem] = useState(navItems[0]);

  return (
    <>
      <Header selected={navItem} onChange={SetNavItem}/>
      <main>
        <div style={{paddingBottom: "1.5rem"}}/>
        {navItem == "Введение" && <Intro/>}
        {navItem == "Примеры" && <div/>}
        {navItem == "Сообщество" && <Community/>}
      </main>
    </>
  );
}
