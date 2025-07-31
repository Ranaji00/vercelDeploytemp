import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import img1 from '../assets/im1.jpg'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      //   console.log(error);
      toast.error(error.message);
    }
  };

  return (




    // <div className="min-h-screen flex items-center justify-center w-full ">
    //   <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
    //     <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
    //     <form onSubmit={onSubmitHandler}>
    //       <div className="mb-3 mn-w-72">
    //         <p className="text-sm font-medium text-gray-700 mb-2">
    //           Email Address
    //         </p>
    //         <input
    //           className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
    //           type="email"
    //           placeholder="your@email.com"
    //           required
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //         />
    //       </div>
    //       <div className="mb-3 mn-w-72">
    //         <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
    //         <input
    //           className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
    //           type="password"
    //           placeholder="Enter your password"
    //           required
    //           onChange={(e) => setPassword(e.target.value)}
    //           value={password}
    //         />
    //       </div>

    //       <button
    //         className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
    //         type="submit"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>




    <>




      <img src={img1} className="md:hidden object-cover absolute opacity-75  bg-zinc-900 w-screen h-screen ">

      </img>
      <div className="border-2  md:hidden    h-screen w-screen">

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col border-2 px-8 text-lg py-12 backdrop-blur-md  border-zinc-500 items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        >

          <div className="py-4">
            <span className="font-medium game text-4xl">BYTE</span>
            <span className="font-medium text-3xl text-[#054895]">CART</span>
          </div>

          <div className="flex items-center gap-2">



            <p className="prata-regular text-3xl"> ADMIN PANEL</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />


          </div>
       
          <input
            type="email"
            className="w-full px-4 rounded-3xl outline-none  py-2 border border-gray-800"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="w-full px-4 rounded-3xl outline-none py-2 border border-gray-800"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className="w-full flex  flex-col gap-2 justify-between text-xs mt-4">
            <p className="cursor-pointer flex gap-2 ">
              <input className="w-3" required type="checkbox"></input>
              <span className="">

                I hereby agree yours all T & C*
              </span>

            </p>
            
          </div>

          <button className="bg-[#054895] w-32 py-3 px-4 text-white hover:text-[#054895] text-lg hover:bg-white  hover:border-2 hover:border-zinc-500 font-light mt-4">
            Sign In
          </button>
        </form>
        
        </div>


      {/* laptop */}



      <img src={img1} className="md:flex hidden object-cover absolute opacity-75  bg-zinc-900 w-screen h-screen ">

      </img>

      <div className=" py-16 hidden md:flex  justify-center border-black h-screen w-screen">

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col border-2 w-1/2 px-8 backdrop-blur-md rounded-xl border-zinc-600 items-center   gap-4 text-gray-800"
        >

          <div className="py-4">
            <span className="font-medium game text-4xl">BYTE</span>
            <span className="font-medium text-3xl text-[#054895]"> CART</span>
          </div>

          <div className="inline-flex items-center gap-2 mb-2 mt-10">



            <p className="prata-regular text-3xl">ADMIN PANEL</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />


          </div>

          <input
            type="email"
            className="w-[80%] px-4 rounded-3xl outline-none py-2 border border-gray-800"
            placeholder="Enter YourEmail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="w-[80%] rounded-3xl px-4 py-2 border border-gray-800"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className="w-full flex-col justify-between px-12 text-sm mt-[8px]">


            <p className="cursor-pointer flex gap-2 items-center ">
              <input className="" required type="checkbox"></input>
              <span className="">

                I hereby agree yours all T & C*
              </span>

            </p>
          </div>

          <button className="bg-[#054895] w-64 py-4 px-8 text-white hover:text-[#054895] text-xl hover:bg-white  hover:border-2 hover:border-zinc-500 font-light mt-4">
            Sign In
          </button>
        </form></div>





    </>






  );
};

export default Login;
