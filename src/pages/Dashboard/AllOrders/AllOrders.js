import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import { useAlert } from "react-alert";

const AllOrders = () => {
  const [orders, setOrders] = useState()
  const alert = useAlert();

  useEffect(() => {
    fetch('https://powerful-hamlet-84922.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])


  const handleStatus = (e, id) => {
    const statusObj = { status: e.target.value }
    fetch(`https://powerful-hamlet-84922.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(statusObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  const handleDelete = (id) => {
    // const makeSure = window.confirm('Are you sure to want to delete this order?')
    // if (makeSure) {
    fetch(`https://powerful-hamlet-84922.herokuapp.com/orders/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          const remaining = orders.filter(order => order._id !== id)
          setOrders(remaining)
          alert.success("Item Deleted Successfully");
        }
      })
    // }
  }

  return (
    <div className='allOrdersProducts'>
      <h1 className='mb-3 text-xl font font-semibold'>All Orders</h1>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Email</td>
            <td>Product Name</td>
            <td>Date</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map(order => <tr key={order._id}>
              <td>{order.email}</td>
              <td>{order.productName.slice(0, 30)}</td>
              <td className='w-24'>{order.date}</td>
              <td className='w-36'>
                <select onChange={(e) => handleStatus(e, order._id)} className="form-select" aria-label="Default select example">
                  <option value={order.status}>{order.status}</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Shipped">Shipped</option>
                </select>
              </td>
              <td className='w-16'><FaTimes onClick={() => handleDelete(order._id)} style={{ padding: "5px", fontSize: "23px", background: "red", cursor: "pointer", color: "white", margin: "auto" }} /></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;