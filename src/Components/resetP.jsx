import React, { useState } from "react";
import "../../src/assets/styles/login.css"

import logoI from "../../src/assets/imgs/logoB.svg"
import googleI from "../../src/assets/imgs/google.svg"

function LogIn() {
    const [reset, setReset] = useState(false);

  return (
     <div className="flex h-screen w-screen bg-gradient-to-b from-greenC to-greenCD justify-center align-center">
        <div className="m-auto text-center">
            <img src={logoI} class="logoIL relative left-3" alt="img" />
            <div className=" text-white font-medium text-xl tracking-widest -mt-4 -ml-4">inspoBoard</div>
            <div className="mt-10 mb-3 -ml-36 pl-3 text-white text-sm">{reset ?  "A link was sent to test@gmail.com!" : "Enter your email to recieve a reset link"}</div>
            {!reset && 
                <>
                    <input type="text" id="base-input" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Email"/>
                    <button className="w-96 bg-green-800 p-3 mt-4 rounded-lg ml-0 text-white" onClick={() => setReset(true)}>Send Reset Link</button>
                    <div className="flex mt-6 gap-x-28">
                        <div className="text-sm text-white underline ml-1 cursor-pointer" onClick={event => window.location.href='/login'}>Return to Login</div>
                    </div>
                </>
            }
            {reset &&
                <button className="w-96  bg-green-800 p-3 mt-1 rounded-lg ml-0 text-white" onClick={event =>  window.location.href='/login'}>Return to Login</button>

            }
            
            
        </div>
     </div>

  );
};

export default LogIn;