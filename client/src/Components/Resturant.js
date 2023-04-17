const Resturants=(props)=>{
 
  
    return (
        <div style={{ width: 'auto', height: 'auto'}}>
         
       <img src={"https://res.cloudinary.com/swiggy/image/upload/"+props?.val?.cloudinaryImageId} style={{ width: '180px', height: 'auto'}}></img>
<br/>
    <h3 >{props.val.name}</h3>
    <h5>{props.val.address}</h5>

 <div style={{display:"flex" ,alignItems:"center"}}>
 <p
  style={{margin:0,padding:0}}
 >{props.val.avgRating}</p><img src={`https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg`} style={{ width: '50px', height: 'auto',margin:0,padding:0}}  />
 <h5 style={{marginLeft:"20px"}}>{props.val.sla.deliveryTime+"min"}</h5>
 <h6 style={{marginLeft:"20px"}}>{props.val.costForTwoString}</h6>
   
 </div>
    
        </div>
    )
}
export default Resturants