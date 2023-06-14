import { useState, useEffect, useContext } from "react";
import { useDebounce } from "./useDebounce";
import { TValueTypes } from "../types/types";
import { FormContext } from "../context/form.context";

type TuseForm = (val: TValueTypes) => boolean;
interface IUseForm {
  isError: boolean;
  value: TValueTypes;
  handleChange: (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const useForm = (name: string, validator: TuseForm): IUseForm => {
  const [value, setValue] = useState<TValueTypes>("");
  const [isError, setError] = useState<boolean>(false);
  const { setFormData } = useContext(FormContext);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (!debouncedValue) return;
    setError(!validator(debouncedValue));
    setFormData((prev) => ({ ...prev, [name]: debouncedValue }));
  }, [debouncedValue, validator, name, setFormData]);

  return {
    isError,
    value,
    handleChange: (
      ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setValue(ev.target.value);
    },
  };
};
