import React from 'react'
import './Home.css';
export default function Home() {
  return (
    <div>
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Noorfsha</div>
                    <div className="text-3">And I'm a <span>Web Developer</span></div>
                    <a href="/">Hire me</a>
                </div>
            </div>
        </section>
    </div>
  )
}
