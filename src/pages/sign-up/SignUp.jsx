import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = (updateFields) => {
  const [fields, setFields] = useState({ ...defaultFields, ...updateFields });
  const { displayName, email, password, confirmPassword } = fields;

  const validateForm = () => {
    let hasError = false;
    if (password !== confirmPassword) {
      hasError = true;
      console.error("password");
    }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      hasError = true;
      console.error("email");
    }
    return hasError;
  };
  const handleSubmit = (event) => {
    const hasError = validateForm();
    event.preventDefault();
    const createAuthAndUser = async () => {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
      } catch (error) {
        console.log(error);
      }
    };
    if (!hasError) {
      createAuthAndUser();
      setFields(defaultFields);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "displayName":
        break;
      case "email":
        break;
      case "password":
        break;
      case "confirmPassword":
        break;
      default:
        break;
    }
    setFields({ ...fields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />

        <label>Retype Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />

        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
