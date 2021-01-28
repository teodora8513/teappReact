import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards'>Najnovije ponude</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/endava.jpg'
              text='Tražimo Front-end developere'
              label='Tromesečna praksa'
              path='/products'
            />
            <CardItem
              src='images/bosch.jpg'
              text='Java development i C++'
              label='Posao'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cmtrade.jpg'
              text='Praksa u jednoj od najvećih kompanija u zemlji'
              label='Praksa'
              path='/products'
            />
            <CardItem
              src='images/levi9.jpg'
              text='Pridruži se našem timu QA testera'
              label='Plaćena praksa'
              path='/products'
            />
            <CardItem
              src='images/ncr.png'
              text='Putuj i programiraj uz C# posao'
              label='Posao iz snova'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
