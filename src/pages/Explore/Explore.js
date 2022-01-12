import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import loader from '../../images/loader.gif'

const Explore = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://powerful-hamlet-84922.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  if (!products.length) {
    return <div className='h-screen flex items-center justify-center'><img src={loader} alt="" /></div>
  }
  return (
    <div className='bg-seconDary_bg pb-16 pt-32'>
      <div className="small-container">
        <h1 className='font-bold uppercase text-center text-2xl'>All Wonderfull <span className='text-primary_bg'>Products</span></h1>
        <p className='text-sm font-medium mt-2 mb-3 text-center'>There have some featured items Those would be your <br />  todays selection</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            products.map(product => <Product
              key={product._id}
              product={product}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Explore;