function Card({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
      
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-44 h-44 p-[2px] bg-gradient-to-tr from-red-500 via-pink-500 to-blue-600"
        >
          <div className="bg-black w-full h-full flex flex-col items-center justify-center text-center">

            <img
              src={card.image}
              alt={card.title}
              className="w-[70px] h-[70px] object-cover mb-3"
            />

            <h2 className="text-purple-300 text-sm font-serif">
              {card.title}
            </h2>

            <p className="text-purple-300 text-[9px] mt-2">
              {card.description}
            </p>

          </div>
        </div>
      ))}

    </div>
  );
}

export default Card;