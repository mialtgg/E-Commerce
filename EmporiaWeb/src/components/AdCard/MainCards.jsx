import Button from "../Button/HomeButton";

const MainCards = ({ title, description, imageUrl }) => {
  return (
    <div
      className="h-[738px] p-6 text-white relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
      <div className="absolute bottom-6 left-6">
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default MainCards;
