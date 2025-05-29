import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="wrapper">

    <section className="hero">
      <div className="container hero__container">
        <h1 className='title hero__title'>
          Lorem ipsum dolor sit amet.
        </h1>
        <p className='hero__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, adipisci.
        </p>
        <button className='button'>Start</button>
      </div>
    </section>

  </div>
);



// let root = document.getElementById('root') 

// let div = document.createElement('div')
// div.classList.add('wrapper')

// root.append(div)

