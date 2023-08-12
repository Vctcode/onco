import { Footer } from "../footer/Footer";
import { Outlet, Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <section className="container md:w-[86%] md:absolute md:left-[13%] md:mt-20  flex flex-col justify-center items-center m-auto md:h-[70vh] h-[60vh]">
      <div className="signup-wrapper flex justify-center items-center min-w-[80%] m-auto md:min-w-[599px] py-8 rounded-[10px] bg-white shadow-3xl">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold text-[--blue]">Welcome</h1>
            <span className="text-lg font-medium">
              Sign in or sign up to continue
            </span>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="google flex justify-center items-center rounded-3xl p-2 text-[14px] font-medium text-[--black1] bg-gray-300">
              Continue with Google
            </div>

            <div className="apple flex justify-center items-center rounded-3xl p-2 text-[14px] font-medium text-[--black1] bg-gray-300">
              Continue with Apple
            </div>

            <div className="line my-[6px] border-[0.5px] border-solid border-[#E1E1E1]]"></div>

            <input
              type="text"
              className="mail p-2 pl-4 rounded-3xl border-[0.5px] border-solid border-gray-300"
              placeholder="info@example.com"
            />
          </div>

          <a href="#" className="font-medium">
            Continue with Email
          </a>
        </div>
      </div>
      <output />
    </section>
  );
};
