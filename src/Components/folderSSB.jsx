import React, {useState} from 'react'
import Tree from "./tree";



const FolderSSB = (props) => {

 return (
    <>
      <div className="row">
      <div className="col text-center">

        <p className="-mt-2">
          <div className="row mt-1 d-flex justify-content-center">
            <div className="col-lg-8 text-left text-dark">
              <Tree data={props.data} editBS={props.editBS}/>
            </div>
          </div>
        </p>
      </div>
      </div>
    </>
  );

};

export default FolderSSB;