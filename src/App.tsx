import { Button } from 'antd';
import React from 'react';
import NavBar from './components/NavBar';
import RoutePaths from './Routing/RoutePaths';

const App: React.FC = () => (
  <div>
    <div className="App">
      <NavBar />
    </div>
    <RoutePaths />
  </div>
);

export default App;