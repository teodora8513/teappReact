import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video  src='/videos/video1.mp4' autoPlay loop muted />
   
      <h1 >Brzo i lako do posla/prakse</h1>
      <p>Sve na jednom mestu, sigurni poslovi, provereni poslodavci</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          
          onClick={console.log('hey')}
        >
          POGLEDAJ PONUDE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
