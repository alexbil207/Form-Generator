import { useForm } from "../../hooks/useForm";
import { ISchema } from "../../types/types";
import { ErrorField } from "../../uiComponents/ErrorField";
import { InputField } from "../../uiComponents/InputField";
import { LabelField } from "../../uiComponents/LabelField";

interface IRenderElements {
  details: ISchema;
}

export const RenderElements = ({ details }: IRenderElements) => {
  const { isError, handleChange, value } = useForm(
    details.name,
    details.validator
  );
  return (
    <>
      <div className={details?.className}>
        {details.label ? (
          <LabelField label={details.label} name={details.name} />
        ) : null}
        <InputField
          name={details.name}
          required
          type={details.type}
          value={value}
          onChange={handleChange}
        />
      </div>
      <ErrorField errMsg={details.errMsg} isVisible={isError} />
    </>
  );
};
