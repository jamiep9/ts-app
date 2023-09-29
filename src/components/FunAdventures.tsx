import React, { useState } from 'react';
import { Row, Col, Image} from 'antd';
import "./FunContent.css";

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
                            I went on a solo trip to Denver, Colorado in September 2023
                        </h2>
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
            </div>
        </>
    );

}

export default FunAdventures;