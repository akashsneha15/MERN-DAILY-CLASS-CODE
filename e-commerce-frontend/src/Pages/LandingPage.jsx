import React from 'react'
import CarouselContainer from '../Components/CarouselContainer';
import DummiProducts from '../Components/DummiProducts';
import FooterComponent from '../Components/FooterComponent';


const LandingPage = () => {

  const handleGreeting = ()=>{
      let txt="Hello Welcome To Alpha Mart ";

      let wSpeech= window.speechSynthesis;
      let voice = new SpeechSynthesisUtterance(txt);
      wSpeech.speak(voice);
      voice.rate=3;
      console.log(wSpeech.getVoices());

    
      
  }
  return (
    <div>
          <button onClick={handleGreeting} id='greeting-btn'>Greeting</button>
        <CarouselContainer/>
        <h1>Products</h1>
        <DummiProducts/>
        <FooterComponent/>
    </div>
  )
}

export default LandingPage;