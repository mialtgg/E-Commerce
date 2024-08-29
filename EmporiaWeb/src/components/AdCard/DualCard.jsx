import Button from "../Button/HomeButton";

const DualCard = ({ card1, card2 }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div
        className="p-6 text-white relative bg-cover bg-center rounded-lg h-[500px] flex items-end"
        style={{
          backgroundImage: `url(${card1.imageUrl})`,
        }}
      >
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-bold mb-4">{card1.title}</h2>
          <p className="text-lg mb-4">{card1.description}</p>
          <Button text={card1.buttonText} />
        </div>
      </div>
      <div
        className="p-6 text-white relative bg-cover bg-center rounded-lg h-[500px] flex items-end"
        style={{
          backgroundImage: `url(${card2.imageUrl})`,
        }}
      >
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-bold mb-4">{card2.title}</h2>
          <p className="text-lg mb-4">{card2.description}</p>
          <Button text={card2.buttonText} />
        </div>
      </div>
    </div>
  );
};

export default DualCard;
