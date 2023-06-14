interface IInputField {
  type: string;
  name: string;
  onChange: (ev: React.ChangeEvent) => void;
  value: string;
  placeHolder?: string;
  elInput?: React.RefObject<HTMLInputElement> | undefined;
  required: boolean;
}

export const InputField = ({
  type,
  name,
  onChange,
  value,
  placeHolder = "",
  elInput,
  required,
}: IInputField) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      ref={elInput}
      required={required}
    />
  );
};
