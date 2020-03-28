import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className="wrapper">
    <Nav />
        <div className="wrapper-right">
          <Header />
          <div className="wrapper-right-bloks">
            <Content />
            <Sidebar />

                    <Route path='/dashbord' component={Dashbord} />
                    {/* <Route path='/training' component={Training} /> */}
                    {/* <Route path='/duel' component={} /> */}
                    <Route path='/table' component={Table} />

          </div>
      </div>
    </div>
    </BrowserRouter>);
}

export default App;