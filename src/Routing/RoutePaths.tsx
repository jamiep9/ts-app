import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContent from '../components/HomeContent';
import { ExperienceContent } from '../components/ExperienceContent';
import ProjectsContent from '../components/ProjectsContent';
import FunContent from '../components/FunContent';
import ContactContent from '../components/ContactContent';
import FunBaking from '../components/FunBaking';
import FunAdventures from '../components/FunAdventures';
import FunRunning from '../components/FunRunning';

export const RoutePaths: React.FC = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                <Route path="/experience" element={<ExperienceContent />}></Route>
                <Route path="/projects" element={<ProjectsContent />}></Route>
                <Route path="/fun" element={<FunContent />}></Route>
                <Route path="/fun/baking" element={<FunBaking />}></Route>
                <Route path="/fun/adventures" element={<FunAdventures />}></Route>
                <Route path="/fun/running" element={<FunRunning />}></Route>
                <Route path="/contact" element={<ContactContent />}></Route>
            </Routes>
        </div>
    )
};

export default RoutePaths;