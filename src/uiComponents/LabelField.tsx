interface ILabelField {
  label: string;
  name: string;
}

export const LabelField = ({ label, name }: ILabelField) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
    </>
  );
};
