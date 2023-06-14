import { useForm } from "../../hooks/useForm";
import { ISchema } from "../../types/SchemaType";
import { ErrorField } from "../../uiComponents/ErrorField";
import { InputField } from "../../uiComponents/InputField";
import { LabelField } from "../../uiComponents/LabelField";

interface IRenderElements {
  details: ISchema;
}

export const RenderElements = ({ details }: IRenderElements) => {
  return (
    <section className={details?.className}>
      {details.label ? (
        <LabelField label={details.label} name={details.name} />
      ) : null}
      <InputField name={details.name} required type={details.type} />
    </section>
  );
};
