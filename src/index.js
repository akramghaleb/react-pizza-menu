import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  return (<header className='header'>
    <h1>Fast React Pizza Co.</h1>
  </header>)
}

function Menu() {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        description="Tomato, mozarella, spinach, and ricotta cheese"
        image="pizzas/spinaci.jpg"
        price={10} />
      <Pizza
        name="Pizza Funghi"
        description="Tomato, mozarella, mushrooms, and onion"
        image="pizzas/funghi.jpg"
        price={12} />

    </div>
  )
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 18;
  const isOpen = (hour >= openHour && hour < closeHour);

  // if (hour >= openHour && hour < closeHour) {
  //   alert("We're currently open! ")
  // } else {
  //   alert("We're currently close! ")
  // }
  return (
    <footer className='footer'>
      {new Date().toLocaleDateString()}. We're currently open!
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

