import React from 'react'

const DeleteProject = ({ close }:any) => {
    return (
        <div className="flex flex-col w-[20%] border-2 border-black p-8 h-[fit-content] font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
          <button className="text-black place-self-end mb-4" onClick={close}>
            Close
          </button>
          <p className='mb-4 text-black text-center'>Are you sure you want to delete the Project? </p>
          <button className="text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2">
            Delete Project
          </button>
        </div>
      );
}

export default DeleteProject