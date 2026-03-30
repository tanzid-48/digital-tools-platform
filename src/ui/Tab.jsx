import React from 'react';

const Tab = () => {
    return (

        <div className="tabs tabs-box justify-center gap-5 bg-transparent py-6">
            <input type="radio" name="Products" className="tab rounded-full w-40 bg-blue-500 " aria-label="Products" defaultChecked />
            <input type="radio" name="Card" className="tab rounded-full w-40" aria-label="Card" />

        </div>
    );
};

export default Tab;