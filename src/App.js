import React from 'react';
import Home from './pages/home/Home.jsx';

const App = () => {
  return (
    <div className='app'>

      <div className='pc'>
        open it to your mobile phone 🤙
      </div>

      <div className='mobile'>
        <Home />
      </div>

    </div>
  )
}

export default App