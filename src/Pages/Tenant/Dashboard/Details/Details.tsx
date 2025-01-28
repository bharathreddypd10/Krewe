import { useState,useEffect,FormEvent } from "react";
import FormInput from "../../../../components/Form Input/FormInput";
import useAuth from "../../../../Custom Hooks/useAuth";
import { User } from "../../../../Custom Hooks/useAuth";
import './Details.css'

const Details = () => {
    const { user, setUser } = useAuth();
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");

    useEffect(() => {
        // In case user data changes (from login/logout), we update the form state
        if (user) {
          setFirstName(user.firstName || "");
          setLastName(user.lastName || "");
        }
      }, [user]);


    const handleSave = (e: FormEvent) => {
      e.preventDefault();

      if(!user){
        return;
      }

      if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }
      const updatedUser: User = {
        ...user,
        firstName,
        lastName,
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    };
  return (
    <div className="details-container">
      <form onSubmit={handleSave}>
      <FormInput
        label="First Name"
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <FormInput
        label="Last Name"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
      />
      <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default Details
