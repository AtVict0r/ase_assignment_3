import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
let firstName = prompt("Enter First Name: ");
let lastName = prompt("Enter Last Name: ");
let birthYear = prompt("Enter Year of Birth: ");

root.render(
  <React.StrictMode>
    <Header userName = {firstName + ' ' + lastName} userAge={new Date().getFullYear() - birthYear} />
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);