import { Link } from "react-router-dom"


const PlaceOrder = () => {
    return (
      <>
         <Link to="/payment"><div className=" h-12 w-100% bg-darkbrown text-center rounded-md "  style={{ position: 'sticky', bottom: 1,   zIndex: 100 }} >
              <h1 className=" cursor-pointer p-2 text-black bg-white inline-block mt-1 ">PlaceOrder</h1>
          </div></Link>
      </>
    )
  }
  
  export default PlaceOrder