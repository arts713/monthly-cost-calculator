import * as React from "react";

const List = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};

const ExchangeRates = () => {
    return (
        <>
            <div>Sum: 100</div>
            <input />
            <button>Add</button>
            <List />
        </>
    );
};

export default ExchangeRates;
