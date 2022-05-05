/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

function ResetPassword() {
    const emailRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const validateEmail = (email) =>
        String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

    const handleResetPassword = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value.trim();
        if (validateEmail(email)) {
            await sendPasswordResetEmail(email);
            toast('Password reset email sent!');
            if (sending) {
                <Loading />;
            }
            navigate('/resetSuccess');
        } else {
            setError('Please provide a valid email.');
        }
    };

    return (
        <div className="flex items-center justify-center  p-5">
            <PageTitle title="Reset" />
            <div className="max-w-xl rounded-3xl bg-white p-12 text-center text-gray-800 shadow-xl lg:max-w-3xl lg:p-12">
                <h3 className="text-2xl font-bold">Enter your previous account email.</h3>
                <div className="flex flex-col justify-center">
                    <input
                        ref={emailRef}
                        className="my-2 rounded border-sky-200 focus:outline-sky-600"
                        type="email"
                        name=""
                        id=""
                    />
                    {error || error2 ? <p className="mb-4 text-red-500">{error}</p> : ''}
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        onClick={handleResetPassword}
                        className="rounded bg-sky-600 px-3 py-2 text-white"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
