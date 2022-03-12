// import logo from './logo.svg';
import React, { useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const sectionDisplay = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "main":
        return <Main />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Header>
      </div>
      <div>
        <div>{sectionDisplay()}</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
