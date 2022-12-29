import React, { useState } from "react";
import SideBar from './sidebar'

import "../../src/assets/styles/homePage.css"
import VideoPlayer from "./videoPlayer";
import NewAD from "./NewADM"


function HomePage() {

  const [modalNewADShow, setNewADModalShow] = React.useState(false);
  const [modalNewBoardShow, setNewBoardModalShow] = React.useState(false);
 
  function setBoardMS(){
    setNewBoardModalShow(false)
  }

  return (
    <div className={`flex`}>
      <SideBar modalNewBoardShow={modalNewBoardShow} setNewBoardModalShow={setBoardMS}/>

      <div className={"w-full ml-96 "}>
        <div className={"flex justify-between p-10 px-20"}>
          <div className={"flex flex-col p-0 m-0 relative"}>
            <h1 class="libraryT text-black origin-left font-bold relative -top-2">
              Library
            </h1>
            <p className={"-mt-3 text-gray-400"}>Find ads you have saved in your account.</p>
          </div>
          
          <div>
            <button class="bg-greenCD text-sm text-white rounded-md py-2 px-4 relative -left-2 -top-4">
              <span onClick={() => setNewBoardModalShow(true)}>+ Create Board</span>
            </button>
            <button class="bg-greenC text-sm text-white rounded-md py-2 px-4 relative -top-4">
              <span onClick={() => setNewADModalShow(true)}>New Ad</span>
            </button>
          </div>
          
      </div>

      <div className="flex flex-row justify-between px-20 mb-8 -mt-2">

        <div class="flex selectT">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Filters
          </span>
          <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Filters</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="WH">Washinghton</option>
            <option value="FL">Florida</option>
            <option value="VG">Virginia</option>
            <option value="GE">Georgia</option>
            <option value="MI">Michigan</option>
          </select>        </div>


        <div class="flex selectT">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Category
          </span>
          <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Categories</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="WH">Washinghton</option>
            <option value="FL">Florida</option>
            <option value="VG">Virginia</option>
            <option value="GE">Georgia</option>
            <option value="MI">Michigan</option>
          </select>        </div>
        
       
        <div class="flex selectT">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Tags
          </span>
          <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Tags</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="WH">Washinghton</option>
            <option value="FL">Florida</option>
            <option value="VG">Virginia</option>
            <option value="GE">Georgia</option>
            <option value="MI">Michigan</option>
          </select>        </div>
       

        <div class="flex selectT" >
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Format
          </span>
          <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Formats</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="WH">Washinghton</option>
            <option value="FL">Florida</option>
            <option value="VG">Virginia</option>
            <option value="GE">Georgia</option>
            <option value="MI">Michigan</option>
          </select>
        </div>
      </div>

      <div>
        <hr className={"mx-10"}></hr>
      </div>

      <div className={"flex flex-start flex-wrap"}>

      <div className={"w-96 h-96 mt-4"}>
        <VideoPlayer />
      </div>

      
      
      </div>

      </div>







    <NewAD show={modalNewADShow} onHide={() => setNewADModalShow(false)} />
    </div>
  );
};

export default HomePage;