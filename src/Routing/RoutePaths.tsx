import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContent from '../components/HomeContent';
import { ExperienceContent } from '../components/ExperienceContent';
import ProjectsContent from '../components/ProjectsContent';
import FunContent from '../components/FunContent';
import ContactContent from '../components/ContactContent';

export const RoutePaths: React.FC = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                <Route path="/experience" element={<ExperienceContent />}></Route>
                <Route path="/projects" element={<ProjectsContent />}></Route>
                <Route path="/fun" element={<FunContent />}></Route>
                <Route path="/contact" element={<ContactContent />}></Route>
            </Routes>
        </div>
    )
};

export default RoutePaths;