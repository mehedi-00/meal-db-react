import React from 'react';

const SiteCard = ({side,index}) => {
    const {strMealThumb,strIngredient4 ,idMeal} = side;
    return (
        <div className='flex justify-between my-2'>
            <p>{index + 1}.</p>
            <h3>{strIngredient4}</h3>
            <img src={strMealThumb} className='w-6' alt="" />
        </div>
    );
};

export default SiteCard;