import React from 'react';

const StoreContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
});

export default StoreContext;
