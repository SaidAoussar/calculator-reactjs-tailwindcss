const CalculatorWrapper = ({ children }) => {
  return (
    <div className="bg-primary-400 text-white w-9/12  sm:w-[25rem]">
      <div>{children}</div>
    </div>
  );
};

export default CalculatorWrapper;
