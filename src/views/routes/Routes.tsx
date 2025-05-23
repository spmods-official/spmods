import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutContainer from '@/views/static/AboutContainer';
import DemoContainer from '@/views/static/DemoContainer';



const PageRoutes: React.FC = () => (
    <Routes>
        <Route path="/about" Component={AboutContainer} />
        <Route path="/demo" Component={DemoContainer} />
    </Routes>
)

export default PageRoutes;
