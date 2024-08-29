function HomeButton({ text }) {
  return (
    <button className="bg-white text-black font-semibold  py-3 px-3 lg:py-3 lg:px-4 rounded shadow hover:bg-gray-100 transition-all duration-300">
      {text}
    </button>
  );
}

export default HomeButton;
