import React from 'react'
import './Skills.css';
export default function Skills() {
  return (
    <div> <section className="skill" id="skill">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skill-content">
          <div className="column left">
            <div className="text">My Creative Skills</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat error distinctio eveniet ea, odio repellendus, aut totam reiciendis, iusto minima aspernatur explicabo nam labore quia accusamus a inventore minus odit optio qui dolorem?</p>
            <a href="/">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="line javascript"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>reactJs</span>
                <span>90%</span>
              </div>
              <div className="line reactjs"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>70%</span>
              </div>
              <div className="line java"></div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}
