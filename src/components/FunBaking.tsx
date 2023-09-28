import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";
import cakeImage from "./../images/cake-funpage.png";
import sunsetImage from "./../images/sunset-fun.png";
import runningImage from "./../images/running-fun.png";

export const FunBaking: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>Baking</h1>
            </div>
        </>
    );

}

export default FunBaking;