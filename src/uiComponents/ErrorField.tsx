interface IErrorField {
  errMsg: string;
}

export const ErrorField = ({ errMsg }: IErrorField) => {
  return <div style={{ color: "red" }}>{errMsg}</div>;
};
