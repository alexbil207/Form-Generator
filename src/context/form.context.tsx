import React, { createContext, useEffect, useState } from "react";
import { IChildrenProps, IFormState } from "../types/types";

interface IContext {
  formData: IFormState | null;
  setFormData: React.Dispatch<React.SetStateAction<IFormState>>;
}

export const FormContext = createContext<IContext>({
  formData: null,
  setFormData: () => undefined,
});

export const FormContextProvider = ({ children }: IChildrenProps) => {
  const [formData, setFormData] = useState<IFormState>({});
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
