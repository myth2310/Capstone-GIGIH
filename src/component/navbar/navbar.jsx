import React from 'react';
import './style.css';

function Navigasi(){
    return(
      <nav>
        <div className="wrapper">
          <div className="logo"><a href=""><span>K</span>atakan.id</a></div>
          <div className="menu">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Cerita</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="" className='tbl-biru'>Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )     
}


export default Navigasi;