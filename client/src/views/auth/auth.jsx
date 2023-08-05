import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      {showLogin ? (
        <SignIn
          showSignUp={showSignUp}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
        />
      ) : (
        <SignUp
          showSignUp={showSignUp}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
        />
      )}
    </div>
  );
};

export default Auth;
