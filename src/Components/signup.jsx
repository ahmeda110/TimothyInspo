import React, { useState } from "react";
import "../../src/assets/styles/login.css"

import logoI from "../../src/assets/imgs/logoB.svg"
import googleI from "../../src/assets/imgs/google.svg"

function SignUp() {
 

  return (
     <div className="flex h-screen w-screen bg-gradient-to-b from-greenC to-greenCD justify-center align-center">
        <div className="m-auto text-center">
            <img src={logoI} class="logoIL ml-36" alt="img" />
            <div className=" text-white font-medium text-xl tracking-widest -mt-4 -ml-4">inspoBoard</div>
            <input type="text" id="base-input" class="mt-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="First Name"/>
            <input type="text" id="base-input" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Last Name"/>
            <input type="text" id="base-input" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Email"/>
            <input type="text" id="base-input" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Password"/>
            <button className="w-96 bg-green-800 p-3 mt-4 rounded-lg text-white" onClick={event =>  window.location.href='/'}>Login</button>
            <div className="flex mt-6 gap-x-28">
                <div className="text-sm text-white underline ml-1 cursor-pointer" onClick={event => window.location.href='/login'}>Click here to login</div>
            </div>
            <div>
                <button className="flex flex-row bg-white w-96 text-center justify-center p-3 mt-10 rounded-md">
                    <img src={googleI} class="googleI" alt="img" />
                    <div className="font-semibold">Signup wih Google</div>
                </button>
            </div>
        </div>
     </div>

  );
};

export default SignUp;