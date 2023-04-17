import { useState } from "react"
import Body from "./Body"

let HeaderComp=({onCat1Click,onCat2Click,onSupportClick})=>{
   
   
    const handleCat1Click = () => {
        onCat1Click();
     
      };
      const handleCat2Click=()=>{
        onCat2Click()
      }
      const handleSuportClick=()=>{
        onSupportClick()
      }
     
    return <>
  
   <div className="header" style={{border:"solid",borderWidth:"5px",borderColor:"black",backgroundColor:"lightblue",width:"1500px",height:"50px",display:"flex",justifyContent:"space-around" ,alignItems:"center",spaceAround:"2px"}}>
    <button onClick={handleCat1Click}>Food</button>
  
  
    <button onClick={handleCat2Click}> Users</button>
    <button onClick={handleSuportClick}>Support</button>
  
   </div>
    </>
}
export default HeaderComp