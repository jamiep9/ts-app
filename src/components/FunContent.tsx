import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";
import { useNavigate } from 'react-router-dom';
import cakeImage from "./../images/cake-funpage.png";
import sunsetImage from "./../images/sunset-fun.png";
import runningImage from "./../images/running-fun.png";

export const FunContent: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>For Fun</h1>
                <Row gutter={50} style={{marginBottom:'50px'}} id='float2'>
                    <Col span={7} className='gutter-row'>
                        <div 
                            className='container'
                            onClick={() => navigate('/fun/baking')}
                        >
                            <Image
                                src={cakeImage}
                                className='profileImage image'
                                preview={false}
                            />
                            <div className='overlay'></div>
                            <div className='text'>
                                <h1 className='headerText'>Baking</h1>
                                <br></br>
                                <h2 className='headerText2'>View a gallery of cakes and</h2>
                                <h2 className='headerText2'>baked goods I am proud to</h2>
                                <h2 className='headerText2'>have created!</h2>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} className='gutter-row'>
                        <div 
                            className='container'
                            onClick={() => navigate('/fun/adventures')}
                        >
                            <Image
                                src={sunsetImage}
                                className='profileImage image'
                                preview={false}
                            />
                            <div className='overlay'></div>
                            <div className='text'>
                                <h1 className='headerText'>Adventures</h1>
                                <br></br>
                                <h2 className='headerText2'>My most recent hikes,</h2>
                                <h2 className='headerText2'>trips, and other cool</h2>
                                <h2 className='headerText2'>places!</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={50} id='float2'>
                    <Col span={7} className='gutter-row'>
                        <div 
                            className='container'
                            onClick={() => navigate('/fun/running')}
                        >
                            <Image
                                src={runningImage}
                                className='profileImage image'
                                preview={false}
                            />
                            <div className='overlay'></div>
                            <div className='text'>
                                <h1 className='headerText'>Running</h1>
                                <br></br>
                                <h2 className='headerText2'>I have trained throughout</h2>
                                <h2 className='headerText2'>2023 to qualify for the</h2>
                                <h2 className='headerText2'>2024 NYC Marathon!</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunContent;