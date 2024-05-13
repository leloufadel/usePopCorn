import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StarRating from './StarRating';

// function Test(){
//   const [movieRating, setmovieRating] = useState(0)
//   return <div><SatingRating color ="blue" onSetRating={setmovieRating} />
//    <p>Movie was Rated {movieRating}</p>
//   </div>

// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5}  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={5}/>

  </React.StrictMode>
);

