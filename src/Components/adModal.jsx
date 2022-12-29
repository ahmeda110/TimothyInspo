import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SampleReactSelect from "./selectBox";
import Something from './SlateEditor/Editor'

function AdModal(props) {
  return (
    <Modal className='fixed inset-0 bg-slate-900 bg-opacity-50  '
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fade={false}
    >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded'>
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h1 className='text-5xl font-bold'>Ad Details</h1>
                    <p className='-mt-0 font-semibold'>Ad ID: 1234567</p>
                </div>
                <div className='flex space-x-2 ml-10 mt-2'>
                    <button className='bg-greenC px-6 py-1 rounded-lg h-10 text-white text-sm'>Share</button>
                    <button className='border-2 border-red-400 bg-white px-6 rounded-lg h-10 text-red-400'>Delete</button>
                </div>
            </div>
            <div>
                <button onClick={props.onHide} className="text-2xl">x</button>
            </div>

          </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='flex flex-row space-x-8'>
                <div className='bg-slate-200 bg-opacity-25 p-8 rounded-md w-max'>
                    <div className={"flex"}>
                        <img className={"rounded-full h-10 w-10"} src="https://storage.googleapis.com/adison-foreplay.appspot.com/0000000000000000000000/creativeLogo.jpeg"/>
                        <div className={"flex flex-col"}>
                            <div className={"-mt-1 ml-2 font-bold text-lg"}>Tiktok</div>
                            <div className={"-mt-1 ml-2 font-light text-sm text-gray-400 font-semibold"}>Saved 20 Days Ago</div>
                        </div>
                    </div>
                    <p className='mt-6 mb-2'>Get 20% off when purchased!</p>
                    <video className="w-80" src={"https://storage.googleapis.com/adison-foreplay.appspot.com/7150798579929825282/da87ce0dae07e21398482bc21de65618.mp4#t=0.3"}controls></video>
                </div>
                <div className='bg-slate-200 bg-opacity-25 p-8 rounded-md w-max'>
                    <h1 className='text-xl font-bold mb-4 -mt-1'>Board</h1>
                    <div className='w-80'>
                    <div class="flex selectT mt-2">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Boards
                    </span>
                    <select id="states" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Boards</option>
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
                    <div className='mt-20'>
                        <h1 className='text-xl font-bold mb-4'>Metadata</h1>
                        <div className={"flex"}>
                            <img className={"rounded-full h-10 w-10"} src="https://storage.googleapis.com/adison-foreplay.appspot.com/0000000000000000000000/creativeLogo.jpeg"/>
                            <div className={"mt-2 ml-2 font-bold text-base"}>Tiktok</div>
                            <div className={"mt-2.5 ml-12 text-base text-gray-500 font-bold"}><span className='text-gray-400 text-sm font-semibold'>Date Saved:</span> 12/06/2022</div>
                        </div>
                        <hr className='mt-3 border-gray-300'></hr>
                        <div className='flex flex-row justify-between px-4 mt-6'>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">Views</h5>
                                <p className='-mt-4 text-slate-400 '>10,000</p>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">Likes</h5>
                                <p className='-mt-4 text-slate-400 '>1000</p>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">Comments</h5>
                                <p className='-mt-4 text-slate-400 '>100</p>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">Shares</h5>
                                <p className='-mt-4 text-slate-400 '>10</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-10 px-4 mt-4'>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">Dislay Format</h5>
                                <p className='-mt-4 text-slate-400 '>Video</p>
                            </div>
                            <div className='flex flex-col relative left-3'>
                                <h5 className="text-sm font-semibold mb-3">CTA Type</h5>
                                <p className='-mt-4 text-slate-400 '>Shop Now</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-10 px-4 mt-4'>
                            <div className='flex flex-col gap-y-3'>
                                <h5 className="text-sm font-semibold mb-3">Platforms</h5>
                                <p className='-mt-7 text-slate-400 '>Facebook</p>
                                <p className='-mt-4 text-slate-400 '>Instagram</p>
                            </div>
                            <div className='flex flex-col pl-7'>
                                <h5 className="text-sm font-semibold mb-3">Categories</h5>
                                <p className='-mt-4 text-slate-400 '>Beauty</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-10 px-4 mt-8'>
                            <div className='flex flex-col'>
                                <h5 className="text-sm font-semibold mb-3">landing Page</h5>
                                <p className='-mt-4 text-sky-500'>https://samplesite.com</p>

                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                <div className='bg-slate-200 bg-opacity-25 p-8 rounded-md w-max'>
                    <h1 className='text-xl font-bold mb-4'>Tags</h1>
                    <div className='flex flex-row justify-between'>
                        <p className='bg-slate-200 h-8 px-4 py-1 text-sm rounded-lg'>Funny<button className='ml-4 text-slate-400'>x</button></p>
                        <button className='bg-greenC px-6 py-0 rounded-xl h-10 text-white'>Add</button>

                    </div>
                    <h1 className='text-xl font-bold mb-4 mt-6'>Comments</h1>
                    <div className='flex ml-3 '>
                        <div className='bg-green-600 w-10 h-10 rounded-full text-xl text-white'><span className='relative left-3.5 top-1.5'>T</span></div>
                        <div className='mt-2 ml-2'>Tim</div>
                        <div className='mt-2.5 ml-2 text-sm text-gray-400 mb-4'>now</div>
                    </div>
                    <div className='w-200 -mt-5'>
                        <Something/>
                    </div>
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