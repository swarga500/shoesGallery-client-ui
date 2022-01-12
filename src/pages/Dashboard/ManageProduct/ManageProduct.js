import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useAlert } from "react-alert";

const ManageProduct = () => {
  const [products, setProducts] = useState([])
  const alert = useAlert();

  useEffect(() => {
    fetch('https://powerful-hamlet-84922.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleDelete = (id) => {
    const makeSure = window.confirm('Are You sure to want to delete the product?')
    if (makeSure) {
      fetch(`https://powerful-hamlet-84922.herokuapp.com/products/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            const remaining = products.filter(product => product._id !== id)
            setProducts(remaining)
            alert.success("Item Deleted Successfully");
          }
        })
    }
  }
  return (
    <div>
      <div className='allOrdersProducts'>
        <h1 className='mb-3 text-xl font font-semibold'>Manage Product</h1>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Product Name</td>
              <td>price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              products?.map(product => <tr key={product._id}>
                <td><img className='w-32' src={product.img} alt="" /></td>
                <td>{product.name}</td>
                <td className='w-32'>Price: ${product.price}</td>
                <td className='w-32'>
                  <div onClick={() => handleDelete(product._id)} className='w-12 h-12 mx-auto bg-primary_bg flex items-center cursor-pointer'>
                    <FaTimes style={{ fontSize: "25px", color: "white", margin: "auto", }} />
                  </div></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;