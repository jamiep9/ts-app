import React, { useState } from 'react';
import {Card, Image, Row, Col, Button} from 'antd';
import "./HomeContent.css";
import profilePic from "./../images/profile-pic.png";
import cordaCertified from "./../images/corda-certified.png";
import cornellSeal from "./../images/Cornell_University_seal.png";
import { Link } from "react-router-dom";

export const HomeContent: React.FC = () => {

    return (
        <>
        <div className='profileImageDiv' style={{marginTop: '50px'}}>
            <Row gutter={50}>
                <Col xs={16} sm={16} md={16} lg={10} xl={5} className='gutter-row'>
                    <Image
                        src={profilePic}
                        className='profileImage'
                        id='float'
                    />
                </Col>
                <Col xs={16} sm={16} md={16} lg={10} xl={10} className='gutter-row'>
                    <p className='mainHeadersText' id='float'>Hi, I'm Jamie.</p>
                    <span className='parText' id='float2'>I'm a software developer based in NYC.</span>
                    <br></br>
                    <p className='parText' id='float2'>I am passionate about designing and building modern and accessible solutions that are creative, user-centric, and innovative.</p>
                </Col>
            </Row>
        </div>
        <div className='skillsDiv'>
            <Row gutter={50}>
                <Col xs={20} sm={20} md={20} lg={16} xl={8} className='gutter-row'>
                    <p className='mainHeadersText' id='float'>About Me</p>
                    <p className='parText' id='float2'>
                        I graduated from Cornell University in 2021 with a major in Electrical and Computer Engineering and a minor in 
                        Information Science. Throughout my time in university, I worked on a diverse range of projects involving
                        computer engineering, electrical engineering, computer science, physics, and UX/UI design. 
                    </p>
                    <p className='parText' id='float2'>
                        Since graduation, I have worked full-time for 2+ years as a software engineer and have worked in backend,
                        frontend, and full-stack roles. I'm very proud to have gained a diverse range of experience and consistently
                        further my growth in engineering and software development. Most recently, I have worked as a solutions engineer
                        at R3, a client-facing role in which I developed innovative and creative solutions for users of R3's
                        Corda blockchain.
                    </p>
                    <p className='mainHeadersText' id='float'>Skills and Technologies</p>
                    <Row id='float2'>
                        <Button type='primary' className='skillsButton' style={{width: '100px', height: '50px'}}>
                            React
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '155px', height: '50px'}}>
                            TypeScript
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '120px', height: '50px'}}>
                            Python
                        </Button>
                    </Row>
                    <Row id='float2'>
                        <Button type='primary' className='skillsButton' style={{width: '160px', height: '50px'}}>
                            JavaScript
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '140px', height: '50px'}}>
                            Node.js
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '150px', height: '50px'}}>
                            Angular.js
                        </Button>
                    </Row>
                    <Row id='float2'>
                        <Button type='primary' className='skillsButton' style={{width: '90px', height: '50px'}}>
                            Java
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '110px', height: '50px'}}>
                            Kotlin
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '175px', height: '50px'}}>
                            PostgreSQL
                        </Button>
                    </Row>
                    <Row id='float2'>
                        <Button type='primary' className='skillsButton' style={{width: '125px', height: '50px'}}>
                            MySQL
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '60px', height: '50px'}}>
                            C
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '90px', height: '50px'}}>
                            C++
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '140px', height: '50px'}}>
                            Balsamiq
                        </Button>
                    </Row>
                    <Row id='float2'>
                        <Button type='primary' className='skillsButton' style={{width: '110px', height: '50px'}}>
                            Figma
                        </Button>
                        <Button type='primary' className='skillsButton' style={{width: '90px', height: '50px'}}>
                            Jest
                        </Button>
                    </Row>
                </Col>
                <Col xs={20} sm={20} md={16} lg={16} xl={8} className='gutter-row'>
                    <p className='mainHeadersText' id='float'>Education</p>
                    <Card className='honorsCard' bordered={false} id='float2' title={<h2>Cornell University <br></br><span style={{color:'#545454', fontSize: '1', fontWeight: '300'}}>College of Engineering</span></h2>}>
                        <Row>
                            <Col span={16}>
                            <h3>Bachelor of Science in Electrical and Computer Engineering</h3>
                            <h4>Minor in Information Science</h4>
                            <i className='homeCardDates'>August 2017 - May 2021</i>
                            <br></br>
                            <i className='homeCardDates'>Ithaca, NY</i>
                            </Col>
                            <Col span={8}>
                                <Image
                                    src={cornellSeal}
                                    id='float'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <p className='mainHeadersText' id='float'>Honors and Certifications</p>
                    <Card className='honorsCard' bordered={false} id='float2' title={<h2>Corda Certified Developer</h2>}>
                        <Row>
                            <Col span={16}>
                                <Link to="https://www.credly.com/badges/313ca54e-77e7-4b0e-9da0-615c34027e2f/public_url" target="_blank" rel="noopener noreferrer" className='honorLink'>View Certification</Link>
                                <br></br>
                                <br></br>
                                Awarded to certify technical expertise in using Corda and developing Corda applications
                                <br></br>
                                Issued August 2022
                            </Col>
                            <Col span={8}>
                                <Image
                                    src={cordaCertified}
                                    id='float'
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card className='honorsCard' bordered={false} id='float2' title={<h2>2019 IEEE MIT URTC Presenter</h2>}>
                        <Link to="https://ieeexplore.ieee.org/document/9660511" target="_blank" rel="noopener noreferrer" className='honorLink'>View Paper in IEEE<i>Xplore</i></Link>
                        <br></br>
                        <br></br>
                        Authored a peer-reviewed paper and presented research on a biomechanical project developed in the summer of 2019 to regulate stroke patients’ gait
                        <br></br>
                        Presented October 12, 2019
                        <br></br>
                        Published in IEEE<i>Xplore</i> January 04, 2022
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    );

}

export default HomeContent;