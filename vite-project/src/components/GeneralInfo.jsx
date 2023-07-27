import React, {useState, useEffect} from "react";


export default function General_info(){
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [location, setLocation] = useState('');

  return(
    <>
      <form action="">
        <div>
          <input 
          type="text" 
          placeholder={"Name"}
          value={fullName}
          // shows user input in the input box
          onChange={(e) => setFullName(e.target.value)}
          />
          <input 
          type="text" 
          placeholder={"The role you are applying for"}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <label>Phone:</label>
          <input 
          type="tel" 
          placeholder={"Phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        <label>Email:</label>
          <input 
          type="text" 
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <label>LinkedIn:</label>
          <input 
          type="text" 
          placeholder={"LinkedIn"}
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          />
        <label>Location:</label>
          <input 
          type="text" 
          placeholder={"Location"}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
        <img src="" alt="" />
      </form>
      {/* for test */}
      <p>{location}</p>
    </>
  )
}