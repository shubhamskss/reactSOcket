import Resturants from "./Resturant"
import BikeDet from "./Bike"
const Body=(props)=>{
    return (
       
        <div style={{ border:"solid",borderColor:"grey",display:"flex", flexWrap: "wrap" }}>
      
      {props.val?<Resturants val={props.val}/>:null}
      {props.bikeData?<BikeDet val={props.bikeData}/>:null}
     
            </div>
      
     
    )
}
export default Body