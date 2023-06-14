import { ISchema } from "./types/types";

export const schema: ISchema[] = [
  {
    type: "text",
    value: "",
    errMsg: "This Field is required",
    label: "First Name",
    name: "first name",
    className: "basic-form",
    validator: (val) => val.toString().length > 5,
    required: true,
  },
  {
    type: "text",
    value: "",
    errMsg: "This Field is required",
    label: "Sur Name",
    name: "sur name",
    className: "basic-form",
    validator: (val) => val.toString().length > 5,
    required: false,
  },
  {
    type: "number",
    value: "",
    errMsg: "Age Between 18 to 120 is required",
    label: "Age",
    name: "age",
    className: "basic-form",
    validator: (val) => +val > 18 && +val < 120,
    required: true,
  },
  {
    type: "e-mail",
    value: "",
    errMsg: "Enter Valid E-mail Address",
    label: "E-mail",
    name: "email",
    className: "basic-form",
    validator: (val) => {
      const regex = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
      );
      return regex.test(val.toString());
    },
    required: true,
  },
];
