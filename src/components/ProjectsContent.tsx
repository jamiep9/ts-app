import React, { useState } from 'react';
import { Card, Row, Col, Image } from 'antd';
import "./ProjectsContent.css";
import { Link } from 'react-router-dom';
import weTrainLogin from "./../images/wetrain-login.png";
import weTrainBasic from "./../images/wetrain-basicinfo.png";
import weTrainRunning from "./../images/wetrain-runninginfo.png";
import weTrainAdditional from "./../images/wetrain-additional.png";
import adviceHome from "./../images/advice-home.png";
import adviceFilters from "./../images/advice-filters.png";
import adviceReviews from "./../images/advice-reviews.png";
import adviceProfile from "./../images/advice-profile.png";
import looperKeypad from "./../images/5725looper-keypad.png";
import looperScreen from "./../images/5725looper-screen.png";
import looperFull from "./../images/5725looper-full.png";
import cusailBoat from "./../images/cusail-boat.png";
import cusailElectrical from "./../images/cusail-electrical.png";
import cusailEce from "./../images/cusail-ece.png";
import robotStraightLine from "./../images/straight_line.gif";
import robotWires from "./../images/robot-wires.png";
import robotMap from "./../images/robot-map.png";
import robotFinish from "./../images/robot-finish.png";

export const ProjectsContent: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{marginTop: '50px'}}>
                <h1 id='float'>My Personal Projects</h1>
                <Col span={14}>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>WeTrain</h2>}   
                    >
                        <h3>About this Project <i className='expCardDates'>Developed in August 2022</i></h3>
                        <p>
                            WeTrain is an app for runners, by runners. The main focus of this app is for users to connect with other runners in their area, as well as track
                            their own runs and create a workout plan that suits their needs. When creating a profile, users are asked to input their running data and 
                            running preferences. From there, the app's goal is to pair the user with nearby runners with similar preferences and stats. A user can schedule
                            runs with other users, join groups that host running events, and track their own solo runs to improve as an athlete. WeTrain also has users'
                            safety in mind as it is always possible to report any other WeTrain runners that harass or otherwise make one feel uncomfortable. Overall, WeTrain
                            provides a running experience that has a runner's best interests in mind and fosters community, goal-setting, and improvement.
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://www.figma.com/file/QTkVNxuUverJwsE8UEFnAQ/WeTrain?type=design&node-id=0%3A1&mode=design&t=PtuLAz9xHgaFeb3C-1' target="_blank" rel="noopener noreferrer" className='honorLink'>View Figma Designs</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>Develop solid, focused goals for the app and determine what is feasible to accomplish</li>
                            <li>Sketch a smooth user flow for each component of the app</li>
                            <li>Develop wireframes in Balsamiq for the app to establish user flow and screen designs</li>
                            <li>Interview potential app users (runners) and gather feedback to update wireframes accordingly</li>
                            <li>Build polished UX designs in Figma</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={weTrainLogin}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={weTrainBasic}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={weTrainRunning}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={weTrainAdditional}
                                    className='profileImage'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>AdvicEats</h2>}
                    >
                        <h3>About this Project <i className='expCardDates'>Developed in May 2021</i></h3>
                        <p>
                            idkidkdk
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://www.figma.com/file/wkPXpWpiwnfSJjCHc3YtMA/Group-23---App-UI-Design?type=design&node-id=0%3A1&mode=design&t=Hh3Bb1pT0xWwk1Gl-1' target="_blank" rel="noopener noreferrer" className='honorLink'>View Figma Designs</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>hi</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={adviceHome}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={adviceFilters}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={adviceReviews}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={6} className='gutter-row'>
                                <Image
                                    src={adviceProfile}
                                    className='profileImage'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>Music Looper</h2>}
                    >
                        <h3>About this Project <i className='expCardDates'>Developed in May 2020</i></h3>
                        <p>idkidkdk</p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2020_Projects/May_20_Demo/Music%20Looper/Final_web/index.html' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://github.com/Vsj986/5725Final' target="_blank" rel="noopener noreferrer" className='honorLink'>View GitHub Repository</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>hi</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={looperKeypad}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={looperScreen}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={looperFull}
                                    className='profileImage'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>CUSail - Autonomous Sailboat</h2>}
                    >
                        <h3>About this Project <i className='expCardDates'>Developed 2018-2020</i></h3>
                        <p>idkidkdk</p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://cusail.org' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>hi</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={cusailBoat}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={cusailEce}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={cusailElectrical}
                                    className='profileImage'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>Autonomous Maze-Following and Mapping Robot</h2>}
                    >
                        <h3>About this Project <i className='expCardDates'>Developed in 2019</i></h3>
                        <p>idkidkdk</p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://pages.github.coecis.cornell.edu/ach238/ECE3400-Website/index.html' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://github.coecis.cornell.edu/ach238/ECE3400-Labs' target="_blank" rel="noopener noreferrer" className='honorLink'>View GitHub Repository</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>hi</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={robotStraightLine}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={robotWires}
                                    className='profileImage'
                                />
                            </Col>
                            <Col span={8} className='gutter-row'>
                                <Image
                                    src={robotMap}
                                    className='profileImage'
                                />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </div>
        </>
    );

}

export default ProjectsContent;