

const Delivery = () => {
    return (
        <>
            <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center ">
                    <div className="">
                        <h2 className=" text-lg font-semibold mb-1">Name</h2>
                        <input type="text" placeholder="Your Name" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />

                        <h2 className=" text-lg font-semibold mb-1 mt-4">Email</h2>
                        <input type="text" name="" id="" placeholder="Your Email" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />
                    </div>

                    <div>
                        <h2 className=" text-lg font-semibold mb-1">Address</h2>
                        <input type="text" name="" id="" placeholder=" your address area" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />

                        <h2 className=" text-lg font-semibold mb-1  mt-4">City</h2>
                        <input type="text" name="" id="" placeholder="Your city or district" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />
                    </div>

                    <div>
                        <h2 className=" text-lg font-semibold mb-1">Mobil Number</h2>
                        <input type="text" name="" id="" placeholder="Mobil No." className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />

                        <h2 className=" text-lg font-semibold mb-1  mt-4">Alternate Number</h2>
                        <input type="text" placeholder="Mobil Number" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />
                    </div>

                    <div>
                        <h2 className=" text-lg font-semibold mb-1 ">State</h2>
                        <input type="text" name="" id="" placeholder="Start" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown"/>

                        <h2 className=" text-lg font-semibold mb-1  mt-4">Pincode</h2>
                        <input type="text" name="" id="" placeholder="Pincode" className=" outline-none rounded-md p-1 text-white mb border-none bg-darkbrown" />

                    </div>


                    
                </div>
                <div className=" flex  flex-wrap font-semibold gap-10 justify-center mt-10 items-center">
                        <button className="p-3 bg-darkbrown rounded-md">Save and Delivery</button>
                        <h2 className="  cursor-pointer text-lg "> Cancel</h2>
                    </div>
            </div>
        </>
    )
}

export default Delivery