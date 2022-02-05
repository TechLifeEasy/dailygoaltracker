import React from 'react';

export default function Navbar() {
    return (

        <nav className="flex bg-white flex-wrap items-center justify-between p-4">
            <div className="lg:order-2  lg:w-1/5 lg:text-center w-full">
                <a className="text-3xl text-gray-800 font-semibold font-heading 
                hover:text-green-400
                
                " href="/">
                  Daily Goal Helper
                </a>
            </div>
        </nav>


    );
}
