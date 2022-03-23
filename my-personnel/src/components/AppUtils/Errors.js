const Errors = ({ errors }) => {
  return (
    errors.length > 0 && (
      <div className="flex flex-col items-center p-6 border-2 rounded-lg border-red-700">
        <h2>Oops, we've run into a problem or two.</h2>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Errors;
