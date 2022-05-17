import react, { useState } from 'react'

const AddContact = (props)=>{
  const [First_Name, setFirst_Name] = useState("")
  const [Last_Name, setLast_Name] = useState("")
  const [Email, setEmail] = useState("")
  const [Pic, setPic] = useState("")
  const [Phone, setPhone] = useState("")

  const handleClick = ()=>{
    if(props.handleClick) props.handleClick(First_Name,Last_Name,Email,Pic,Phone);
    setFirst_Name("")
    setLast_Name("")
    setEmail("")
    setPic("")
    setPhone("")
  }
  return(
    <div style={{padding:'20px', display:"flex", gap:"10px"}}>
      <form action="">
      <input style={{margin:"5px", padding:'3px 10px', outline:'none'}} type="text" required placeholder="Enter Your First Name" value={First_Name} onChange={(e)=> setFirst_Name(e.target.value)}/>
      <input style={{margin:"5px", padding:'3px 10px', outline:'none'}} type="text" required placeholder="Enter Your Last Name" value={Last_Name} onChange={(e)=> setLast_Name(e.target.value)}/>
      <input style={{margin:"5px", padding:'3px 10px', outline:'none'}} type="email" placeholder="Enter Your Email" value={Email} onChange={(e)=> setEmail(e.target.value)}/>
      <input style={{margin:"5px", padding:'3px 10px', outline:'none'}} type="text" required placeholder="Enter Your image Address" value={Pic} onChange={(e)=> setPic(e.target.value)}/>
      <input style={{margin:"5px", padding:'3px 10px', outline:'none'}} type="Number" required placeholder="Enter Your Phone no" value={Phone} onChange={(e)=> setPhone(e.target.value)}/><br/>
      <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default AddContact