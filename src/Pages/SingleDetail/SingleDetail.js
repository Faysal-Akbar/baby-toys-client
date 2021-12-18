import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const SingleDetail = () => {
    const { user } = useAuth();
    const {_id} = useParams();
    const [singleDetail, setSingleDetail] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
        .then(res => res.json())
        .then(data => setSingleDetail(data))
    })

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = {...userInfo};
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleFormSubmit = (e) => {
        const order = {
            productName: singleDetail.name,
            img: singleDetail.img,
            displayName: userInfo.name,
            phone: userInfo.phone,
            address: userInfo.address,
            email: userInfo.email,
            price: singleDetail.price,
            description: singleDetail.description,
            status: 'PENDING'

        }
        // send to database
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <Header />
            <div className="my-5">
            <div className="ml-8 mr-8">
                <h1 className="text-left text-blue-400 text-3xl font-bold">{singleDetail?.name}</h1> <br/>
                <hr/>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
              <div className="max-w-lg rounded overflow-hidden shadow-lg mb-5">
                <img className="w-full h-2/4" src={singleDetail.img} alt="baby" />
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base font-bold">
                  {singleDetail.description}
                </p>
              </div>
            <div className="px-6 pt-4 pb-2">
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-bold">Price: ${singleDetail.price}</p>
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-bold">Steps: {singleDetail.age}</p>
            </div>
            </div>

                <div className="">
                    <p className="text-blue-400 text-2xl font-bold mb-5">Your Information</p>
                    <form onSubmit={handleFormSubmit} class="w-full max-w-lg mb-5">
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Full Name
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text"
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
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Address
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="text" placeholder="Address"
                            name="address"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Phone
                            </label>
                            </div>
                            <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-password" type="number" placeholder="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            />
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                            <button class="shadow bg-blue-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                send
                            </button>
                            </div>
                        </div>
                        </form>
                        {success && <div class="bg-green-100 rounded-md p-3 flex mb-5 w-3/4">
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
                </div>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleDetail;