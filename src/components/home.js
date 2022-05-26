import React from 'react'
import { useState } from 'react'
import './home.css'
import logo from './Assets/icon2.svg'
import location from './Assets/location.svg'
import persons from './Assets/persons_icon.svg'
import calendar from './Assets/calendar_icon.svg'
import plane from './Assets/plane.svg'
import nike from './Assets/nike.svg'
import applepay from './Assets/apple_pay.svg'
import silverstar from './Assets/silver_star.svg'
import intrax from './Assets/intrax.svg'
import mastercard from './Assets/mastercard.svg'
import chevron from './Assets/chevron.svg'
import palmtree from './Assets/palmtree.jpg'
import boat from './Assets/boat.jpg'


function Home(){

// Switch 1
   const [switchToggled, setSwitchToggled] = useState(false);

   const ToggleSwitch = () =>{

    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true); 
   }

// Switch 2
   const [switchToggled2, setSwitchToggled2] = useState(false);

   const ToggleSwitch2 = () =>{
     switchToggled2 ? setSwitchToggled2(false) : setSwitchToggled2(true);
   }

// Switch 3
const [switchToggled3, setSwitchToggled3] = useState(false);

   const ToggleSwitch3 = () =>{
     switchToggled3 ? setSwitchToggled3(false) : setSwitchToggled3(true);
   }



  return (
    <div className='body'>
        <section className='firstsection'>
            <header>
            <nav className='navbar'>
                <div className='logo'>
                <a href='/' className='brandlogo'>
                    <img src= {logo} alt='logo'/>
                </a>
                <span>Arctic Travels</span>
                

                <ul className='navlinks'>
                  <li>About us</li>
                  <li>Support</li>
                  <li>Language</li>
                </ul>
                
                </div>

                <button className='signIn'>Sign In</button>
            </nav>
            </header>

            <div className='hero'>
              <h1>Plan The Perfect Winter Trip</h1>
              <p>Easily plan your ideal ski trip from home with the help of professionals</p>
              <button className='cta'>Book Here</button>
            </div>
            
        </section>
        <section className='small-section'>

          <div className='tripdetails'>
          <div className='ss1'>
            <img src={location}/> <div><span>Location</span></div>
            </div>
            <div className='dropdown'>
            <select>
               <option value={'Iceland'}>Iceland</option>
               <option value={'France'}>France</option>
               <option value={'Italy'}>Italy</option>
               <option value={'poland'}>Poland</option>
            </select>
            </div>
            </div>

            <div className='tripdetails'>
          <div className='ss1'>
            <img src={persons}/> <div><span>persons</span></div>
            </div>
            <div className='dropdown'>
            <select>
               <option value={'Iceland'}>Iceland</option>
               <option value={'France'}>France</option>
               <option value={'Italy'}>Italy</option>
               <option value={'poland'}>Poland</option>
            </select>
            </div>
            </div>

            <div className='tripdetails'>
          <div className='ss1'>
            <img src={calendar}/> <div><span>check in</span></div>
            </div>
            <div className='dropdown'>
            <select>
               <option value={'Iceland'}>Iceland</option>
               <option value={'France'}>France</option>
               <option value={'Italy'}>Italy</option>
               <option value={'poland'}>Poland</option>
            </select>
            </div>
            </div>

            <div className='tripdetails'>
          <div className='ss1'>
            <img src={calendar}/> <div><span>check out</span></div>
            </div>
            <div className='dropdown'>
            <select>
               <option value={'Iceland'}>Iceland</option>
               <option value={'France'}>France</option>
               <option value={'Italy'}>Italy</option>
               <option value={'poland'}>Poland</option>
            </select>
            </div>
            </div>
            <div className='booktrip'>
              <div> Book Trip</div>
                <img className='plane' src={plane}/>
              </div>
          
        </section>
        
        <section className='partners'>
          <div><img src={nike} alt='nike logo'/></div>
          <div> <img src={applepay} alt='applepay logo'/></div>
          <div> <img src={silverstar} alt='silverstar logo'/></div>
          <div> <img src={intrax} alt='intrax logo'/></div>
          <div> <img src={mastercard} alt='mastercard logo'/></div>
        </section>

        <section className='secondsection'>
          <h1 id='first'>Creating the best <span>ice cold!</span> experience you would never forget.</h1>

          <p>would you explore nature's paradise in the world, find the best destination in the world with us.</p>

          <h1>View Regions available</h1>
        </section>

      <section className='thirdsection'>

        <div className={switchToggled ? "one_active" : "one"} id='one'onClick={ToggleSwitch}> 
        <img src={chevron} alt='chevron'/>
        <div className={switchToggled ? "textone_active" : "textone"}><h1>Mountain Resort</h1>
        </div>
        <p>This is a place you would love to be to explore nature paradise anywhere in the world</p>
        <button>Book Now</button>
        </div>


        <div className={switchToggled2 ? 'two_active' : 'two'} id='two' onClick={ToggleSwitch2}> 
        <img src={chevron} alt='chevron'/>
        <div className={switchToggled2 ? 'texttwo_active' : 'texttwo'}><h1>Fuji Mountain</h1>
        </div>
        <p>This is a place you would love to be to explore nature paradise anywhere in the world</p>
        <button>Book Now</button>
        </div>


        <div className={switchToggled3 ? 'three_active' : 'three'} id='three' onClick={ToggleSwitch3}> 
        <img src={chevron} alt='chevron'/>
        <div className={switchToggled3 ? 'textthree_active' : 'textthree'}><h1>Freezing WinterLake</h1>
        </div>
        <p>This is a place you would love to be to explore nature paradise anywhere in the world</p>
        <button>Book Now</button>
        </div>

      </section>

      <section className='fourthSection'>
        <div className='left'>
          <h1 className='hh'>The best resorts to chill and relax</h1>
          <div className='palmtree display_box'>

          <div className='four_book'> 
            <h1>Winter Landscape Chalet</h1>
           <h1 className='cam'>Cambodia</h1><br/>
           <button>Book Now</button>
           </div>

          </div>

          <div className='boat display_box'>

          <div className='four_book'> 
            <h1>Winter Landscape Chalet</h1>
           <h1 className='cam'>Cambodia</h1><br/>
           <button>Book Now</button>
           </div>
          
          </div>
        </div>
        <div className='right'>
          <div className='snowshed'>

          </div>

          <div className='skier display_box'>

          <div className='four_book'> 
            <h1>Winter Landscape Chalet</h1>
           <h1 className='cam'>Cambodia</h1><br/>
           <button>Book Now</button>
           </div>

           </div>

        </div>
      </section>
    </div>
  );
}

export default Home