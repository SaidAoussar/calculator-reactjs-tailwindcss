const Button = ({
  bgColor = "bg-primary-200",
  textColor = "text-white",
  handleBtnfn,
  children
}) => {
  console.log(bgColor, textColor);
  return (
    <button
      className={`py-5 ${bgColor} ${textColor} text-4xl`}
      onClick={(e) => {
        handleBtnfn(e.target.innerText);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
