import React from "react";

const Hobbies = () => {
  return (
    <div className='hobbies'>
      <h3>Intérêts</h3>
      <ul>
        <li className='hobby'>
          <i className='fa fa-music'></i>
          <span>Musique</span>
        </li>
        <li className='hobby'>
          <i className='fa fa-tv'></i>
          <span>Séries</span>
        </li>
        <li className='hobby'>
          <i className='fa fa-gamepad'></i>
          <span>Jeux</span>
        </li>
        <li className='hobby'>
          <i className='fa fa-bicycle'></i>
          <span>Sport</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
