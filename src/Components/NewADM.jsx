
import Modal from 'react-bootstrap/Modal';
import image7 from "../../src/assets/imgs/image7.png"
import facebookI from "../../src/assets/imgs/facebookI.svg"
import tiktokI from "../../src/assets/imgs/tiktok1.png"

//import UploadFiles from './uploadFiles'

function NewAD(props) {

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css";
    document.head.appendChild(styleLink);

    const scriptF = document.createElement("script");
    scriptF.src = "https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js";
    document.head.appendChild(scriptF);


  return (
    <Modal className='fixed inset-0 bg-slate-900 bg-opacity-25'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      //fade={false}
    >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-3xl'>
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
            <div className='relative -top-3 right-4 flex'>
                <div className='relative '>
                    <h2 class="text-2xl text-black origin-left font-bold">Save a new Ad</h2>
                    <p className={"-mt-1 text-gray-400 text-sm"}>Save an Ad forever with inspoBoard</p>
                </div>
                
                <button onClick={props.onHide} className="text-2xl font-poppins text-slate-400 absolute -right-6">x</button>
            </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div class="">
    
        <div class="border-b border-gray-200 dark:border-gray-700 mb-4 -mt-4">
            <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Chrome Extension</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Manual Upload</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Ad links</button>
                </li>
                
            </ul>
        </div>
        <div id="myTabContent">
            <div class="bg-gray-50 p-2 rounded-lg dark:bg-gray-800 -mt-20" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="flex ">
                    <div class="m-auto mt-32">
                        <button class="bg-green-600 py-2 px-6 rounded-lg text-white ml-14">Install Extension</button>
                        <p class="w-72 text-center text-gray-400 mt-4 text-sm">Save an ad forever with inspoBoard. Use the Chrome extension in order to display a "Save Button" across platforms.</p>
                    </div>

                    <div>
                        <img src={image7} class="imageAdd mt-12 p-14 pr-28"/>
                    </div>

                </div>
            </div>
            <div class="hidden bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                
            </div>
            <div class="hidden bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p class="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
           
        </div>

    </div>
           
        </Modal.Body>
        <Modal.Footer>
            <div class="mt-2">
            Suggested Ad platforms
            <div class="flex gap-x-4">
            <button className="flex flex-row bg-white w-72 text-center justify-center p-1 mt-3 rounded-md border-2 border-black border-opacity-10 cursor-pointer">
                    <img src={facebookI} class="w-8 relative left-0" alt="img" />
                    <div className="font-normal mt-1 ml-2">Facebook Ad Library</div>
            </button>
            <button className="flex flex-row bg-white w-72 text-center justify-center p-1 mt-3 rounded-md border-2 border-black border-opacity-10 cursor-pointer">
                    <img src={tiktokI} class="tiktokI" alt="img" />
                    <div className="font-normal mt-1 ml-2">Tiktok Organic</div>
            </button>
            <button className="flex flex-row bg-white w-72 text-center justify-center p-1 mt-3 rounded-md border-2 border-black border-opacity-10 cursor-pointer">
                    <img src={tiktokI} class="tiktokI" alt="img" />
                    <div className="font-normal mt-1 ml-2">Tiktok Creative Center</div>
            </button>
            </div>
            
            </div>
        </Modal.Footer>
        </div>
      
    </Modal>
  );
}

export default NewAD;



