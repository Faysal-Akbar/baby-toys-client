import React from 'react';
import bg from '../../../images/bg/bg.jpg';
import banner from '../../../images/banner/banner.png';
import { NavLink } from 'react-router-dom';

const style = {
    marginTop: -12,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 58, 80, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    width: "100%",
    height: '410px',
}

const Banner = () => {
    return (
        <div style={style} className="container mx-auto mb-20">
        <div className="row flex justify-between items-center grid grid-cols-1 md:grid-cols-2">
        <div className="col p-10">
            <p className="text-3xl font-bold">Welcome to <br /> <span className="text-blue-400 text-5xl">Unique</span> <span className="text-5xl text-white">mall</span></p> <br />
            <p className="text-lg text-gray-300">Unique Mall sale many different variants toys for baby's. Unique Mall always concern to launch their best products, which their customers expect. Every parents wants to keep their child's happy. For this reason, Unique Mall is the best for parents or others customer.</p><br />
            <NavLink to='/allProducts'>
            <button
                className="px-3 bg-pink-500 rounded py-2 px-4 text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                >Explore now
            </button>
            </NavLink>
        </div>
        <div className="col p-7">
            <img className="transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110" width="80%" src={banner} alt="" />
        </div>
        </div>
        </div>
    );
};

export default Banner;