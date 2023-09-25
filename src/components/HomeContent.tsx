import React, { useState } from 'react';
import {Card, Image, Row, Col} from 'antd';
import "./HomeContent.css";
import profilePic from "./../images/profile-pic.png";

export const HomeContent: React.FC = () => {

    return (
        <>
        <div className='profileImageDiv'>
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
                    <h2 id='float2'>I am passionate about designing and building modern and accessible solutions <br></br> that are creative, user-centric, and innovative.</h2>
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