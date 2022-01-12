import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;