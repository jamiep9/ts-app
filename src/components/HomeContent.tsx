import React, { useState } from 'react';
import {Card, Image, Row, Col} from 'antd';
import "./HomeContent.css";
import profilePic from "./../images/profile-pic.png";

export const HomeContent: React.FC = () => {

    return (
        <>
        <div className='profileImageDiv'>
            <Row>
                <Col span={5}>
                    <Image
                        width={300}
                        src={profilePic}
                        className='profileImage'
                        id='float'
                    />
                </Col>
                <Col span={19}>
                    <h1 id='float'>Hi, I'm Jamie.</h1>
                    <h2 id='float2'>I'm a software developer based in NYC.</h2>
                    <h2 id='float2'>I am passionate about designing and building modern and accessible solutions <br></br> that are creative, user-centric, and innovative.</h2>
                </Col>
            </Row>
        </div>
        </>
    );

}

export default HomeContent;