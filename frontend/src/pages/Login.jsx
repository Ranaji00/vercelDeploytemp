import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import img1 from '../assets/b1.png'

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const res = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (<>
  
  {/* <div className="border-2 flex py-16  justify-center border-black h-screen w-screen">

    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col border-2 w-1/2 px-8 rounded-xl border-zinc-600 items-center   gap-4 text-gray-800"
    >

      <div className="py-4">
        <span className="font-medium game text-4xl">BYTE</span>
        <span className="font-medium text-3xl text-[#054895]">CART</span>
      </div>

      <div className="inline-flex items-center gap-2 mb-2 mt-10">



        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />


      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-[80%] rounded-2xl outline-none  px-4 py-2 border border-gray-800"
          placeholder="Enter your Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      )}
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



        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs  pb-2"
          >
            Don't have any account click here ?
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs"
          >
            Click here to Login {" "}
          </p>
        )}
      </div>

      <button className="bg-[#054895] w-64 py-4 px-8 text-white hover:text-[#054895] text-xl hover:bg-white  hover:border-2 hover:border-zinc-500 font-light mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form></div> */}




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



          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />


        </div>

        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full rounded-3xl px-4 py-2 border border-gray-800"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        )}
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
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs  pb-2"
            >
              Don't have any account click here ?
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs"
            >
              Click here to Login {" "}
            </p>
          )}
        </div>

        <button className="bg-[#054895] w-32 py-3 px-4 text-white hover:text-[#054895] text-lg hover:bg-white  hover:border-2 hover:border-zinc-500 font-light mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form></div>


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
          <span className="font-medium text-3xl text-[#054895]">CART</span>
        </div>

        <div className="inline-flex items-center gap-2 mb-2 mt-10">



          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />


        </div>

        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-[80%] rounded-2xl outline-none  px-4 py-2 border border-gray-800"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        )}
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



          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs  pb-2"
            >
              Don't have any account click here ?
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer border-black mt-2 underline hover:text-blue-900 text-[#054895]  text-xs"
            >
              Click here to Login {" "}
            </p>
          )}
        </div>

        <button className="bg-[#054895] w-64 py-4 px-8 text-white hover:text-[#054895] text-xl hover:bg-white  hover:border-2 hover:border-zinc-500 font-light mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form></div></>








  );
};

export default Login;
