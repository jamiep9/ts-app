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
import chicago1 from "./../images/adventures/chicago_1.png";
import chicago2 from "./../images/adventures/chicago_2.png";
import chicago3 from "./../images/adventures/chicago_3.png";
import chicago4 from "./../images/adventures/chicago_4.png";
import taylor1 from "./../images/adventures/ts_1.png";
import taylor2 from "./../images/adventures/ts_2.png";
import taylor3 from "./../images/adventures/ts_3.png";
import taylor4 from "./../images/adventures/ts_4.png";
import spain1 from "./../images/adventures/spain_1.png";
import spain2 from "./../images/adventures/spain_2.png";
import spain3 from "./../images/adventures/spain_3.png";
import spain4 from "./../images/adventures/spain_4.png";

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
                <Row>
                    <Col span={14}>
                        <h2 id='float' className='sectionH2'>
                            Chicago
                        </h2>
                        <h2 id='float2'>
                            My friend and I traveled from NYC to Chicago for Lollapalooza this year! This was our first ever
                            music festival and we managed to stay on our feet all four days. Some of our favorite artists we got
                            to see were Billie Eilish, Rina Sawayama, Peach Pit, and the Red Hot Chili Peppers. It unfortunately
                            rained most of the day on Saturday but by the evening, a huge rainbow came out over the festival!
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'30px', marginTop: '30px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={chicago1}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={chicago2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={chicago3}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={chicago4}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <h2 id='float' className='sectionH2'>
                            Taylor Swift at Gillette Stadium in Foxboro, MA
                        </h2>
                        <h2 id='float2'>
                            In May 2023, I got the privilege of seeing the Eras Tour live at Gillette Stadium! My sister thankfully
                            managed to snag presale tickets despite waiting in an hour-long virtual queue, but it was worth the wait to 
                            see Taylor Swift perform live. Despite it raining for most of the show, Taylor gave a beautiful performance
                            and the rain only enhanced how incredible it was! 
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'30px', marginTop: '30px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={taylor1}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={taylor2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={taylor3}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={taylor4}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <h2 id='float' className='sectionH2'>
                            Madrid and Toledo, Spain
                        </h2>
                        <h2 id='float2'>
                            My friend and I had our first international trip together the very first week of 2023!
                            We had an incredible time visiting beautiful and historic Madrid, and spent a day excursion
                            in Toledo. It was such a great way to kick off 2023 with one of my favorite people!
                        </h2>
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'30px', marginTop: '30px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={spain1}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={spain2}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={spain3}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={spain4}
                            className='profileImage'
                        />
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunAdventures;