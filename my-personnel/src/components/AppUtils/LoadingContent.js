import loadingCircle from "../../images/loading-rotating.gif";

const LoadingContent = () => {
  return (
    <div
    className="flex justify-center"
    >
      <img
      style={{ width: "80px", height: "80px" }}
      src={loadingCircle}
      alt="loading circle" />
    </div>
  );
};

export default LoadingContent;
