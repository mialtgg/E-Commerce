import Button from "../Button/HomeButton";

const AdCard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div
      className="mt-12 p-6 text-white relative bg-cover bg-center rounded-lg h-[500px] flex items-end" // mt-12 eklendi
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute bottom-6 left-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default AdCard;
