const addToDb = id => {
    // let previusMeal = localStorage.getItem('meal') || [];

    // previusMeal.push(id);
    let mtArray = [];
    const previusMeal = JSON.parse(localStorage.getItem('meal'));
    if (previusMeal) {

        mtArray = [...previusMeal, id];
    } else {
        mtArray.push(id);
    }
    localStorage.setItem('meal', JSON.stringify(mtArray));
    
    
};

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
};

const getMealData = () => {
    const previusMeal = localStorage.getItem('meal');
    return JSON.parse(previusMeal);
};

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
};

export {
    addToDb,
    getMealData
};