import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
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
            className="mb-4 w-3/4 py-2 px-4"
            placeholder="Email Address"
            type="email"
            name="email"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4"
            placeholder="Password"
            type="password"
            name="password"
            required
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
