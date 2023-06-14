export interface ISchema {
  type: string;
  value: TValueTypes | null;
  errMsg: string;
  label: string | null;
  name: string;
  required: boolean;
  className?: string;
  validator: (val: TValueTypes) => boolean;
}

export type TValueTypes = string | number;

export interface IFormState {
  [key: string]: string | number | boolean;
}

export interface IChildrenProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
}
