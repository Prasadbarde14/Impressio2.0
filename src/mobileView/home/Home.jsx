import React from "react";
import HeaderBar from "../HeaderBar";
import "./Home.scss";

function Home() {
  return (
    <>
      <HeaderBar />
      <form className="nosubmit" >
        <input className="nosubmit" type="search" placeholder="Search" id="search_bar"></input>
      </form>
    </>
  );
}

export default Home;
