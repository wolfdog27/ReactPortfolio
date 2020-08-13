import React from 'react';
import './App.css';
import About from './pages/About';
import Footer from './components/Footer'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Sider from './components/Sider'



function App() {
  return (
    <div className="app">
        <Header />
        <Sider />
        <Wrapper>
          <About/>
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
