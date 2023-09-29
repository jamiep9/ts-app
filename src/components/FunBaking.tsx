import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import { Link } from 'react-router-dom';
import "./FunContent.css";
import cakeImage from "./../images/cake-funpage.png";
import sunsetImage from "./../images/sunset-fun.png";
import runningImage from "./../images/running-fun.png";

export const FunBaking: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>Baking</h1>
                <Row>
                    <Col span={14}>
                        <h2 id='float2'>
                            One of my favorite hobbies is baking for family and friends, and experimenting with new recipes and designs.
                            I also volunteer for the NYC chapter of For Goodness Cakes in my spare time, a charity which assigns bakers
                            to bring cakes or other baked goods to the houses of local underprivileged children for events such as
                            birthdays or graduation. I have also worked as a vendor at a few local pop-up events throughout NYC and
                            partnered with pop-up organizations FAD Market and New Women Space. I would love to one day be a contestant
                            on the Great British Bake Off, but until then, I'll keep improving my skills and trying new recipes!
                        </h2>
                        <h2 id='float2'>
                            Follow my <Link to='https://www.instagram.com/macaronandcheesecake/' target="_blank" rel="noopener noreferrer" className='bakingLink'>baking Instagram</Link> or check out my gallery below to see my favorite bakes!
                        </h2>
                    </Col>
                </Row>
                <br></br>
                <Row gutter={50}>
                    <Col span={14} className='gutter-row'>idk</Col>
                </Row>
            </div>
        </>
    );

}

export default FunBaking;