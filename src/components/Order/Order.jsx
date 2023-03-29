import React, { useEffect, useState } from 'react';
import { addToDb, getMealData } from '../../faceDb/fakeDb';
import Card from '../Card/Card';
import SiteCard from '../SideCard/SiteCard';

const Order = () => {
    const [cards, setCards] = useState([]);
    const [sideCards, setSideCards] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
            .then(res => res.json())
            .then(data => setCards(data.meals));
    }, []);

    const handaleKhamo = (id) => {
        let newCart = [];
        const exists = sideCards.find(m => m.idMeal == id);
        const meal = cards.find(m => m.idMeal === id);
        if (exists) {
         return  alert('Please oder other meal');

        }
        else {
            newCart = [...sideCards, meal];
        }
        addToDb(id);
        setSideCards(newCart);

    };

    useEffect(() => {
        const sideData = getMealData();
        const saveMeal = [];
        if (sideData) {

            sideData.forEach(single => {
                const addMeal = cards.find(c => c.idMeal == single);
                if (addMeal) {
                    saveMeal.push(addMeal);
                }
            });
        }
        setSideCards(saveMeal);
    }, [cards]);
    return (
        <div className='flex w-10/12 mx-auto'>
            <div className='w-9/12 grid grid-cols-3 gap-5'>
                {cards.map(card => <Card handaleKhamo={handaleKhamo} key={card.idMeal} card={card}></Card>)}
            </div>
            <div className='w-3/12 bg-amber-300 p-8'>
                <h2 className='text-3xl'>Sidebar side</h2>

                {sideCards.map((side, index) => <SiteCard side={side} index={index} key={side.idMeal}></SiteCard>)}

            </div>

        </div>
    );
};

export default Order;