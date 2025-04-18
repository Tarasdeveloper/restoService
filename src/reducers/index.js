const initialState = {
    menu: [],
    loading: true,
    items: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find((item) => item.id === id);
            const existingItemIndex = state.items.findIndex(
                (cartItem) => cartItem.id === id
            );

            if (existingItemIndex >= 0) {
                // Товар уже в корзине — увеличиваем amount
                const updatedItems = state.items.map((cartItem, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...cartItem,
                            amount: (cartItem.amount || 1) + 1,
                        };
                    }
                    return cartItem;
                });

                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                // Товара ещё нет в корзине — добавляем с amount: 1
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    amount: 1,
                };

                return {
                    ...state,
                    items: [...state.items, newItem],
                };
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeId = action.payload;
            const targetIndex = state.items.findIndex(
                (item) => item.id === removeId
            );

            if (targetIndex < 0) return state;

            const targetItem = state.items[targetIndex];

            if (targetItem.amount > 1) {
                // Уменьшаем количество на 1
                const updatedItems = state.items.map((item, index) => {
                    if (index === targetIndex) {
                        return {
                            ...item,
                            amount: item.amount - 1,
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                // Удаляем товар из корзины
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, targetIndex),
                        ...state.items.slice(targetIndex + 1),
                    ],
                };
            }

        default:
            return state;
    }
};
export default reducer;

// case 'ITEM_ADD_TO_CART':
//             const id = action.payload;
//             const item = state.menu.find((item) => item.id === id);
//             const newItem = {
//                 title: item.title,
//                 price: item.price,
//                 url: item.url,
//                 id: item.id,
//                 amount: item.amount,
//             };
//             return {
//                 ...state,
//                 items: [...state.items, newItem],
//             };

// case 'ITEM_REMOVE_FROM_CART':
//             const idx = action.payload;
//             const itemIndex = state.items.findIndex((item) => item.id === idx);
//             return {
//                 ...state,
//                 items: [
//                     ...state.items.slice(0, itemIndex),
//                     ...state.items.slice(itemIndex + 1),
//                 ],
//             };
