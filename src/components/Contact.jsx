import react from 'react'

export default function Contact(props) {
  
  return (
    <>
     {
       props.List.map((value)=>{
         return(
           <div style={{display:"flex", gap:"15px", cursor:'pointer',}}>
              <div style={{padding:"10px"}}> <img style={{width:'50px',height:'50px', borderRadius:"50%",}} src={value.pic} alt={value.first_Name}/> </div>
              <div style={{display:'grid', marginTop:'-10px'}}> <span style={{textTransform:"capitalize",display:'flex',gap:'5px'}}><h3>{value.first_Name} </h3> <h3>{value.last_Name} </h3></span> <div style={{marginTop:"-23px"}}><span>{value.email}</span></div></div>
           </div>
         )
       })
     }
    </>
  );
}