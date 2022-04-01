const Centerer = ({ children, fullScreen = false, width }) => {
  return (
    <div
      className={`${fullScreen && "h-full"} flex items-center justify-center`}
    >
      <div className={`${width} flex flex-col justify-center text-center pb-8 border-4 border-sky-500 rounded-lg`}>
        {children}
      </div>
    </div>
  );
};

export default Centerer;
