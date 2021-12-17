import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/login/login.jpg';

const Register = () => {
    const handleOnBlur = () => {
        
    }

    const handleLoginSubmit = (e) => {
        
        e.preventDefault();
    }
    return (
        <div>
            <div className="my-5">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
            <div className="">
                    <p className="text-blue-400 text-2xl font-bold mb-5 mt-10">Please Register</p>
                    <form onSubmit={handleLoginSubmit} class="w-full max-w-lg mb-5">
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Full Name
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text" placeholder="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Email
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="email" placeholder="Email Address"
                            name="email"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Password
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="password" placeholder="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Confirm Password
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="password" placeholder="Confirm Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                            <button class="shadow bg-blue-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Register
                            </button>
                            </div>
                        </div>
                        </form>
                        <p>Already Registered? <Link to="/login">Please Login</Link></p>
                        </div>
              <div className="max-w-lg rounded overflow-hidden shadow-lg mb-5">
                <img className="w-full h-4/4" src={img} alt="baby" />
              </div>
                        {/* {success && <div class="bg-green-100 rounded-md p-3 flex mb-5 w-3/4">
                    <svg
                        class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>

                    <div class="text-green-700">
                        <div class="font-bold text-xl">Your order has been successful!</div>
                    </div>
                </div>} */}
                </div>
        </div>
    );
};

export default Register;