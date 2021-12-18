import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../images/login/login.jpg';

const Register = () => {
    const [ registerData, setRegisterData ] = useState({});
    const { user, RegisterUser, error, isLoading } = useAuth();

    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert("Your password did not match X")
            return;
        }
        RegisterUser(registerData.name, registerData.email, registerData.password, navigate);
    }
    return (
        <div>
            <div className="my-5">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
            <div className="">
                    <p className="text-blue-400 text-2xl font-bold mb-5 mt-10">Please Register</p>
                    {isLoading ? <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        </div>: <form onSubmit={handleRegisterSubmit} className="w-full max-w-lg mb-5">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Full Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text" placeholder="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Email
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="email" placeholder="Email Address"
                            name="email"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Password
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="password" placeholder="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Confirm Password
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="password" placeholder="Confirm Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                            <button className="shadow bg-blue-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Register
                            </button>
                            </div>
                        </div>
                        </form>}
                        <p className="text-black">Already Registered? <Link to="/login">Please Login</Link></p>
                        {user.email && <div className="bg-green-100 rounded-md p-3 flex mt-5 mb-5 w-3/4">
                    <svg
                        className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>

                    <div className="text-green-700">
                        <div className="font-bold text-xl">Your Registration has been Successful!</div>
                    </div>
                </div>}
                {error && <div className="bg-red-100 border border-red-400 text-red-700 mt-5 px-4 py-3 rounded relative" role="alert">
                <span className="block md:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
                </div>}
                </div>
              <div className="max-w-lg rounded overflow-hidden shadow-lg mb-5">
                <img className="w-full h-4/4" src={img} alt="baby" />
              </div>
            </div>
        </div>
    );
};

export default Register;