import './App.css';
import React , {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [progress, setProgress] = useState(20)
  return (
    <div className="App">
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={6} country='in' category='top' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={6} country='in' category='business' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={6} country='in' category='entertainment' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={6} country='in' category='health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={6} country='in' category='science' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={6} country='in' category='sports' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={6} country='in' category='technology' />} />
        </Routes>
      </Router>
    </div>  
  );
}
