const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_CART":
            const exist = state.find(item => item.id === product.id);
            if (exist) {
                return state.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quatity + 1 } : item);
            } else {
                const product = action.payload;
                return [
                    ...state,
                    { ...product, quantity: 1 }
                ];
            }

        case "REMOVE_CART":
            const exist1 = state.find(item => item.id === product.id);
            if (exist1.quantity === 1) {
                return state.filter(item => item.id !== product.id);
            } else {
                return state.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quatity - 1 } : item);
            }

        default:
            return state;
    }
}

export default handleCart;
