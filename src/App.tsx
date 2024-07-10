import { Button, Layout } from 'antd';
import React from 'react';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import RoutePaths from './Routing/RoutePaths';
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
  <div style={{backgroundColor:"#c3d9e6"}}>
    <div className="App">
      <NavBar />
    </div>
    <RoutePaths />
    <Footer style={{ 
            borderTop: '1px solid #bac7d1',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: '#d3dce3'}}
          >
            ©2024 Jamie Poole <Link to='https://github.com/jamiep9/ts-app' target="_blank" rel="noopener noreferrer" style={{marginLeft:'15px'}}>View Source Code</Link>
          </Footer>
  </div>
);

export default App;