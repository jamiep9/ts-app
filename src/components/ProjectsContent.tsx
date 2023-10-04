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
import robotMaze from "./../images/maze_map.gif";

export const ProjectsContent: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{marginTop: '50px'}}>
                <p className='mainHeadersText' id='float'>My Personal Projects</p>
                <Col span={24}>
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
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={weTrainLogin}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={weTrainBasic}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={weTrainRunning}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
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
                            AdvicEats is an app targeting the needs of those with dietary restrictions who feel uncomfortable eating at new or unknown restaurants.
                            Similar to other restaurant reviews apps, AdvicEats uses a star-based rating system, however a user will only see reviews written by those
                            with the same dietary restrictions as them. The intention of this app is to present users with relevant reviews which relate only to their
                            dietary restrictions. Users can leave a general review about the service or quality of food, and also a more specific review with comments
                            on how well their dietary restrictions were addressed. When creating a profile, a user can add any diets or dietary restrictions they have,
                            and the app will only show reviews by individuals with those same restrictions, and also give recommendations based on ratings and user 
                            location.
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://www.figma.com/file/wkPXpWpiwnfSJjCHc3YtMA/Group-23---App-UI-Design?type=design&node-id=0%3A1&mode=design&t=Hh3Bb1pT0xWwk1Gl-1' target="_blank" rel="noopener noreferrer" className='honorLink'>View Figma Designs</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>Follow the user-centric design process to determine designs that address a significant need for a user base regarding diets</li>
                            <li>Design a smooth and accessible user flow that meets user needs</li>
                            <li>Interview potential user base (individuals with various dietary restrictions) to understand pain points and receive feedback</li>
                            <li>Sketch and develop wireframes in Balsamiq to establish UI design and user flow</li>
                            <li>Build polished UI designs in Figma</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={adviceHome}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={adviceFilters}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={adviceReviews}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
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
                        <p>
                            Created an audio looper with multiple channels, in which one can record short sound bites to be overlaid with one another for quick music production. The looper has a keypad that can be used 
                            to play a variety of instruments that can also be recorded and looped over one another. This device uses a Raspberry Pi with a keypad capable of playing multiple instrument sounds. The project 
                            has two modes: Keypad mode, which allows users to select instruments and record sound-bites in up to two audio channels using the light-up keypad; and Looper mode, which, when activated, 
                            overlays the sound in the two audio channels to create a repetitive audio loop. This project is designed to quickly create music tracks, and is targeted at new musicians starting out on 
                            creating songs and remixes.
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2020_Projects/May_20_Demo/Music%20Looper/Final_web/index.html' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://github.com/Vsj986/5725Final' target="_blank" rel="noopener noreferrer" className='honorLink'>View GitHub Repository</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>Brainstorm and sketch initial project design and create schematic</li>
                            <li>Utilize PyGame library to create responsive touchscreen UI display on the Raspberry PiTFT screen</li>
                            <li>Implement keypad sounds by converting 16 notes from each instrument into 16-bit .wav sounds to be installed on the Raspberry Pi</li>
                            <li>Utilize ALSA commands to allow system to record and store audio using a USB microphone</li>
                            <li>Overlay recorded audio tracks using the PyDub library to be played through the speaker</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} className='gutter-row'>
                                <Image
                                    src={looperKeypad}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}  className='gutter-row'>
                                <Image
                                    src={looperScreen}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}  className='gutter-row'>
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
                        <p>
                            CUSail is one of Cornell's many engineering project teams, with students across a variety of majors and disciplines. CUSail creates an autonomous sailboat
                            to compete in the SailBot competition, in which a sailboat must autonomously navigate a course with regard to wind, current, and other sailing conditions.
                            The sailboat's navigation software relies on input from a variety of sensors while consistently updating its course. The boat also employs cutting-edge
                            mechanical design to be aerodynamic and travel as efficiently as possible.
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://cusail.org' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://github.com/DSutyak/CUSail' target="_blank" rel="noopener noreferrer" className='honorLink'>View GitHub Repository</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>Design and build efficient electrical system to connect boat sensors to main PCB with regard to size to keep waterproof</li>
                            <li>Develop embedded system to control mechanical servo components and obtain sensor readings</li>
                            <li>Run regular tests on electrical systems to ensure efficiency and proper functionality</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}  className='gutter-row'>
                                <Image
                                    src={cusailBoat}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}  className='gutter-row'>
                                <Image
                                    src={cusailEce}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}  className='gutter-row'>
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
                        <p>
                            Our team was tasked with designing and building a fully-autonomous robot that could efficiently and accurately navigate and map a maze.
                            The robot uses an Arduino UNO board as its main processor and employs a variety of sensors to perceive, reason about, and act upon its
                            environment. To map the maze, the robot uses a depth-first search algorithm and transmits its findings to an FPGA to be displayed on a 
                            monitor. The robot is also able to avoid other robots using an IR sensor to detect infrared signals produced by other robots.
                        </p>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://pages.github.coecis.cornell.edu/ach238/ECE3400-Website/index.html' target="_blank" rel="noopener noreferrer" className='honorLink'>View Project Website</Link>
                        </div>
                        <div style={{marginBottom: '15px'}}>
                            <Link to='https://github.coecis.cornell.edu/ach238/ECE3400-Labs' target="_blank" rel="noopener noreferrer" className='honorLink'>View GitHub Repository</Link>
                        </div>
                        <h3>My Responsibilities</h3>
                        <ul>
                            <li>Utilize line sensors to allow the robot to follow the line grid on the floor of the maze and repeatedly adjust servo motors to keep itself in line</li>
                            <li>Program robot reactions to detecting maze walls with ultrasonic sensors</li>
                            <li>Write DFS recursive algorithm for robot to efficiently navigate any given maze in the allotted time</li>
                            <li>Transmit maze data from Arduino Uno to FPGA to display visual representation of the maze</li>
                        </ul>
                        <h3>Highlights</h3>
                        <Row gutter={50}>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6}  className='gutter-row'>
                                <Image
                                    src={robotStraightLine}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={robotMaze}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
                                <Image
                                    src={robotWires}
                                    className='profileImage'
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className='gutter-row'>
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