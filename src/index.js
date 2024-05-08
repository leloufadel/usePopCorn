import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import SatingRating from './StartingRating';
function Test(){
  return <div><SatingRating color ="blue" />

  </div>

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SatingRating maxRating={5}  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={5}/>
    <Test />
  </React.StrictMode>
);

