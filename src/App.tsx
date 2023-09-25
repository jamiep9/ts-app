import { Button, Layout } from 'antd';
import React from 'react';
import NavBar from './components/NavBar';
import RoutePaths from './Routing/RoutePaths';
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
  <div style={{backgroundColor:"#c3d9e6"}}>
    <div className="App">
      <NavBar />
    </div>
    <RoutePaths />
    <Footer style={{ 
            borderTop: '1px solid #e8e8e8',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            textAlign: 'center'}}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
  </div>
);

export default App;