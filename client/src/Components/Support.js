import io from 'socket.io-client'
const socket =io.connect("http://localhost:3001")
import { useEffect, useState } from 'react'

const Support=()=>{
    const sendMsg=()=>{
        socket.emit("sendMsg",{
            msg:["hello World","hi there","how are you","tested"]
        })
        setClicked(true)
    }

const [showMsg,setShowMsg]=useState("")
const [clicked,setClicked]=useState(false)


useEffect(() => {
    sendMsg() // Call sendMsg function automatically
  }, [])

    useEffect(()=>{
    
socket.on("receiveMessage",(data)=>{
    
 
    setShowMsg("")
let index=0
let interval=setInterval(()=>{
    console.log("datainside",data)
    setShowMsg(data.msg[index])
index++
if(index>=data.msg.length){index=0}
},2000)
return ()=>{clearInterval(interval)}


})
},[clicked])

    return (
        <>
       <div style={{border:"solid",borderColor:"black",height:"200px",width:"300px"}} >
        {showMsg}
        </div> 
        </>
    )
}
export default Support