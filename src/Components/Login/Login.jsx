import Navi from "../Header/Navi"


const Login = () => {
  return (
    <>   
      {/* <Navi/> */}
     <div className=" backdrop-blur h-screen w-screen absolute  bg-transparent  top-0 z-40">

      <div className="flex justify-center items-center">

        <div className="w-[40vw] mt-20 h-96 bg- text-textColor flex justify-center flex-col rounded-xl border-black border items-center  ">

          <h1 className=" text-center text-2xl font-bold -mt-16 ">Login</h1>

          <input type="text" placeholder="Enter your mobile number" className=" w-72 font-bold mt-5 p-2 outline-none rounded-lg text-center border-b-2 bg-brown" />

          <p className=" hidden text-[red]">Please enter a valid Email/Mobile Number</p>

          <p className=" mt-5 text-[13px]">By continuing, you agree to Udit's Terms of Use and Privacy Policy.</p>

          <button className=" p-2 mt-4 ml-4 px-12 rounded-lg bg-darkbrown bg- font-bold "  >Request OTP</button>

        </div>

      </div>

    </div>
    </>

  )
}

export default Login