import React from 'react'
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


const home = () => {
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

          <div className='one'>
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

            <div className='one'>
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

            <div className='one'>
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

            <div className='one'>
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

        <div className='subsection1'> 
        <div className='text'><h1>Mountain Resort</h1></div>
        </div>

        <div className='subsection2'> 
        <h1>Fuji Mountain</h1>
        </div>

        <div className='subsection3'> 
        <h1>Freezing WinterLake</h1>
        </div>

      </section>
    </div>
  )
}

export default home