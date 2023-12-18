import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menue />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza CO.</h1>
    </header>
  );
}

function Menue() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h1>Our Menue</h1>
      {pizzaNum > 0 ? (
        <>
          <p>Italian 6 famouse Dashes</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We are stil working on our menue, Please come back :) </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? " SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;

  // if (Hour >= OpenTime && Hour <= CloseTime) alert("Resturant Currently Close");
  // else alert("Resturant is Currently Open");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeTime={closeTime} openTime={openTime} />
      ) : (
        <p>
          The resturant in Currentlty Closed ; we are happy to have you between{" "}
          {openTime}.00 and {closeTime}.00
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}.we are currenty open! */}
    </footer>
  );
}

function Order({ closeTime, openTime }) {
  return (
    <div className="order">
      <p>
        {" "}
        We Are Currentlty Open {openTime}.00 until {closeTime}.00 Come Visit or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
