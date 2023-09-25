import React, { useState } from 'react';
import {Card, Image, Row, Col, Button} from 'antd';
import "./HomeContent.css";
import profilePic from "./../images/profile-pic.png";

export const HomeContent: React.FC = () => {

    return (
        <>
        <div className='profileImageDiv' style={{marginTop: '50px'}}>
            <Row gutter={50}>
                <Col span={5} className='gutter-row'>
                    <Image
                        width={300}
                        src={profilePic}
                        className='profileImage'
                        id='float'
                    />
                </Col>
                <Col span={19} className='gutter-row'>
                    <h1 id='float'>Hi, I'm Jamie.</h1>
                    <h2 id='float2'>I'm a software developer based in NYC.</h2>
                    <h2 id='float2'>I am passionate about designing and building modern and accessible <br></br> solutions that are creative, user-centric, and innovative.</h2>
                </Col>
            </Row>
        </div>
        <div className='profileImageDiv'>
            <Row>
                <Col span={24}>
                    <h1 id='float'>About Me</h1>
                    <h2 id='float2'>
                        I graduated from Cornell University in 2021 with a major in Electrical and Computer Engineering and a minor in 
                        <br></br> 
                        Information Science. Throughout my time in university, I worked on a diverse range of projects involving
                        <br></br>
                        computer engineering, electrical engineering, computer science, physics, and UX/UI design. 
                    </h2>
                    <h2 id='float2'>
                        Since graduation, I have worked full-time for 2+ years as a software engineer and have worked in backend,
                        <br></br>
                        frontend, and full-stack roles. I'm very proud to have gained a diverse range of experience and consistently
                        <br></br>
                        further my growth in engineering and software development. Most recently, I have worked as a solutions engineer
                        <br></br>
                        at R3, a client-facing role in which I developed innovative and creative solutions for users of R3's
                        <br></br>
                        Corda blockchain.
                    </h2>
                </Col>
            </Row>
        </div>
        <div className='skillsDiv'>
            <Row>
                <Col span={6}>
                    <h1 id='float'>Skills and Technologies</h1>
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
                <Col span={1}></Col>
                <Col span={6}>
                    <h1 id='float'>Honors and Certifications</h1>
                    <h2 id='float2'>
                        I graduated from Cornell University in 2021 with a major in Electrical and Computer Engineering and a minor in 
                        <br></br> 
                        Information Science. Throughout my time in university, I worked on a diverse range of projects involving
                        <br></br>
                        computer engineering, electrical engineering, computer science, physics, and UX/UI design. 
                    </h2>
                    <h2 id='float2'>
                        Since graduation, I have worked full-time for 2+ years as a software engineer and have worked in backend,
                        <br></br>
                        frontend, and full-stack roles. I'm very proud to have gained a diverse range of experience and consistently
                        <br></br>
                        further my growth in engineering and software development. Most recently, I have worked as a solutions engineer
                        <br></br>
                        at R3, a client-facing role in which I developed innovative and creative solutions for clients using R3's
                        <br></br>
                        Corda blockchain.
                    </h2>
                </Col>
            </Row>
        </div>
        </>
    );

}

export default HomeContent;