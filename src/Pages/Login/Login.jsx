import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
const Login = () => {
  const [disabled,setDesabled]=useState(true)
  
  const captchaRef=useRef(null);
  useEffect(()=>{
  loadCaptchaEnginge(6); 
  },[])
  
  const handleLogin=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
  }
  const handleValidateCaptcha=()=>{
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDesabled(false)
      
  }

  else {
    setDesabled(true)
   
  }
  }
  return (
    <div className=" md:flex justify-center items-center min-h-screen  md:p-0 p-6">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100  text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-amber-500 font-bold">
            Sign in to access at FlavourVista
          </p>
        </div>
        <form
        onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
              />
            </div>
       
            <div>
              <div className="flex justify-between">
              <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                ref={captchaRef}
                name="captha"
                placeholder="Write the above text"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-emerald-400 bg-gray-200 text-gray-900"
              />
               <button onClick={handleValidateCaptcha} className='text-xs mt-1 mb-0 btn btn-xs w-full bg-gray-400 hover:bg-amber-500 text-white'>
            Validate Captcha
          </button>
            </div>
          </div>

          <div>
            <button
            disabled={disabled}
              type="submit"
              className={`btn bg-gray-400 hover:bg-amber-500 w-full rounded-md py-3 text-black `}
            >
              {"Continue"}
            </button>
          </div>
        </form>
        {/* <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-amber-500 text-gray-400'>
            Forgot password?
          </button>
        </div> */}
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signUp"
            className="hover:underline hover:text-emerald-500 text-amber-500"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
