import React, { useEffect, useState } from 'react';
import '../css/Mystatus.css';
import data from '../data';

function SkillComp(props) {
  return (
    <div className="progress-bar">
      <p className="prog-title">{props.name}</p>
      <div className="progress-con">
        <p className="prog-text">{props.level}</p>
        <div className="progress">
          <span
            style={{ width: `${props.level}` }}
            className={props.name}
          ></span>
        </div>
      </div>
    </div>
  );
}

function Education(props) {
  const [grade, Setgrade] = useState('');

  useEffect(() => {
    Setgrade(
      props.obj.year === '2018'
        ? 'SSLC'
        : props.obj.year === '2020'
        ? 'HSC'
        : 'B.E'
    );
  }, [props]);
  return (
    <div className="edu-container">
      <div className="ti-icon">
        <i className="fa-solid fa-briefcase"></i>
      </div>
      <div className="grade">{grade}</div>
      <div className="year">
        <span>{props.obj.year}</span>-{grade}
      </div>
      <div className="info">
        {props.obj.info}
        <br />
        {props.obj.place}
        <br />
        {props.obj.dis}
      </div>
    </div>
  );
}
function Mystatus() {
  return (
    <div className="my-status-page">
      <div className="my-status">
        <div className="title">
          <div className="bg-text">MY</div>
          <div className="main-text">
            ABOUT <span>ME</span>
          </div>
          <div className="bg-text">STATUS</div>
        </div>
        <div className="heading">information ABOUT ME</div>
        <div className="about">
          <div className="left-info">
            <div>{data.info}</div>
            <button>
              Download cv <i className="fa-solid fa-download"></i>
            </button>
          </div>
          <div className="right-info">
            <div className="developer">
              <div className="about-item half ">
                <div className="abt-text">
                  <p className="large-text">
                    MERN <br />
                    STACK
                  </p>
                  <p className="small-text">DEVELOPER </p>
                </div>
              </div>
              <div className="about-item half">
                <div className="abt-text">
                  <p className="large-text">MOBILE APP</p>
                  <p className="small-text">DEVELOPER </p>
                </div>
              </div>
            </div>
            <div className="developer">
              <div className="about-item  ">
                <div className="abt-text">
                  <p className="large-text">3+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="heading">My skill</div>
        <div className="progress-bars">
          <div className="progress-container">
            {data.myskill.frontend.map((skill) => (
              <SkillComp
                key={skill.name}
                name={skill.name}
                level={skill.level}
              ></SkillComp>
            ))}
          </div>
          <div className="progress-container">
            {data.myskill.backend.map((skill) => (
              <SkillComp
                key={skill.name}
                name={skill.name}
                level={skill.level}
              ></SkillComp>
            ))}
          </div>
          <div className="progress-container">
            {data.myskill.coding.map((skill) => (
              <SkillComp
                key={skill.name}
                name={skill.name}
                level={skill.level}
              ></SkillComp>
            ))}
          </div>
        </div>
        <hr />
        <div className="heading">education</div>
        <div className="education">
          {data.education.map((edu) => (
            <Education key={edu.year} obj={edu}></Education>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mystatus;
