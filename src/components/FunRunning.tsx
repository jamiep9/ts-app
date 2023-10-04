import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";
import running1 from "./../images/running/running_1.png";
import running2 from "./../images/running/running_2.png";
import running3 from "./../images/running/running_3.png";
import running4 from "./../images/running/running_4.png";

export const FunRunning: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv'>
                <p className='mainHeadersText' id='float'>Running</p>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col xs={24} sm={24} md={0} lg={0} xl={0} className='gutter-row'>
                        <Image
                            id='float'
                            src={running1}
                            className='profileImage'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} className='gutter-row'>
                        <h2 id='float' className='sectionH2'>
                            RBC Brooklyn Half Marathon 2023
                        </h2>
                        <h2 id='float2'>
                            On May 20, I had the privilege of running the RBC Brooklyn Half, the largest half-marathon in the USA with over
                            26,000 runners! The course took me past the Brooklyn Museum, looped around Prospect Park, and finished with a 6-mile straight
                            shot down Ocean Pkwy to Coney Island. I can't wait to improve my time and run this course again next year!
                        </h2>
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={10} xl={10} className='gutter-row'>
                        <Image
                            id='float'
                            src={running1}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10} className='gutter-row'>
                        <Image
                            id='float'
                            src={running2}
                            className='profileImage'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} className='gutter-row'>
                        <h2 id='float' className='sectionH2' style={{textAlign: 'right'}}>
                            SHAPE + Health Women's Half
                        </h2>
                        <h2 id='float2'>
                            In April, I ran 2 laps around Central Park with 7,000 other women! It was my best half marathon
                            time to-date despite it raining most of the race. I finished the race exhausted and ready to eat
                            a bagel!
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col xs={24} sm={24} md={0} lg={0} xl={0} className='gutter-row'>
                        <Image
                            id='float'
                            src={running3}
                            className='profileImage'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} className='gutter-row'>
                        <h2 id='float' className='sectionH2'>
                            Fred Lebow Half Marathon
                        </h2>
                        <h2 id='float2'>
                            I ran my first-ever half marathon on January 23! It was exhausting but worth the run. Hopefully next half
                            I don't end up walking the last four miles. I discovered though that my favorite part of running is the signs that people hold along
                            the sidelines!
                        </h2>
                    </Col>
                    <Col xs={0} sm={0} md={10} lg={10} xl={10} className='gutter-row'>
                        <Image
                            id='float'
                            src={running3}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10} className='gutter-row'>
                        <Image
                            id='float'
                            src={running4}
                            className='profileImage'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} className='gutter-row'>
                        <h2 id='float' className='sectionH2' style={{textAlign: 'right'}}>
                            New Years Midnight 4-Mile
                        </h2>
                        <h2 id='float2'>
                            To kick off 2023, a couple friends and I ran the New Years' Midnight Run in Central Park. The race kicked off
                            with fireworks, which kept going off for the entire run! It was a bit chaotic but we stuck together and took 
                            photos at every mile we completed!
                        </h2>
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunRunning;