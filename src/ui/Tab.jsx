import React from 'react';


const Tab = ({ isBuy, setIsBuy,cards }) => {
    return (
        <div className="tabs tabs-box justify-center gap-5 bg-transparent py-6">

            <input
                type="radio"
                name="my_tabs"
                className={`tab rounded-full w-40 ${
                    isBuy === "Products"
                        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                        : ""
                }`}
                aria-label="Products"
                defaultChecked 
                onChange={() => setIsBuy("Products")}
            />

            <input
                type="radio"
                name="my_tabs"
                className={`tab rounded-full w-40 ${
                    isBuy === "Card"
                        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                        : ""
                }`}
                aria-label={`Card (${cards.length})`}
                onChange={() => setIsBuy("Card")}
            />

        </div>
    );
};

export default Tab;