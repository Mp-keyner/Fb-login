import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { Google } from "./Google";
// import biciWeb from '../assets/login-modo-high-web.png'

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
    handleGoogleSignin()
  };

  const handleButtonMouseEnter = () => {
    setIsButtonActive(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonActive(false);
  };

  return (
    <>
      <div className=" flex">
        <div className="bg-hero">
          {/* <img src={biciWeb} alt="" /> */}
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>In charge of <span>KODH&copy;</span></p>
          </div>
          <h1>Create an account</h1>
          <p>Let's ride a bike to
            live healthy</p>
          <button
            onClick={handleButtonClick}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className={`w-full text-black flex items-center h-[3pc] justify-center gap-4 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out `}
          // ${isButtonActive ? "bg-slate-100" : ""}
          >
            <Google color="#000" red="dribbble" />
            Google login
          </button>

          <div className="flex items-center justify-center gap-4">
            <hr className="w-[9pc]" />
            <p>Or</p>
            <hr className="w-[9pc]" />

          </div>
          {error && <Alert message={error} />}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="youremail@company.tld"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="*************"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#!"
                onClick={handleResetPassword}
              >
                Forgot Password?
              </a>
            </div>
          </form>


          <p className="my-4 text-sm flex justify-between px-3">
            Don't have an account?
            <Link to="/register" className="text-blue-700 hover:text-blue-900">
              Register
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}
