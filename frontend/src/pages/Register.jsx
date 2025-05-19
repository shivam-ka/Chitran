import React, { useState } from 'react'
import { motion } from "motion/react";
import { AuroraBackground } from '../Aceternity UI/aurora-background'
import { useNavigate } from 'react-router-dom';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { Loading } from '../components';
import { useDispatch } from 'react-redux';
import { showNotification } from '../features/notification/notificationSlice';
import Notification from '../components/Notification/Notification';

const Register = () => {

    const navigate = useNavigate();
    const [isSubmiting, setIsSubmiting] = useState(false)
    const token = false
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmiting(true)
        try {
            const response = await Axios({
                ...SummaryApi.register, data: formData
            })

            if (response.data.success) {
                dispatch(showNotification({
                    type: "success",
                    message: response.data.message,
                    icon: '✔️',
                }));
            }
        } catch (error) {
            console.error(error.response.data.data)
            if (error.response.data.message) {
                dispatch(showNotification({
                    type: "error",
                    message: error.response.data.message,
                    icon: 'X',
                }));
            }
        }
        setIsSubmiting(false)
    };

    if (token) {
        return (
            navigate('/')
        )
    }

    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <form
                    onSubmit={handleSubmit}
                    className="w-[90vw] sm:w-[55vw] md:w-[40vw] lg:w-[25vw]"
                >
                    <h2 className="text-2xl font-bold text-white text-primary mb-6">
                        Login to Chitran
                    </h2>

                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="username">Username</label>
                        <input
                            id='username'
                            placeholder='Username'
                            type="text"
                            name="username"
                            value={formData.identifier}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-white border rounded-lg focus:outline-none  outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white  mb-2" htmlFor="email">E-mail</label>
                        <input
                            id='email'
                            placeholder='text@mail.com'
                            type="text"
                            name="email"
                            value={formData.identifier}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-white border rounded-lg focus:outline-none  outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="password">Password</label>
                        <input
                            id='password'
                            placeholder='Password'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-white border rounded-lg  outline-none"
                            required
                        />
                    </div>

                    <div className='mb-6 text-gray-200'>
                        <p>Already have an Account <span onClick={() => navigate('/login')} className='cursor-pointer text-orange-500 hover:underline'>Click Here</span> </p>
                    </div>

                    <button
                        disabled={isSubmiting}
                        type='submit'
                        className='w-full duration-75 bg-blue-700 hover:bg-blue-800 active:scale-[0.99] text-white py-2 cursor-pointer rounded-sm min-h-10'
                    >
                        {isSubmiting ? <Loading /> : "Login"}
                    </button>


                </form>

            </motion.div>
        </AuroraBackground>

    )
}

export default Register
