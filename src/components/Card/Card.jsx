import React from 'react';

const Card = ({ card ,handaleKhamo}) => {
    
    const {strMealThumb,strIngredient4 ,idMeal} = card;
    return (
        <div className='card border-2 border-slate-950 p-3'>
            <img src={strMealThumb} alt="" />
            <h2 className='title font-bold text-4xl text-red-600'>{strIngredient4}</h2>
            <button onClick={()=> handaleKhamo(idMeal)} className='bg-orange-500 text-2xl px-3 py-2 rounded-md my-2'>Khamo</button>
        </div>
    );
};

export default Card;