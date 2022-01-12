import React from 'react';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import '../Home.css'

const Banner = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="block w-full h-screen object-cover" alt='' />
            <h1 className='absolute top-32 left-12 text-2xl text-white'>Goog Shoes <br /> Take You Good Place</h1>
            <p className='absolute bottom-16 lg:bottom-32 right-12 text-sm text-right text-white'>They went into my closets looking for skeletons, <br /> but thank God, all they found were shoes, <br /> beautiful shoes</p>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="block w-full h-screen object-cover" alt='' />
            <h1 className='absolute top-32 left-12 text-2xl text-white'>If Shoe Fits <br /> Bue It in Every Color</h1>
            <p className='absolute bottom-16 lg:bottom-32 right-12 text-sm text-right text-white'>They went into my closets looking for skeletons, <br /> but thank God, all they found were shoes, <br /> beautiful shoes</p>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="block w-full h-screen object-cover" alt='' />
            <h1 className='absolute top-32 left-12 text-2xl text-white'>If the shoe fits <br /> buy another one just like it</h1>
            <p className='absolute bottom-16 lg:bottom-32 right-12 text-sm text-right text-white'>They went into my closets looking for skeletons, <br /> but thank God, all they found were shoes, <br /> beautiful shoes</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;