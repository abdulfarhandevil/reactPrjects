import React, { useState } from "react";
import axios from 'axios'
 
//import { useHistory } from "react-router-dom";
 
const AddProduct = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    product_name: "",
    product_price: "",
    product_description: ""
  });
 
  const { product_name, product_price, product_description} = user;
   
  const [response, setResponse] =  useState({
    class_response: '',
    msg : ''
  });

  const { class_response, msg} = response;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/ci-3/home/save_product",user);
    
    setResponse({ ...response, class_response : result.data.status ,msg : result.data.msg });
    //console.log(result.data.msg)
    //alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="container bg-light">
      <div className="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <span className={`${class_response}`}>{msg}</span>
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="product_name"
              value={product_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="product_price"
              value={product_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="product_description"
              value={product_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddProduct;