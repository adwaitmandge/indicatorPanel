import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "Context/UserProvider";

export default function SignUp({
  showLogin,
  setShowLogin,
  showSignUp,
  setShowSignUp,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/admin");
  }, [navigate]);

  const submitHandler = async () => {
    console.log(email, password);
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      console.log("Missing Details");
      // Toast
      return;
    } else {
      try {
        const body = { email, password };

        const res = await fetch("http://localhost:4000/api/user/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/admin");
      } catch (err) {
        console.log(err);
        console.error(err.message);
      }
    }
  };

  return (
    <div className="mt-3 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-16 w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">Enter your details!</p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div> */}
        {/* <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white 
        "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample@simple.com"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${"border-gray-200 dark:!border-white/10 dark:text-white"}`}
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white 
        "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${"border-gray-200 dark:!border-white/10 dark:text-white"}`}
          />
        </div>

        <button
          type="button"
          onClick={submitHandler}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Login
        </button>
        <div className="mt-4 mb-2">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not Registered?
          </span>
          <button
            onClick={() => {
              setShowSignUp(true);
              setShowLogin(false);
            }}
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
