import React, { useState } from "react";
import Search from './search'
import SideBar from './sidebar'

import "../../src/assets/styles/homePage.css"
import folder from "../../src/assets/imgs/ff.png"
import library from "../../src/assets/imgs/Calendar.png"
import discover from "../../src/assets/imgs/Chart.png"
import account from "../../src/assets/imgs/User.png"

import search from "../../src/assets/imgs/Search.png"
import VideoPlayer from "./videoPlayer";


function HomePage() {
  const [open, setOpen] = useState(true);
  const [modalSearchShow, setSearchModalShow] = React.useState(false);
  const Menus = [
    { title: "SEARCH", src: search },
    { title: "LIBRARY", src: library },
    { title: "DISCOVER", src: discover },
    { title: "FOLDERS", src: folder },
    { title: "ACCOUNT", src: account },
    
  ];

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className={`flex`}>
      <SideBar />

      <div className={"w-full ml-96 "}>
        <div className={"flex justify-between p-10 px-20"}>
            <div className={"flex flex-col p-0 m-0 relative"}>
                <h1 class="libraryT text-black origin-left font-bold relative -top-2">
                Account Settings
                </h1>
                <p className={"-mt-3 text-gray-400"}>Your user Profile</p>
            </div>
            
            <div> 
                <button class="border-2 border-red-600 text-sm text-red-500 rounded-md py-1 px-4 relative -top-2" onClick={event =>  window.location.href='/login'}>
                <span>Logout</span>
                </button>
            </div>
        </div>

        <div className="ml-32 mt-6">
            <div className="flex gap-x-28">
                <div>
                    <h2 class="text-lg text-black origin-left font-bold relative -top-2">Account Details</h2>
                    <p className={"-mt-3 text-gray-400 text-sm"}>Update your account information</p>
                </div>
           
                <button className="ml-96 bg-greenC text-white rounded-md px-6">Save</button>
            </div>
            

            <div className="flex gap-x-4">
                <div class=" mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Alexander"/>
                </div>
                <div class="mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">last Name</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Smith"/>
                </div>
            </div>
            <div className="flex gap-x-4 mt-4">
                <div>
                    <label for="email-address-icon" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 px-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="alex.smith@gmail.com"/>
                    </div>
                </div>
                
                <div>
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">last Name</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="647-555-5555"/>
                </div>
            </div>
        </div>

        <div className="ml-32 mt-16">
        <div className="flex gap-x-24">
                <div>
                    <h2 class="text-lg text-black origin-left font-bold relative -top-2">Plan Details</h2>
                    <p className={"-mt-3 text-gray-400 text-sm"}>Update your plan information</p>
                </div>
           
                <button className="ml-96 bg-greenC text-white rounded-md px-6">Subscribe</button>
            </div>

            <div className="flex gap-x-4">
                <div class=" mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">CardHolder Name</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="Alexander Smith"/>
                </div>
                <div class=" mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Promo Code</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="HECU50"/>
                </div>
            </div>
            <div className="flex gap-x-4">
                <div class=" mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="1234 1234 1234 1234"/>
                </div>
                <div class="mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Card Expiry</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-46 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="MM / YY"/>
                </div>
                <div class="mt-6">
                    <label for="base-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Card CVC</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-46 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10" placeholder="CVC"/>
                </div>
            </div>
            <div className="flex gap-x-4">
                <div className="p-4 w-96 h-40 border-2 border-greenC rounded mt-8">
                    <h2 class="text-black origin-left font-semibold relative -top-2">Individual - $19 / Month</h2>
                    <p className={"mt-0 text-gray-400 text-sm"}>For small brands, merchants and agencies. </p>
                </div>
                <div className="p-4 w-96 h-40 border-2 border-gray-200 rounded mt-8">
                    <h2 class="text-black origin-left font-semibold relative -top-2">Team - $39 / Month</h2>
                    <p className={"mt-0 text-gray-400 text-sm"}>Perfect for big teams, agencies. 2 users incldued, each additional user is $15/month</p>
                </div>
            </div>
        </div>

      </div>

      <Search show={modalSearchShow} onHide={() => setSearchModalShow(false)} />
    </div>
  );
};

export default HomePage;