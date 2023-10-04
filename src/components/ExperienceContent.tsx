import React, { useState } from 'react';
import "./ExperienceContent.css";
import {Card, Image, Row, Col, Button} from 'antd';
import cordaCertified from "./../images/corda-certified.png";
import { Link, useNavigate } from "react-router-dom";

export const ExperienceContent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='profileImageDiv' style={{marginTop: '50px'}}>
                <p className='mainHeadersText' id='float'>Professional Experience</p>
                <Col span={24}>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>R3  <span className='expCardHeader'>New York, NY</span></h2>}
                        onClick={() => window.open('https://r3.com/','_blank', 'rel=noopener noreferrer')}
                    >
                        <h3>Frontend Solutions Engineer <i className='expCardDates'>August 2023</i></h3>
                        <ul>
                            <li>
                                Designed and developed client-focused projects that met criteria and were 
                                susceptible to intense and frequent review
                            </li>
                            <li>
                                Utilized React, TypeScript, and JavaScript to develop a sleek, modern 
                                frontend for projects that aligned with client objectives while being scalable to 
                                handle displaying large amounts of data in an easily navigable fashion
                            </li>
                            <li>
                                Designed impactful frontend elements using Figma, presenting them in client 
                                reviews for feedback and approval
                            </li>
                            <li>
                                Utilized RESTful API integration to facilitate seamless communication with 
                                backend systems and implemented a robust PostgreSQL database for scalability
                            </li>
                        </ul>
                        <h3>Solutions Engineer <i className='expCardDates'>July 2022 - August 2023</i></h3>
                        <ul>
                            <li>
                                Developed client applications using R3's Corda blockchain, Kotlin, Java, 
                                React, and Typescript
                            </li>
                            <li>
                                Led and participated in client QuickStarts to design project frameworks 
                                and understand client objectives for Corda development
                            </li>
                            <li>
                                Nurtured professional relationships with customers, regularly communicating 
                                and incorporating feedback from clients and team members
                            </li>
                        </ul>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>MainStreet Work, Inc.  <span className='expCardHeader'>Remote</span></h2>}
                        onClick={() => window.open('https://mainstreet.com/','_blank', 'rel=noopener noreferrer')}
                    >
                        <h3>Fullstack Software Developer <i className='expCardDates'>March 2022 - July 2022</i></h3>
                        <ul>
                            <li>
                                Developed an innovative platform for startup organizations to optimize tax 
                                benefits and reduce operating costs, driving technological growth
                            </li>
                            <li>
                                Designed a seamless onboarding experience using React and TypeScript to enhance 
                                user flow for new customers
                            </li>
                            <li>
                                Implemented a scalable customer database using MySQL
                            </li>
                            <li>
                                Conducted thorough unit and integration testing with React and Jest to ensure robust 
                                functionality
                            </li>
                        </ul>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>ASML  <span className='expCardHeader'>Wilton, CT</span></h2>}
                        onClick={() => window.open('https://www.asml.com/en','_blank', 'rel=noopener noreferrer')}
                    >
                        <h3>Software Design Engineer <i className='expCardDates'>July 2021 - March 2022</i></h3>
                        <ul>
                            <li>
                                Developed and tested embedded software for state-of-the-art lithography machinery 
                                using C and C++
                            </li>
                            <li>
                                Collaborated with cross-functional teams to integrate software with hardware 
                                components
                            </li>
                            <li>
                                Created innovative Python and C++ software to simulate machine behavior for customer 
                                training and testing purposes
                            </li>
                        </ul>
                        <h3>Software Intern <i className='expCardDates'>May 2020 - August 2020</i></h3>
                        <ul>
                            <li>
                                Designed and implemented a scalable diagnostic server for efficient testing of 
                                diverse hardware devices
                            </li>
                            <li>
                                Conducted rigorous testing on complex machinery, ensuring optimal functionality 
                                and documenting results in detail
                            </li>
                        </ul>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>Juni Learning  <span className='expCardHeader'>Remote</span></h2>}
                        onClick={() => window.open('https://junilearning.com/','_blank', 'rel=noopener noreferrer')}
                    >
                        <h3>Computer Science Instructor <i className='expCardDates'>April 2020 - February 2021</i></h3>
                        <ul>
                            <li>
                                Guided young students aged 5-12 in mastering essential computer science concepts
                            </li>
                            <li>
                                Utilized Scratch and Python to facilitate the creation of engaging and educational 
                                games and programs
                            </li>
                            <li>
                                Cultivated a passion for computer science among students, fostering their interest 
                                in this field
                            </li>
                        </ul>
                    </Card>
                    <Card 
                        className='honorsCard' 
                        hoverable
                        bordered={false} 
                        id='float2' 
                        title={<h2>The 77 Laboratory at MIT  <span className='expCardHeader'>Cambridge, MA</span></h2>}
                        onClick={() => window.open('https://the77lab.mit.edu/','_blank', 'rel=noopener noreferrer')}
                    >
                        <h3>Undergraduate Researcher <i className='expCardDates'>June 2019 - August 2019</i></h3>
                        <ul>
                            <li>
                                Research in the development of software for a robotic device that assists with the 
                                rehabilitation of stroke patients
                            </li>
                            <li>
                                Primarily wrote algorithms in C/C++ and simulated data using MATLAB
                            </li>
                            <li>
                                Co-authored a paper summarizing research which was presented at the IEEE MIT 
                                Undergraduate Research Technology Conference in October 2019
                            </li>
                        </ul>
                    </Card>
                </Col>
            </div>
        </>
    );

}

export default ExperienceContent;