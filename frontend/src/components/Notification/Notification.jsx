// components/Notification.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../../features/notification/notificationSlice';

const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-500',
    error: 'bg-red-100 text-red-800 border-red-500',
    info: 'bg-blue-100 text-blue-800 border-blue-500',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
};

const Notification = () => {
    const dispatch = useDispatch();
    const { open, type, message, icon } = useSelector(state => state.notification);


    useEffect(() => {
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000);
    }, [])

    if (!open) return null;

    return (
        <div className={`fixed top-5 right-5 z-50 border p-4 rounded-lg shadow-lg w-80 ${typeStyles[type]}`}>
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                    {icon && <span>{icon}</span>}
                    <span>{message} </span>
                </div>
                <button
                    onClick={() => dispatch(hideNotification())}
                    className="ml-4 cursor-pointer text-lg font-bold"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Notification;
