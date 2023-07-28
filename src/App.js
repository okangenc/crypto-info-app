import React from 'react';
import { Switch, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space, Menu } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import './App.css';
import 'antd/dist/reset.css';

const App = () => {
  return (
    <div className = 'app'>
        <div className = 'navbar'>
          <Navbar />
        </div>
        <div className = 'main'>
          <Layout>
            <div className="routes">

              {/* Routing to components */}
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>

            </div>
          </Layout>
        
          <div className = 'footer'>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center' }}>
              CoinLive <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>

        {/* menu */}
        <Menu theme="dark">

        </Menu>
    </div>
  )
}

export default App