import React, { useState } from 'react';
import { useAlert } from "react-alert";

const MakeAdmin = () => {

  const [email, setEmail] = useState('')
  const alert = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailObj = { email }
    fetch('https://powerful-hamlet-84922.herokuapp.com/users/admin', {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(emailObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount === 1) {
          alert.success("Successfully added admin");
        } else {
          alert.error("Invailed Email");
        }
      })
    e.target.reset()
  }
  return (
    <div>
      <h1 className='text-xl font-semibold'>Add Admin</h1>
      <form onSubmit={handleSubmit} className='w-4/5'>
        <input onBlur={(e) => setEmail(e.target.value)} type='email' className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' placeholder='Email' />
        <input className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 bg-primary_bg' type="submit" value='Make Admin' />
      </form>
    </div>
  );
};

export default MakeAdmin;