import { ISchema } from "../../types/SchemaType";
import { v4 as uuidv4 } from "uuid";
import { RenderElements } from "./RenderElements";

interface IFormGenerator {
  schema: ISchema[];
}

export const FromGenerator = ({ schema }: IFormGenerator) => {
  return (
    <section>
      {schema.map((details) => (
        <RenderElements key={uuidv4()} details={details} />
      ))}
    </section>
  );
};
