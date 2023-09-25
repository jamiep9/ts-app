import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContent from '../components/HomeContent';
import SecondaryContent from '../components/SecondaryContent';

export const RoutePaths: React.FC = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                <Route path="/experience" element={<SecondaryContent />}></Route>
                <Route path="/projects" element={<div>THREE</div>}></Route>
                <Route path="/fun" element={<div>FOUR</div>}></Route>
                <Route path="/contact" element={<div>CONTACT</div>}></Route>
            </Routes>
        </div>
    )
};

export default RoutePaths;