import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/products/Home";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route,Routes,Switch,withRouter} from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import Content from "./components/Content";
import Signup from "./components/Signup";

function App(props) {
  return ( /*
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/add" element={<AddProduct/>} />
          <Route path="/products/edit/:id" element={<EditProduct/>} />
        </Routes>
      </div>
    </Router>
    <React.Fragment>
       <Header />
       <Content />
       <Footer />
    </React.Fragment>
    */
   <Signup/>
  );
}
export default App;