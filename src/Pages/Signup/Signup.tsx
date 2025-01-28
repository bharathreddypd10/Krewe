import { FormEvent } from "react";
import FormInput from "../../components/Form Input/FormInput";
import { useFormData } from "../../Custom Hooks/useFormData";
import { useAppNavigation } from "../../Utils/navigationHelper";
import './Signup.css'
const Signup = () => {
  const { formData, handleChange } = useFormData({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { navigateTo } = useAppNavigation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    alert("Registration successful");

    console.log(formData);

    navigateTo('/general/login/email');

  };

  return (
    <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
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
            placeholder="Minimum 8 characters"
            onChange={handleChange}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Minimum 8 characters"
            onChange={handleChange}
          />

          <div className="signup-form-button">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
  );
};

export default Signup;
