import React from 'react';
import { useNavigate } from 'react-router-dom';

function MngInvBtn() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate('/inventory')}
            type="button"
            className="mb-4 inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
            Manage Inventory
            <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
}

export default MngInvBtn;
