import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useForm } from 'react-hook-form';
import { useAlert } from "react-alert";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [img, setImg] = useState('')
  const alert = useAlert();

  const onSubmit = data => {
    data.img = img
    fetch('https://powerful-hamlet-84922.herokuapp.com/products', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert.success("Successfully added This Product");
        }
      })
    reset()
  }

  return (
    <div>
      <h1 className='font-medium text-xl'>Add Product Form</h1>
      <form className='md:w-5/6' onSubmit={handleSubmit(onSubmit)}>
        <input className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("name", { required: true })} placeholder='Product Name' />
        <div className='md:flex items-center gap-3'>
          <input type='number' step='any' className='block flex-1 py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("ratting")} placeholder='Rating (optional)' />
          <div className='flex-1 fileBtn'>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setImg(base64)} />
          </div>
        </div>
        <div className='md:flex items-center gap-3'>
          <input type='number' step='any' className='block flex-1 py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("price", { required: true })} placeholder='Price' />
          <input type='number' step='any' className='block flex-1 py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("discount", { required: true })} placeholder='Discount' />
        </div>
        <textarea rows='4' className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("desc", { required: true })} placeholder='Product Description' />
        <input className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 bg-primary_bg' type="submit" value='Add Product' />
      </form>
    </div>
  );
};

export default AddProduct;