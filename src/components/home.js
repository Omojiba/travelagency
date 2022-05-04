import React from 'react'
import './home.css'
import logo from './Assets/icon2.svg'
import location from './Assets/location.svg'
import persons from './Assets/persons_icon.svg'
import calendar from './Assets/calendar_icon.svg'
import plane from './Assets/plane.svg'

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
            <div> <button className='cta'>
               Book Trip <img src={plane}/>
              </button></div>
          
        </section>
    </div>
  )
}

export default home