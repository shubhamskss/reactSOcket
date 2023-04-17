let BikeDet=(props)=>{

    return (
        <>
        <div>
            <img src={props.val.avatar}></img>
            <h5>email:{props.val.email}</h5>
            <h5>Name:{props.val.first_name+" "+props.val.last_name}</h5>
        </div>
        
        
        </>
    )
}
 export default BikeDet