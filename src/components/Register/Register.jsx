import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions!");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully !");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4  w-full py-2 px-4"
            placeholder="Email Address"
            type="email"
            name="email"
            id=""
            required
          />
          <br />
          <div className="relative mb-4">
            <input
              className=" w-full py-2 px-4"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              id=""
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-2 text-2xl"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="mb-4  w-full btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
