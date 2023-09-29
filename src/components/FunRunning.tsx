import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";

export const FunRunning: React.FC = () => {

    return (
        <>
            <div className='profileImageDiv' style={{margin: '50px 0px 50px 0px'}}>
                <h1 id='float'>Running</h1>
            </div>
        </>
    );

}

export default FunRunning;