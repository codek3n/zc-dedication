import React from 'react';
import Home from './pages/home/Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Linking } from 'react-router-hash-link';



const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>

        <div className='pc'>
          open it to your mobile phone 🤙
        </div>

        <div className='mobile'>
          {/* <div className='rsvp__nav__btn'>
            <Linking to='#rsvp' smooth>
              <button>
                rsvp
              </button>
            </Linking>

          </div> */}
          <Home />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App