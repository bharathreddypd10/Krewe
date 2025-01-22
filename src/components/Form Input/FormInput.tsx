import { ChangeEvent } from "react"
import './FormInput.css'
interface FormInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <div className="form-input">
        <label htmlFor={props.name}>{label}</label>
        <input id={props.name} {...props} />
    </div>
  );
};

export default FormInput
