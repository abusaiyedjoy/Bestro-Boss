/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginBg from "./../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginBg2 from "./../../assets/others/authentication.png";
import loginAsideBg from "./../../assets/others/authentication2.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const [disable, setDisable] = useState(true);
  const { SignIn } = useContext(AuthContext);
  const navigate =useNavigate();
  const location =useLocation();

  const formLocation = location.state?.form?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(formLocation, {replace: true});
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to login",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  const handleCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${loginBg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full text-gray-800 flex justify-around items-center shadow-2xl p-16 max-w-7xl space-y-3 rounded-xl"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <img src={loginAsideBg} alt="Side background" />
        </div>
        <div>
          <h1 className="text-5xl mb-6 font-bold text-center">
            Please Sign In
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 text-lg">
              <label htmlFor="email" className="block dark:text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-[#ceb174]"
                required
              />
            </div>
            <div className="space-y-1 text-lg">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-[#ceb174]"
                required
              />
              <div className="flex justify-end text-lg dark:text-gray-600 hover:underline transition-colors hover:text-[#ceb174]">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="space-y-1 text-lg">
              <label className="block dark:text-gray-600">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleCaptcha}
                id="captcha"
                placeholder="Enter Captcha"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-[#ceb174]"
              />
            </div>
            <input
              className="block w-full p-3 text-xl font-medium hover:scale-105 text-center rounded-md dark:text-gray-50 dark:bg-[#ceb174] transition-transform cursor-pointer duration-300"
              type="submit"
              value="Sign In"
              disabled={disable}
            />
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-lg mb-2 dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-[#ceb174] focus:ring-2 focus:ring-offset-1 transition-colors duration-300 dark:border-[#ceb174] focus:dark:ring-[#ceb174]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-lg font-medium">Login with Google</p>
            </button>
          </div>
          <p className="text-lg text-center mt-4 sm:px-6 dark:text-gray-600">
            Don't have an account?
            <Link
              to="/signUp"
              className="hover:underline hover:text-[#ceb174] ml-1 dark:text-gray-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
