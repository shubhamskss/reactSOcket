import React, { useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom/client'
import HeaderComp from "./src/Components/Header"
import Body from "./src/Components/Body"
import Support from './src/Components/Support'
import io from 'socket.io-client'
const socket =io.connect("http://localhost:3001")


const AppLayout=()=>{
    const [showBody,setShowBody]=useState(false)
    const [showBody2,setShowBody2]=useState(false)
    const [showBody3,setSupport]=useState(false)
   const [search,setSearch]=useState("")
    const [data,setData]=useState({})
    const [gpData,setGpData]=useState({})
   useEffect(()=>{
    callApi()
    callGopaisaApi()
 
   },[])
   let callApi=async ()=>{
    let dataa=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.514439&lng=77.3697672&page_type=DESKTOP_WEB_LISTING')
dataa=await dataa.json()
setData(dataa?.data?.cards[2]?.data?.data?.cards)

return dataa
}


let callGopaisaApi=async ()=>{
    let gpData=await fetch("https://reqres.in/api/users?page=2")
  gpData=await gpData.json()
    setGpData(gpData?.data)
    
}

    return (<div> 
    <HeaderComp onCat1Click={()=>{setShowBody(true),setShowBody2(false),setSupport(false)}} onCat2Click={()=>{setShowBody2(true),setShowBody(false),setSupport(false)
    
}} onSupportClick={()=>{setSupport(true),setShowBody(false),setShowBody2(false)}} />
       <input style={{marginTop:"3px",marginBottom:"3px"}} ></input><button>Search</button>

       
     {showBody && data.map((i)=>{
    return <Body val={i?.data} />}
    )}
   
    {showBody2 && gpData.map((i)=>{return <Body bikeData={i} />})}
    {showBody3 && <Support />}
 
   
    </div>)
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)