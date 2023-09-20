const Button = ({ text = "Click me!" }) => {
  return (
    <button className="border-2 border-blue-400 text-blue-400 font-normal hover:bg-blue-400 hover:text-white py-1 px-3 mx-10 rounded-full shadow transition ease-out duration-500">{text}</button>
  );
}

export default Button;
