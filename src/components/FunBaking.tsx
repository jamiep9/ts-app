import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import { Link } from 'react-router-dom';
import "./FunContent.css";
import cakeCereal from "./../images/baking/cake_cereal.png";
import cakeHalloween from "./../images/baking/cake_halloween.png";
import macaronEyeballs from "./../images/baking/macarons_eyeballs.png";
import macaronPink from "./../images/baking/macarons_pink.png";
import cakeRoses from "./../images/baking/cake_roses.png";
import macaronEaster from "./../images/baking/macarons_easter.png";
import cakeTrans from "./../images/baking/cake_trans.png";
import handmadeFettuccine from "./../images/baking/handmade_fettuccine.png";
import cakeLeo from "./../images/baking/cake_leo.png";
import cakeChristmas from "./../images/baking/cake_christmas.png";
import cakeBlue from "./../images/baking/cake_blue.png";
import macaronEverything from "./../images/baking/macaron_everything.png";
import cakeValentines from "./../images/baking/cake_valentines.png";
import macaronCandyHearts from "./../images/baking/macarons_candyhearts.png";
import cakePinkPurple from "./../images/baking/cake_pinkpurple.png";
import cupcakesPink from "./../images/baking/cupcakes_pink.png";

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
                <Row gutter={50} style={{marginBottom:'50px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeCereal}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeHalloween}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={macaronEyeballs}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={macaronPink}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'50px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeRoses}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={macaronEaster}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeTrans}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={handmadeFettuccine}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'50px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeLeo}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeChristmas}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeBlue}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={macaronEverything}
                            className='profileImage'
                        />
                    </Col>
                </Row>
                <Row gutter={50} style={{marginBottom:'50px'}} id='float2'>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakeValentines}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={macaronCandyHearts}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cakePinkPurple}
                            className='profileImage'
                        />
                    </Col>
                    <Col span={4} className='gutter-row'>
                        <Image
                            src={cupcakesPink}
                            className='profileImage'
                        />
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FunBaking;