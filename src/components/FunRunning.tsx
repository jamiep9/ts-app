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
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>Running</h1>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col span={8} className='gutter-row'>
                        <h2 id='float' className='sectionH2'>
                            RBC Brooklyn Half Marathon 2023
                        </h2>
                        <h2 id='float2'>
                            On May 20, I had the privilege of running the RBC Brooklyn Half, the largest half-marathon in the USA with over
                            26,000 runners! The course took me past the Brooklyn Museum, looped around Prospect Park, and finished with a 6-mile straight
                            shot down Ocean Pkwy to Coney Island. I can't wait to improve my time and run this course again next year!
                        </h2>
                    </Col>
                    <Col span={6} className='gutter-row'>
                        <Image
                            id='float'
                            src={running1}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col span={6} className='gutter-row'>
                        <Image
                            id='float'
                            src={running2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={8} className='gutter-row'>
                        <h2 id='float' className='sectionH2' style={{textAlign: 'right'}}>
                            SHAPE + Health Women's Half
                        </h2>
                        <h2 id='float2'>
                            In April, 
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col span={9} className='gutter-row'>
                        <h2 id='float' className='sectionH2'>
                            Denver
                        </h2>
                        <h2 id='float2'>
                            I went on a solo trip to Denver, Colorado in September 2023 and it was one of the highlights of this year!
                            I really enjoyed the challenging hikes and the beautiful views. One of my favorite hikes was the Walker Ranch Loop,
                            an 8-mile loop just outside of Boulder. Although I got winded at times, it was worth it for the incredible mountain views!
                        </h2>
                    </Col>
                    <Col span={5} className='gutter-row'>
                        <Image
                            id='float'
                            src={running3}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom: '50px'}}>
                    <Col span={5} className='gutter-row'>
                        <Image
                            id='float'
                            src={running4}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={9} className='gutter-row'>
                        <h2 id='float' className='sectionH2' style={{textAlign: 'right'}}>
                            Denver
                        </h2>
                        <h2 id='float2'>
                            I went on a solo trip to Denver, Colorado in September 2023 and it was one of the highlights of this year!
                            I really enjoyed the challenging hikes and the beautiful views. One of my favorite hikes was the Walker Ranch Loop,
                            an 8-mile loop just outside of Boulder. Although I got winded at times, it was worth it for the incredible mountain views!
                        </h2>
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunRunning;