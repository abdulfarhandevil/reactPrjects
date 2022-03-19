import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Home = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    loadUsers();
  }, []);

  const [response, setResponse] =  useState({
    class_response: '',
    msg : ''
  });

  const { class_response, msg} = response;
 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/ci-3/home/show_products");
    setUser(result.data.reverse()); 
  };
 
  const deleteUser = (productId) =>
  {
    axios.delete('http://localhost:8080/ci-3/home/delete_product/'+productId)
    .then((result)=>{
      setResponse({ ...response, class_response : result.data.status ,msg : result.data.msg });
      loadUsers();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 
  return (
    <div className="container">
      <div className="py-4">
      <span className={`${class_response}`}>{msg}</span>
        <h3 className="mb-3 text-center">Product Details</h3>
        <table className="table border shadow">
          <thead className="thead-primary">
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.product_name}</td>
                <td>{user.product_price}</td>
                <td>{user.product_description}</td>
                <td>
                 <Link className=" mr-2" to={`/products/edit/${user.id}`}>
                    edit
                  </Link>
                  <Link className="" onClick={() => deleteUser(user.id)} to="/">
                  delete
                  </Link>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Home;