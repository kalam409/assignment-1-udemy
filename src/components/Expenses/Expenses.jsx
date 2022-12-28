import React from 'react';
import '../Expenses/Expenses.css';
const Expenses = (props) => {
    const {title, amount, desc} = props;
    return (
        <div className='expenses'>
            <h3 className='title'>{title}</h3>
            <h2 className='amount'>{amount}</h2>
            <p className='desc'>{desc}</p>
        </div>
    );
};

export default Expenses;