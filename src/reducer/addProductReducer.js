import React from 'react'
const products = [{
    name: 'camera',
    rate: 4,
    quality: 3
}, {
    name: 'mobile',
    rate: 1,
    quality: 2
}, {
    name: 'laptop',
    rate: 2,
    quality: 1
}, {
    name: 'bike',
    rate: 5,
    quality: 3
}];
const addProductReducer = (state = products, action) => {

    switch (action.type) {
        case 'DELETE_PRODUCT':
            return state.filter((product) => product.name !== action.name);
        case 'ADD_PRODUCT':
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default addProductReducer;