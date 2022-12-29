
import Modal from 'react-bootstrap/Modal';

import "../../src/assets/styles/homePage.css"

function AdModal(props) {
  return (
    <Modal className='fixed inset-0 bg-slate-900 bg-opacity-50'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fade={false}
    >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-3xl w-4/12'>
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
            <div className='absolute top-2 right-4'>
                <button onClick={props.onHide} className="text-2xl font-poppins text-slate-400">x</button>
            </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>

<div>
<form class="flex items-center -mx-10 -z-2">   
    <label for="simple-search" class="sr-only">Search for an Ad, Brand or Board</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="searchI bg-white border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search for an Ad, Brand or Board" required/>
    </div>
    </form>

<div class="flex flex-col items-center -mx-10 -z-2">
  <div className='searchR mt-2 w-full py-2 pl-10 text-sm text-gray-500'>View Library</div>
    <div className='searchR w-full py-2 pl-10 text-sm text-gray-500'>Most Engagment</div>
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