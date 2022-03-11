import React from 'react'
import './MyWorks.css';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image11 from './images/image11.jpg';
export default function MyWorks() {
    return (
        <div>
            <section className="myworks" id="myworks">
                <div className="max-width">
                    <h2 className="title">Let's see my work</h2>
                    <div className="myworks-content">
                        <div className="box1">
                            <img src={image4} alt="" />
                            <div className="portfolioLink">
                                <h2>TextUtils Website</h2>
                                <button><a href="https://zen-shirley-938d44.netlify.app" target="_blank" rel='noreferrer'>Visit</a></button>
                            </div>
                        </div>
                        <div className="box1">
                            <img src={image5} alt="" />
                            <div className="portfolioLink">
                                <h2>#PortFolio 2</h2>
                                <button><a href="/">Visit</a></button>
                            </div>
                        </div>
                        <div className="box1">
                            <img src={image6} alt="" />
                            <div className="portfolioLink">
                                <h2>#PortFolio 3</h2>
                                <button><a href="/">Visit</a></button>
                            </div>
                        </div>
                        <div className="box1">
                            <img src={image7} alt="" />
                            <div className="portfolioLink">
                                <h2>#PortFolio 4</h2>
                                <button><a href="/">Visit</a></button>
                            </div>
                        </div>
                        <div className="box1">
                            <img src={image8} alt="" />
                            <div className="portfolioLink">
                                <h2>#PortFolio 5</h2>
                                <button><a href="/">Visit</a></button>
                            </div>
                        </div>
                        <div className="box1">
                            <img src={image11} alt="" />
                            <div className="portfolioLink">
                                <h2>#PortFolio 6</h2>
                                <button><a href="/">Visit</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
