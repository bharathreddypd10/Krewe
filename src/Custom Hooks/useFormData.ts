import { useState, ChangeEvent } from 'react';

export const useFormData = <T extends Record<string, any>>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleChange, setFormData };
};
