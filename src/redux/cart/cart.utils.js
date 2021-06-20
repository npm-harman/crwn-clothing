export const addItemToCart = (existingCartItems, itemToAdd) => {
    const itemAlreadyExists = existingCartItems.find(item => item.id === itemToAdd.id);
    if (itemAlreadyExists) {
        return existingCartItems.map(item =>
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...existingCartItems, { ...itemToAdd, quantity: 1 }]
}