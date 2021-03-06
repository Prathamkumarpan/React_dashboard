import React from "react";
import { VscBellDot } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
import img_user from '../img/user.png';

const About = () => {
  return (
    <>
    <section>
            <div className="home_section">
                <div className="main">    
                <div className="icons"><VscBellDot/></div>
                <div className="inner_home_section"><h4>Hugo olafsson</h4><img src={img_user} alt="user"/></div>
                <div className="icons"><RiArrowDownSLine/></div>
                </div>
            </div>
            <div className="home_section_second">
                <div className="upcoming">
                    <h1>Upcoming Lessons</h1>
                <div>
                    <h2>June 10 4:30pm</h2>
                    <h2>Algebra-II maths</h2>
                    <h3>Pic</h3>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="tasks_to_do">
                <h1>tasks to do</h1>
            </div>
            <div className="leaderboard">
                <h1>leaderboard</h1>
            </div>
            <div className="my_courses">
                <div className="inner_course_first">
                    <h1>my courses</h1>
                    <h3>See all</h3>
                </div>
                <div className="inner_course_second">
                    <div className="left_inner_course_second">
                        <img alt="" />
                        <h2>Maths 30 lesson</h2>
                        <button></button>
                    </div>
                    <div className="right_inner_course_second">
                    <img alt=""/>
                    <h2>Maths 30 lesson</h2>
                    <button></button>
                </div>
            </div>
        </div>
            <div className="home_work">
                <h1>home work progress</h1>
            </div>
            <div className="graph">
                <h1>graph</h1>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
