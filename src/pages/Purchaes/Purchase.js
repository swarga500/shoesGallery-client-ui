import React, { useEffect, useState } from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useAlert } from "react-alert";

const Purchase = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { user } = useAuth()
  const alert = useAlert();

  //react hooks form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    data.status = 'Pending'
    data.img = product?.img
    data.cost = product?.price
    fetch('https://powerful-hamlet-84922.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert.success("Your Order successfully submited");
        }
      })
    reset()
  };

  useEffect(() => {
    fetch(`https://powerful-hamlet-84922.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  return (
    <div className='pt-28 pb-12'>
      <div className="small-container">
        <div className="grid md:grid-cols-2">
          <div>
            <div className='flex gap-3'>
              <img className='flex-1 w-50' src={product?.img} alt="" />
              <div className='flex-1'>
                <h1 className='text-lg font-medium'>{product?.name}</h1>
                <h2 className='text-lg my-2 text-blue'>Price: ${product?.price}</h2>
                <h3 className='text-md font-medium text-primary_bg'>Of: {product?.discount}%</h3>
                <div className="rating mt-2 lg:mt-0">
                  <Rating
                    emptySymbol={<AiOutlineStar style={{ fontSize: "20px", color: "#c70039" }} />}
                    fullSymbol={<AiTwotoneStar style={{ fontSize: "20px", color: "#c70039" }} />}
                    initialRating={product?.ratting}
                    readonly
                  />
                </div>
              </div>
            </div>
            <p className='text-md font-normal my-3'>{product?.desc}</p>
          </div>
          <div>
            <form className='md:w-5/6 md:ml-auto' onSubmit={handleSubmit(onSubmit)}>
              <input value={user.displayName || ''} className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("name", { required: true })} />
              <input value={user.email || ''} type='email' className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("email", { required: true })} />
              <input className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("city", { required: true })} placeholder='Your City' />
              <input type='number' className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("phone", { required: true })} placeholder='Phone Number' />
              <input type='date' className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("date", { required: true })} />
              <input value={product?.name || ''} className='block py-2.5 px-3 bg-seconDary_bg outline-none border-0 w-full my-3' {...register("productName", { required: true })} />
              <input className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 bg-primary_bg' type="submit" value='Buy Now' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;