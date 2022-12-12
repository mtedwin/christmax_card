import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function App() {

  const [text, setText] = useState("Merry Christmas");
  const [text2, setText2] = useState("from ENL");

//   function wrapText(context, text, x, y, maxWidth, lineHeight) {
//     var words = text.split(" ");
//     var line = "";
//     for(var n = 0; n < words.length; n++) {
//       var testLine = line + words[n] + " ";
//       var metrics = context.measureText(testLine);
//       var testWidth = metrics.width;
//       if(testWidth > maxWidth) {
//         context.fillText(line, x, y);
//         line = words[n] + " ";
//         y += lineHeight;
//       }
//       else {
//         line = testLine;
//       }
//     }
//     context.fillText(line, x, y);
// }  

  useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var background = new Image();
    background.src = "/photo1.png";
    background.onload = () => {
      ctx.drawImage(background, 0, 0);
      ctx.font = "20px serif";
      ctx.fillStyle = "#005389";
      ctx.fillText(text, 50, 300);
      ctx.fillText(text2, 50, 340);
      //wrapText(ctx, text, 50, 300, 300, 600);

    };
  }, [text,text2]);

  return (
    <div>
      <div>
        <canvas id="myCanvas" width="640" height="373"></canvas>
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="1st Line Enter you own wording"
          multiline
          maxRows={4}
          variant="filled"
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div>
      <TextField
          id="filled-multiline-flexible"
          label="2nd Line Enter you own wording "
          multiline
          maxRows={4}
          variant="filled"
          onChange={(event2) => setText2(event2.target.value)}
        />
      </div>
    </div>
  );
}
