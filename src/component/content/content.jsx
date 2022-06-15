import React from 'react';
import './style.css';

function Content(){
    return(
        <div className="wrapper">
        <section id='home'>
            <img src="https://i.pinimg.com/564x/da/c4/39/dac439308b5904d1d754182de3d6ffb4.jpg" alt="" />
            <div className="column">
                <h2>MARI SEHATKAN MENTAL KITA SEJAK MUDA</h2>
                <p className='description'>Katakan.id merupakan sebuah layanan edukasi dan konsultasi yang membantu kamu memahami kesehatan mental secara lebih dalam</p>
                <a href="" className='button'>Konsultasi Sekarang</a>
            </div>
        </section>

        <section id='product'>
            <img  className='doctor' src="https://i.pinimg.com/564x/7c/23/13/7c2313f8d49ff41e48982af55d5938f9.jpg" alt="" />
            <div className="column-product">
                <h1>Apa Permasalah Anda ?</h1>
                <p className='description-product'>Mereka siap mendengarkan ceritamu dan memberikan solusi terkait masalah</p>
            </div>
        </section>
    </div>
    )
}


export default Content;