import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../../components/Form Input/FormInput";
import './Signin.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Please fill in both fields.");
      return;
    }
    
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="********"
          onChange={handleChange}
        />

        <div className="form-div">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
