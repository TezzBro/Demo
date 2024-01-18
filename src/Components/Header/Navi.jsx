import { useState } from "react"
// import Buttons from "../Buttons"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import CartBut from "../Products/CartBut";
import { FaCartShopping } from "react-icons/fa6";

const Navi = ({ text, itemCount, setCartItems }) => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }



    return (
        <>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif' }} className=" flex z-50 text-center items-center justify-between lg:px-12 md:px-10  px-6  sm:px-10  text-textColor sticky top-0  bg-darkBlack h-[72px]
            shadow-lg transition duration-200 ease-in shadow-white/50 ">

                <div >
                    <h1 className=" font-extrabold text-[20px]  lg:text-[30px] md:text-[25px] sm:text-[20px]">MANISH BHAIYA</h1>
                </div>




                <div className="flex gap-4">




                    <div onClick={toggleMenu} id="navstiky" className={`  z-40 items-center flex-col  gap-5 top-[74px] flex bg-black bg-opacity-60 h-[88.7vh] text-white w-full left-0 px-10 py-10 sm:flex lg:top-0 md:top-0 md:px-0 md:w-auto md:bg-black md:text-textColor md:py-0 lg:px-0 lg:bg-opacity-0 md:bg-opacity-0  lg:w-auto lg:bg-darkBlack lg:text-textColor lg:py-0 lg:bg  lg:flex lg:flex-row md:flex-row md:flex absolute lg:relative md:relative sm:flex-col  ${open ? 'block transition duration-300 ease-in' : '  hidden sm:hidden'}`}>


                        <NavLink exact to="/" activeClassName="active" className="Navbar" >
                            Overview
                        </NavLink>
                        <NavLink to="/product" activeClassName="active" className="Navbar">
                            Product
                        </NavLink>
                        <NavLink to="/about" activeClassName="active" className="Navbar">
                            About Us
                        </NavLink>
                        <NavLink to="/contact" activeClassName="active" className="Navbar">
                            Contact Us
                        </NavLink>

                    </div>

                    <div className=" flex items-center gap-4  justify-items-end">
                        <Link to="/login">
                        <div className=" text-3xl hover:scale-110 cursor-pointer"> <CgProfile /></div>
                        </Link>
                        <Link to="/cartpage">
                            <div className="flex border-2 font-bold leading-3 hover:bg-white hover:text-black border-white w- h-9 cursor-pointer justify-center items-center transition ease-linear duration-300 gap-1">
                                {/* <div>Cart Item[]</div>
                                <div><FaAngleDown /></div> */}
                                <div className=" hidden lg:block md:block sm:block"><CartBut text="Add to Cart" setCartItems={setCartItems} itemCount={itemCount} /></div>

                                <div className=" block lg:hidden md:hidden sm:hidden">
                                <FaCartShopping />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>




                <div onClick={toggleMenu} className={`flex flex-col gap-1  cursor-pointer lg:hidden md:hidden `}>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2 transition duration-300 ease   ${open ? ' transform translate-y-[4px] -rotate-[45deg]' : 'bg-blue-300'}`} ></div>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2  ${open ? 'hidden' : 'bg-blue-300'}`} ></div>

                    <div className={`w-7 h-[3px] text-white bg-white border border-r-2 transition duration-300 ease ${open ? '  transform -translate-y-[4px] rotate-[45deg]' : 'bg-blue-300'}`} ></div>

                </div>

            </div>
        </>
    )
}

export default Navi