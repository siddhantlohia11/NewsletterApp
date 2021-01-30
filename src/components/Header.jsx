import React from "react";
import Navbar from "./Navbar";

async function getData(url) {
  var data = await fetch(url);
  var arr = await data.json();
  return arr;
}

async function processData(section) {
  var url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    section +
    "&api-key=58PLob60x40xC803A4URZP7eQulEqSSO";
  var arr = await getData(url);
  console.log(arr);
}

function Header() {
  return (
    <header>
      <h1> The Pertinent Times </h1>
      <Navbar />
    </header>
  );
}

export default Header;
