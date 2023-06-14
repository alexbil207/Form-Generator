import { useContext } from "react";
import { IFormState } from "../types/types";
import { FormContext } from "../context/form.context";

interface ISubmitButton {
  onSubmit: (data: IFormState | null) => unknown;
}

export const SubmitButton = ({ onSubmit }: ISubmitButton) => {
  const { formData, setFormData } = useContext(FormContext);

  const onClick = (ev: React.FormEvent) => {
    ev.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <button className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
};
