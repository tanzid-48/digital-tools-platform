import React from 'react';

const SelectCard = () => {
    return (
      
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{card.icon}</div>

                                <div>
                                    <h3 className="font-semibold">{card.name}</h3>
                                    <p className="text-gray-500">${card.price}</p>
                                </div>
                                 <button >
                                <X size={20} />
                            </button>
                            </div>
    );
};

export default SelectCard;