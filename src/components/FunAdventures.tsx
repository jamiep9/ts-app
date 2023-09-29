import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";
import denver1 from "./../images/adventures/denver_1.png";
import denver2 from "./../images/adventures/denver_2.png";
import denver3 from "./../images/adventures/denver_3.png";
import denver4 from "./../images/adventures/denver_4.png";
import maine1 from "./../images/adventures/maine_1.png";
import maine2 from "./../images/adventures/maine_2.png";
import maine3 from "./../images/adventures/maine_3.png";
import maine4 from "./../images/adventures/maine_4.png";

export const FunAdventures: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>Adventures</h1>
                <Row>
                    <Col span={14}>
                        <h2 id='float2'>
                            Here is a collection of some of my recent adventures!
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <h2 id='float' className='sectionH2'>
                            Denver
                        </h2>
                        <h2 id='float2'>
                            I went on a solo trip to Denver, Colorado in September 2023 and it was one of the highlights of this year!
                            I really enjoyed the challenging hikes and the beautiful views. One of my favorite hikes was the Walker Ranch Loop,
                            an 8-mile loop just outside of Boulder. Although I got winded at times, it was worth it for the incredible mountain views!
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'30px', marginTop: '30px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={denver1}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={denver2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={denver3}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={denver4}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <h2 id='float' className='sectionH2'>
                            Maine
                        </h2>
                        <h2 id='float2'>
                            In August 2023, my partner and I stayed at a lovely cottage on Vinalhaven, an island off the coast of Maine.
                            We spent 4 days hiking, eating lobster, and getting some gorgeous waterfront views! The highlight of our trip was seeing the
                            most beautiful sunset over the harbor on the night before we left.
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'30px', marginTop: '30px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={maine1}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={maine2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={maine3}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={maine4}
                            className='profileImage'
                        />
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunAdventures;