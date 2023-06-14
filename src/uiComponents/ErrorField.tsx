interface IErrorField {
  errMsg: string;
  isVisible: boolean;
}

export const ErrorField = ({ errMsg, isVisible }: IErrorField) => {
  return (
    <div
      style={{
        color: "red",
        visibility: `${isVisible ? "visible" : "hidden"}`,
      }}
    >
      {errMsg}
    </div>
  );
};
