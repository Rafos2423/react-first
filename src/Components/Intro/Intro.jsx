import { useState } from "react";
import { content, contentColors, titleColors } from "../../data";
import Content from "./Content/Content";
import Button from "../Button/Button";

export default function Intro() {
    const [color, setColor] = useState(0);

    function changeColor() {
      setColor(color < contentColors.length ? color + 1 : 0);
    }
  
    function shuffleIndexes() {
      let array = [...Array(content.length)].map((_, i) => i)
      let currentIndex = array.length,  randomIndex;
      
      while (currentIndex > 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
  
    let colorIndexes = shuffleIndexes();

    return (
        <>
          {content.map((x, i) => <Content key={i} backgroundColor={contentColors[colorIndexes[i]]} titleColor={titleColors[colorIndexes[i]]} {...x}/>)}
          <div style={{display: "flex", justifyContent: "center", paddingTop: 10}}>
              <Button onClick={() => changeColor()} text={"Изменить цвет"}/>
          </div>
        </>
      );
}
