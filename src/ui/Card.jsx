
import { X } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({ cards, SetCards }) => {
    const total = cards.reduce((sum, card) => sum + card.price, 0);
    const handleRemoved = (card) => {
        const filterData = cards.filter(c => c.id !== card.id);
        SetCards(filterData)
        toast.error(`${card.name} removed from cart`);
    }
    const handleCheckout = () => {
        SetCards([]);
        toast.success("Checkout successful!");
    }
    return (
        <div className="w-10/12 mx-auto mt-10 bg-base-100 shadow-md  ">

            <h2 className="text-2xl font-bold mb-5">
                Your Cart ({cards.length})
            </h2>
            {
                cards.length === 0 ? (
                    <div className="py-5 ">
                        <h3 className="text-center text-3xl text-gray-500 mt-6">
                            No cards selected
                        </h3>
                        <p className='text-center text-gray-600'>
                            Go to Products to select a card
                        </p>
                    </div>
                ) : (
                    <> <div className="space-y-4">
                        {
                            cards.map(card => (
                                <div key={card.id} className="bg-base-200 shadow-md rounded-xl p-4 flex items-center justify-between w-11/12 mx-auto">

                                    <div className="flex items-center gap-4">
                                        <div className="text-3xl">{card.icon}</div>

                                        <div>
                                            <h3 className="font-semibold">{card.name}</h3>
                                            <p className="text-gray-500">${card.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemoved(card)} >
                                        <X size={20} />
                                    </button>

                                </div>
                            ))}
                    </div>
                        <div className=" w-11/12 mx-auto flex justify-between items-center font-semibold py-4 px-2">
                            <h3 className='text-gray-500'>Total:</h3>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className=" btn  rounded-full font-light text-white w-full 
                         bg-linear-to-r from-[#4F39F6] to-[#9514FA] "
                        > Proceed To Checkout
                        </button>
                    </>
                )
            }
        </div >

    );
};
export default Card;