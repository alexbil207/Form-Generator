import { FromGenerator } from "./pages/form-generator/FromGenerator";
import { schema } from "./schema";

export const App = () => {
  return (
    <FromGenerator schema={schema} onSubmit={(data) => console.log(data)} />
  );
};
