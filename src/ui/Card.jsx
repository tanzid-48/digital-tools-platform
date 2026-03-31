import React from 'react';
import { X } from 'lucide-react';

const Card = ({ cards}) => {


    return (
        <div className="w-9/12 mx-auto mt-10 bg-base-100 shadow-md  ">

            <h2 className="text-2xl font-bold mb-5">
                Your Cart ({cards.length})
            </h2>

            {
                cards.length === 0 && (
                    <p className="text-center text-gray-500">
                        No items added
                    </p>
                )
            }

            <div className="space-y-4">

                {
                    cards.map(card => (
                        <div key={card.id} className="bg-base-200 shadow-md rounded-xl p-4 flex items-center justify-between">

                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{card.icon}</div>

                                <div>
                                    <h3 className="font-semibold">{card.name}</h3>
                                    <p className="text-gray-500">${card.price}</p>
                                </div>
                            </div>

                            <button >
                                <X size={20} />
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Card;