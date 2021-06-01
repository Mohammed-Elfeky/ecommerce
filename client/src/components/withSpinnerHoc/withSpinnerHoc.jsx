import spinnerGif from "./Spinner-1s-200px.gif";
const withSpinnerHoc = (WrapedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return (
        <div style={{ textAlign: "center" }}>
          <img src={spinnerGif} alt="" />
        </div>
      );
    } else {
      return <WrapedComponent {...otherProps} />;
    }
  };
  return spinner;
};
export default withSpinnerHoc;
