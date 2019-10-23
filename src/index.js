import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
//import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

//const element = <h1>Hello, Platzi Badges from {name}</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a platzi"
// );

// const jsx = (
//   <div>
//     <h1>Hola, soy Polito </h1>
//     <p>Soy Bachiller </p>
//   </div>
// );

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container); //Al render hay que enviarle un elemento. entonces al componente Badge lo convertimos en elemento de esta manera <Badge />
