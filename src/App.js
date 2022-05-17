import "./styles.css";
import Contact from './components/Contact'
import { useState } from "react";
import AddContact from "./components/AddContact";

const initState = [
  {
    id:1,
    first_Name:"Shivam",
    last_Name:"Kumar",
    email:"shivam@example.com",
    pic:"https://www.teahub.io/photos/full/108-1085401_simple-boy-pic-dp.jpg",
    phone:"+91-6595648633"
  },
  {
    id:2,
    first_Name:"Ravi",
    last_Name:"Raj",
    email:"shivam@example.com",
    pic:"https://yt3.ggpht.com/ytc/AKedOLRhcVzr22q3S5Fs0Lvp5-9q3v-SALw3MbWm23zDRw=s900-c-k-c0x00ffffff-no-rj",
    phone:"+91-85745648633"
  }
]
export default function App() {
  const [contactList, setContactList] = useState(initState)
  const handleClick= (First_Name,Last_Name,Email,Pic,Phone)=>{
    setContactList([
      ...contactList,
      {
        id:contactList[contactList.length-1].id+1,
        first_Name:First_Name,
        last_Name:Last_Name,
        email:Email,
        pic:Pic,
        phone:Phone
  
      }
    ])
  }
  return (
    <div className="App">
      <AddContact handleClick={handleClick}/>
      <div style={{width:"40%",margin:'auto'}}>
        <Contact List={contactList}/>
      </div>
      
    </div>
  );
}
