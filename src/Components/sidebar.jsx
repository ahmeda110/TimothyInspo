import React, { useState } from "react";

import FolderSSB from './folderSSB'
import Search from './search'
import NewFolder from './newFolder'
import NewBoard from './newBoard'
import EditBoard from './editBoard'

import "../../src/assets/styles/homePage.css"
import folder from "../../src/assets/imgs/ff.png"
import library from "../../src/assets/imgs/Calendar.png"
import discover from "../../src/assets/imgs/Chart.png"
import account from "../../src/assets/imgs/User.png"

import libraryI from "../../src/assets/imgs/libraryI.svg"
import logoI from "../../src/assets/imgs/logoI.png"
import search from "../../src/assets/imgs/Search.png"
import plusS from "../../src/assets/imgs/PlusS.png"
import profile from "../../src/assets/imgs/Profile.png"
import settings from "../../src/assets/imgs/Settings.png"

import $ from 'jquery'

function SideBar(props) {
  const [open, setOpen] = useState(true);
  const [modalSearchShow, setSearchModalShow] = React.useState(false);
  const [modalNewFolderShow, setNewFolderModalShow] = React.useState(false);
  const [modalEditBoardShow, setEditBoardModalShow] = React.useState(false);
 

  const [treeData, setTreeData] = React.useState([
    {
      key: "folder",
      folder: true,
      label: "Default Folder",
      children: [
        {
          key: "boards",
          label: "Boards",
          children: [
            {
              key: "board",
              description: "",
              label: "sample-board", 
              folder: "Default Folder"
            },
          ]
        }
      ],
    },
    {
      key: "folder",
      folder: true,
      label: "Folder 2",
      icon: "fa fa-folder",
      title: "Downloads Folder",
      children: [
        {
          key: "boards",
          label: "Boards",
          children: [
            {
              key: "board",
              description: "",
              label: "sample-board",
              folder: "Folder 2"
            },
            {
              key: "board",
              description: "",
              label: "sample-board",
              folder: "Folder 2"
            },
          ]
        }
      ],
    },
    
  ])

  const Menus = [
    { title: "SEARCH", src: search },
    { title: "LIBRARY", src: library },
    { title: "DISCOVER", src: discover },
    { title: "FOLDERS", src: folder },
    { title: "ACCOUNT", src: account },
    
  ];

  function handleAddClickF() {

    const temp = [ 
      {
        key: "folder",
        folder: true,
        label: `${$("#folderName").val()}`,
        children: [
          {
            key: "boards",
            label: "Boards",
            children: [
              
            ]
          }
        ],
      },
    ]
    
    setTreeData(treeData.concat(temp)) 
    setNewFolderModalShow(false)
  }

  function handleDeleteClickF() {
    treeData.map((value, i) => {

      if(value.label === $("#folderName").val()) {
        value.children[0].children.map((board) => {
          treeData[0].children[0].children.push(board)
        })
        
        treeData.splice(i, 1)
      }
    })

    setTreeData(treeData) 
    setNewFolderModalShow(false)
  }


  function handleAddClickB() {
    const folderS = $("#folderS").val()
    const boardN = $("#boardN").val()

    treeData.map((val) => {
      if(val.label === folderS) {
        val.children[0].children.push({
          key: "board",
          label: `${boardN}`,
          folder: `${folderS}`
        },)
      }
    })

    props.setNewBoardModalShow()
  }

  function handleEditClickB() {
    const nFolder = $("#folderSC").val()
    const board = $("#boardNE").val()

    treeData.map((val) => {
      val.children[0].children.map((boards, index) => {
        if(boards.label === board) {
          treeData.map((all) => {
            if(all.label === nFolder) all.children[0].children.push(boards)
          })
          val.children[0].children.splice(index, 1)
        }
      })
    })

    setEditBoardModalShow(false)
  }

  function handleDeleteClickB() {
    const board = $("#boardNE").val()

    treeData.map((val) => {
      val.children[0].children.map((boards, index) => {
        if(boards.label === board) {
          val.children[0].children.splice(index, 1)
        }
      })
    })

    setEditBoardModalShow(false)
  }

  function editBoardS() {
    setEditBoardModalShow(true)
  }

 


  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
      <div
        className={`fixed ${
          open ? "w-96" : "w-24 "
        } bg-gradient-to-b from-greenC to-greenCD h-screen p-5 pt-8 duration-300`}
      >
 
        <div className="flex gap-x-4 items-center -mt-4">
        <img src={logoI} class="logoI" alt="img" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 tracking-widest -mt-1 -ml-6 ${
              !open && "scale-0"
            }`}
          >
            inspoboard
          </h1>
        </div>

        <ul className="pt-8 ">
        
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`relative flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              `}
            >
              <div>
              { Menu.title === "SEARCH" &&
              <div className="flex text-slate-400 -mt-5 -ml-2">
                <img src={search} class="search" alt="img" />
                <div onClick={() => setSearchModalShow(true)} class="searchText">Search</div>
                
              </div>
              }

              { Menu.title === "LIBRARY" &&
              <div className={`relative top-3 bottom-4 -mt-1`} onClick={event =>  window.location.href='/'}>
                <img src={libraryI} class="libraryI" alt="img" />
                <span className={`${!open && "hidden"} origin-right duration-200 relative left-8 mb-5`}>
                <div className={" flex justify-between relative left-2"}>
                  <div className={"text-lg relative -top-1 font-bold text-white"}>
                    Library
                  </div>
                </div>

                </span>
              </div>
              }

              { Menu.title === "FOLDERS" &&
              <div className={"h-full"}>
                <hr className={`${!open && "hidden"} border-gray-400 relative -ml-7 mt-2 mb-0 w-96 mb-6 opacity-50`}></hr>
                <span className={`${!open && "hidden"} origin-right duration-200 relative left-8 -top-0`}>
                  
                  <div className={"flex justify-between relative -left-10 font-bold text-base -mt-1 text-white"}>
                    <div>
                      Folders
                    </div>
                    <div className={"relative right-1 px-1.5 rounded-md font-extra-bold"}>
                      <img onClick={() => setNewFolderModalShow(true)} src={plusS} class="plusS mt-1 text-white" alt="img" />
                    </div>
                  </div>
                  
                  <div className="mt-1">
                  <FolderSSB data={treeData} editBS={editBoardS}/>
                  </div>
                </span>
              </div>
              }
              </div>
              

              { Menu.title === "ACCOUNT" &&
              <div className={`fixed bottom-0 mb-4 w-72`} onClick={event =>  window.location.href='/account'}>
                <hr className={`${!open && "hidden"} border-gray-400 relative -ml-7 mt-2 mb-3 w-96 opacity-50`}></hr>
                <img src={profile} class="profileI" alt="img" />
                <span className={`${!open && "hidden"} origin-right duration-200 relative left-8 mb-5 `}>
                <div className={" flex justify-between relative left-2"}>
                  <div className={"text-base text-white relative top-0 -left-4"}>
                    User Name
                  </div>
                </div>
                <img src={settings} class="settings" alt="img" />

                </span>
              </div>
              } 
            </li>
          ))}
        </ul>

        <Search show={modalSearchShow} onHide={() => setSearchModalShow(false)} />
        <NewFolder show={modalNewFolderShow} onHide={() => setNewFolderModalShow(false)} sBAF={handleAddClickF} sBDF={handleDeleteClickF}/>
        <NewBoard show={props.modalNewBoardShow} onHide={props.setNewBoardModalShow} tree={treeData} sBAF={handleAddClickB} />
        <EditBoard show={modalEditBoardShow} onHide={() => setEditBoardModalShow(false)} tree={treeData} sBEB={handleEditClickB} sBDB={handleDeleteClickB} />
      </div>

  );
};

export default SideBar;