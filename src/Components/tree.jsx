
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from "react";
import "../../src/assets/styles/folderSSB.css"

import dropI from "../../src/assets/imgs/dropI.png"
import dropIU from "../../src/assets/imgs/dropIU.png"
import Folder from "../../src/assets/imgs/Folder.png"
import boardI from "../../src/assets/imgs/boardI.png"
import Union from "../../src/assets/imgs/Union.png"


const Tree = (props) => {

  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column text-lg">
        {props.data.map((tree) => (
          <TreeNode  editBS={props.editBS} node={tree}/>
        ))}
      </ul>
    </div>
  );
};

const TreeNode = (prop) => {
  const [childVisible, setChildVisiblity] = useState(true);

  const hasChild = prop.node.children ? true : false;
  const [folderName, setFoldername] = useState("")




  return (
    <div className={"relative -left-2"} >
      { prop.node.key === "folder" &&
      <img onClick={prop.editBS }  src={Union} class="unionI"/>
      }
      <li className="d-tree-node border-0 -ml-16 relative -left-1">
      <div onClick={(e) => setChildVisiblity((v) => !v)} className={`col d-tree-head ${prop.node.key === "boards" && "text-white text-xs mt-0 -ml-6"} ${prop.node.key.includes("folder") && "text-white mt-2 -ml-3 bg-gray-500 bg-opacity-50 p-1 w-96"}`}>
      {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
          </div>
        )}
        <div className='ml-20'>

        { prop.node.key === "folder" &&
        <div>

        
          <div className='-ml-3' >
            
            {childVisible && 
              <img src={dropI} class="dropI" alt="img" />
              
            }
            {!childVisible && 
              <img src={dropIU} class="dropIU" alt="img" />
            }
            
            <img src={Folder} class="folderI" alt="img" />
            {prop.node.label}
          </div>
          </div>
        }
        
          { prop.node.key === "boards" &&

          <div className='ml-14' >
            <img src={boardI} class="boardI" alt="img" />
            {prop.node.label}
          </div>
         
          }
        
          { prop.node.key === "board" &&
         
          <div className='ml-24 text-sm -mb-2' onClick={event => window.location.href=`/board/${prop.node.folder}/${prop.node.label}`}>
            <div className='absolute -ml-3 text-green-500'>#</div>
            {prop.node.label} 
            </div>
          }

        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="child d-flex d-tree-container flex-column" >
            <Tree data={prop.node.children} />
          </ul>
        </div>
      )}
    </li>
    </div>
    
  );
};

export default Tree;