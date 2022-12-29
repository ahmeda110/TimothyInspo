import React, { useState } from 'react'
import SampleReactSelect from "./selectBox";
import AdModal from "./adModal";

import Clip from "../../src/assets/imgs/clips.png"
import ListS from "../../src/assets/imgs/listS.png"

export default function VideoPlayer() {

        const [modalShow, setModalShow] = React.useState(false);

        return <>
        <div className={" grid grid-cols-1 md:grid-cols-3 w-max gap-6 px-14"}>
            { [1].map((Menu, index) => ( 
            <div className={"w-96 bg-gray-100 p-0 rounded-lg"}>
                <div className={"flex p-3 justify-between"}>
                    <div className={"flex"}>
                        <img className={"rounded-full h-10 w-10"} src="https://storage.googleapis.com/adison-foreplay.appspot.com/0000000000000000000000/creativeLogo.jpeg"/>
                        <div className={"flex flex-col"}>
                            <div className={"mt-0 ml-2 font-semibold text-base text-black"}>Tiktok</div>
                            <div className={"-mt-0 ml-2 font-light text-xs text-neutral-400"}>Saved 20 Days Ago</div>
                        </div>
                    </div>
    
                    <div className={"flex"}>
                        <button onClick={() => setModalShow(true)} className={"text-xl px-2 mr-1 bg-white rounded-lg border-0 text-black border-2"}><img src={Clip}/></button>
                        <button className={"text-xl px-2 bg-white rounded-lg border-0 text-black border-2"}></button>
                    </div>  
                </div>
                

                <video className="p-4" src={"https://storage.googleapis.com/adison-foreplay.appspot.com/7150798579929825282/da87ce0dae07e21398482bc21de65618.mp4#t=0.3"}  controls></video>
    
                <div className='px-3 -pt-4 pb-2'>
                <div class="flex items-center justselectT">
                    <span class="inline-flex py-2.5 px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Boards
                    </span>
                    <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Boards</option>
                       
                    </select>
                  </div>
                </div>
            </div>
        ))}
        </div>
        <AdModal show={modalShow} onHide={() => setModalShow(false)} />
        </>

        
    }



