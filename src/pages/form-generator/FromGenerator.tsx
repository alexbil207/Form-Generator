import { IFormState, ISchema } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { RenderElements } from "./RenderElements";
import { FormContextProvider } from "../../context/form.context";
import { SubmitButton } from "../../uiComponents/SubmitButton";

interface IFormGenerator {
  schema: ISchema[];
  onSubmit: (data: IFormState | null) => unknown;
}

export const FromGenerator = ({ schema, onSubmit }: IFormGenerator) => {
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  return (
    <FormContextProvider>
      <form onSubmit={handleSubmit}>
        {schema.map((details) => (
          <RenderElements key={uuidv4()} details={details} />
        ))}
        <SubmitButton onSubmit={onSubmit} />
      </form>
    </FormContextProvider>
  );
};
