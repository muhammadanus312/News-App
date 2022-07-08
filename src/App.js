// import logo from './logo.svg';

import './App.css';
import React  from 'react'
import {useState } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  const [progress, setprogress] = useState(0)
  const changeProgress=(progress)=>{
    // this.setState({progress:progress})
    setprogress(progress)
  }
  return (

    <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          {/* using key for re render of componenet */}
            <Route path="/" element={<News changeProgress={changeProgress} key="general" pagesize={12} category="general" country="us"/>} />
            <Route path="/home" element={<News changeProgress={changeProgress} key="general" pagesize={12} category="general" country="us"/>} />
            <Route path="/Health" element={<News changeProgress={changeProgress} key="health" props={{pagesize:3, category:"health", country:"us"}} />}/>
            <Route path="/Sports" element={<News changeProgress={changeProgress} key="sports" pagesize={12} category="sports" country="us"/>}/>
            <Route path="/Science" element={<News changeProgress={changeProgress} key="science" pagesize={12} category="science" country="us"/>}/>
            <Route path="/Entertainment" element={<News changeProgress={changeProgress} key="entertainment" pagesize={12} category="entertainment" country="us"/>}/>
            <Route path="/General" element={<News changeProgress={changeProgress} key="general" pagesize={12} category="general" country="us"/>}/>
            <Route path="/Technology" element={<News changeProgress={changeProgress} key="technology" pagesize={12} category="technology" country="us"/>}/>
            <Route path="/Business" element={<News changeProgress={changeProgress} key="business" pagesize={12} category="business" country="us"/>}/>
        </Routes>
        </Router>

      </div>
  )
}








