import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 //useHistory
const EditProduct = () => {
   
  //let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    product_name: "",
    product_price: "",
    product_description: ""
  });
 
  const { product_name, product_price, product_description } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);

  const [response, setResponse] =  useState({
    class_response: '',
    msg : ''
  });

  const { class_response, msg} = response;
 
  const onSubmit = async e => {
    e.preventDefault();
    const result = await axios.put(`http://localhost:8080/ci-3/home/save_product/${id}`, user);
    setResponse({ ...response, class_response : result.data.status ,msg : result.data.msg });
    //history.push("/");
  };
 
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/ci-3/home/show_products/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
      <span className={`${class_response}`}>{msg}</span>
        <h2 className="text-center mb-4">Edit A Product</h2>
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
          <button className="btn btn-secondary btn-block">Update Product</button>
        </form>
       </div>
      </div> 
    </div>
  );
};
 
export default EditProduct;