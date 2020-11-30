import React from 'react';
import Profile from './Profile/Profile'
import Daenerys from './Daenerys Targaryen.jpg'

const App =() => {
  const alertName=(a) => alert (a)
  return (
    <div>
      <Profile alertName = {alertName}>
        <img className="img" src={Daenerys}/>
      </Profile>
    </div>
  )
}

export default App