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
  return (
    <main className="menu">
      <h1>Our Menue</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const OpenTime = 12;
  const CloseTime = 22;
  const OpenHours = Hour >= OpenTime && Hour <= CloseTime;

  // if (Hour >= OpenTime && Hour <= CloseTime) alert("Resturant Currently Close");
  // else alert("Resturant is Currently Open");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.we are currenty open!
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <h3>pizza prosciutto</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
      <img src="pizzas/spinaci.jpg" alt="piazza" />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
