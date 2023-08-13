import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "components/icons/SignIn";

const Login = ({ showLogin, setShowLogin, showSignUp, setShowSignUp }) => {
  const showSuccessMessage = () => {
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorMessage = () => {
    toast.error("Please Fill all Fields", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showErrorEmailMessage = () => {
    toast.error("Enter a valid Email!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showInvalidCredentialsMessage = () => {
    toast.error("Invalid Credentials!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

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

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // EITHER INPUT FIELD IS EMPTY
    if (!email || !password) {
      showErrorMessage();
      setLoading(false);
      setEmail("");
      setPassword("");
      console.log("Missing Details");
      return;
    }
    // ENTERED EMAIL IS INVALID
    else if (!emailRegex.test(email)) {
      setLoading(false);
      setEmail("");
      showErrorEmailMessage();
    }
    // ALL DETAILS ARE VALID
    else {
      try {
        const body = { email, password };

        const res = await fetch("http://localhost:4000/api/user/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        });

        setEmail("");
        setPassword("");

        const data = await res.json();
        console.log(data);

        showSuccessMessage();
        setTimeout(() => {
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/admin");
        }, 2000);
      } catch (err) {
        setLoading(false);
        showInvalidCredentialsMessage();
        console.log(err);
        console.error(err.message);
      }
    }
  };

  return (
    <div className="mb-16 mt-3 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
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
          {!loading ? (
            "Login"
          ) : (
            <div class="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="mr-2 inline h-8 w-8 animate-spin fill-white text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </button>
        <ToastContainer />
        <div className="mb-2 mt-4">
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
};

export default Login;
