import React, {useState, useEffect} from "react";


export default function General_info(){


  return(
    <>
      <form action="">
        <div>
          <input 
          type="text" 
          placeholder={"Name"}

          />
          <input 
          type="text" 
          placeholder={"The role you are applying for"}

          />
        </div>
        <label>Phone:</label>
          <input 
          type="tel" 
          placeholder={"Phone"}

          />
        <label>Email:</label>
          <input 
          type="text" 
          placeholder={"Email"}

          />
        <label>LinkedIn:</label>
          <input 
          type="text" 
          placeholder={"LinkedIn"}

          />
        <label>Location:</label>
          <input 
          type="text" 
          placeholder={"Location"}

          />
        <img src="" alt="" />
      </form>

    </>
  )
}