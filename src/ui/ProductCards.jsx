import { Check } from 'lucide-react';

const ProductCards = ({ product,cards,SetCards}) => {

   const handleBuyBtn = () => {
    const isFound = cards.find(item => item.id === product.id)
    if(isFound)
     return;
    
    SetCards([...cards,product])
     
   }
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl p-5 ">
      <div className="flex justify-between items-center mb-3">
        <span className="badge badge-warning absolute right-4 top-4">
          {product.tagType}
        </span>
        <div className="text-4xl mb-2">{product.icon}</div>
      </div>
      <h2 className="text-xl  text-start font-bold">{product.name}</h2>
      <p className="text-sm text-start  text-gray-500 mt-1">
        {product.description}
      </p>
      <p className="text-lg text-start font-semibold mt-2">
        ${product.price} /{product.period}
      </p>
      <ul className="mt-4 flex flex-col gap-2 text-sm">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-green-500"></Check> {feature}
          </li>
        ))}
      </ul>
      <div onClick={() =>handleBuyBtn()} className="mt-5">
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-light text-white w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCards;