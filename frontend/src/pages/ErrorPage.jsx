import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { asstes } from '../assets/assets';


const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError();

    return (
        <div className='h-[80vh] flex flex-col justify-center items-center' >
            <img className='w-[80vw] md:w-3/12' src={asstes.finding_image} alt="" />
            <h1 className='text-center' >Unfortunately the page you are looking for Not Available</h1>

            <button
                onClick={() => navigate('/')}
                className="mt-4 cursor-pointer inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300" >
                Go to Home
            </button>

        </div>
    );
};

export default ErrorPage;
