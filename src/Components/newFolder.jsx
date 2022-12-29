import React from 'react'
import Modal from 'react-bootstrap/Modal';

import CBF from "../../src/assets/imgs/CBF.png"


function AdModal(props) {

  
  return (
    <Modal className='fixed inset-0 bg-slate-900 bg-opacity-50'
      show = {props.show}
      onHide = {props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fade={false}
    >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-3xl w-4/12'>
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
        <div className='relative -top-3 right-4 flex'>
                <div className='relative '>
                    <h2 class="text-2xl text-black origin-left font-bold">Manage Folder</h2>
                    <p className={"-mt-1 text-gray-400 text-sm"}>Folders will keep your boards organized</p>
                </div>
                
                <button onClick={props.onHide} className="text-2xl font-poppins text-slate-400 absolute -right-6">x</button>
            </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <label for="website-admin" class="block mb-0 text-sm font-medium text-gray-400 dark:text-white">Folder Name</label>
        <div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <img src={CBF} />
        </span>
        <input type="text" id="folderName" class="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Default Folder"/>
        </div>
        
        <div className='flex flex-row justify-between mt-8'>
          <div className='flot-left flex flex-col'>
            <button onClick={props.sBDF} className="border-2 border-red-400 py-2 px-5 rounded-lg text-sm text-red-400 w-24">Delete</button>
            <span className='text-xs text-gray-400 mt-2'>Once deleted, your boards will move to the default folder.</span>
          </div>

          <div>
            <button onClick={props.sBAF} className="bg-green-500 text-white rounded-lg py-3 px-8 text-sm float-right">Save</button>
          </div>
          
        </div>
        
       
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
        </div>
      
    </Modal>
  );
}

export default AdModal;