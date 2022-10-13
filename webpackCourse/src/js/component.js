import "../css/components.css";
import webpacklogo from "../assets/img/webpacklogo.png";

export const greeting = (name) => {
    const h1 = document.createElement("h1");
    h1.innerText = `Hello11 ${name}`;
    document.body.append(h1);


    const img = document.createElement("img");
    img.src = webpacklogo;
    document.body.append(img);
}