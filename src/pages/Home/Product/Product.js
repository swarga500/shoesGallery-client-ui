import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import { BsSuitHeart } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product: { name, img, desc, price, _id } } = props
  return (
    <div className='bg-white productBox'>
      <div className='w-full p-3'>
        <div className="image w-full relative overflow-hidden">
          <img src={img} alt="" />
          <div className='absolute imageOverlay w-full h-full bg-seconDary_bg p-4 text-center flex items-center justify-center flex-col top-0 left-0 text-sm italic font-medium'>
            <p>{desc.slice(0, 100)}</p>
            <div className='flex product-icon'>
              <button className=''><BsSuitHeart /></button>
              <Link to={`products/${_id}`}>
                <button className=''><IoIosArrowForward /></button>
              </Link>
            </div>
          </div>
        </div>
        <h2 className='text-center mt-3 text-lg text-primary_bg font-medium'>${price}</h2>
      </div>
      <h1 className='py-3 text-center px-4 font-medium productName'>{name}</h1>
    </div>
  );
};

export default Product;