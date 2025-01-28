import { FormEvent,useState } from "react";
import FormInput from "../../components/Form Input/FormInput";
import { useFormData } from '../../Custom Hooks/useFormData';
import { useAppNavigation } from "../../Utils/navigationHelper";
import useAuth from "../../Custom Hooks/useAuth";
import { User } from "../../Custom Hooks/useAuth";
import './Signin.css';

const SignIn = () => {
  const { formData, handleChange } = useFormData({ email: '', password: '' });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const { navigateTo } = useAppNavigation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Please fill in both fields.");
      return;
    }

    const user:User = {
      role: "tenant", 
      email: formData.email, 
    };

    login(user);


    navigateTo('/tenant/dashboard/details');
    
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
        {isPasswordVisible && (
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="********"
            onChange={handleChange}
          />
        )}

        <div className="form-div">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="toggle-button-container">
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password-btn"
        >
          {isPasswordVisible ? "Sign In with Code" : "Sign In with Password"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
