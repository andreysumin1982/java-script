// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//
function App() {
  //
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />

        <div> 
          <Routes>  {/* Подключаем маршруты */}
            <Route path="/profile" element = {<Profile />}/>
            <Route path="/dialogs" element = {<Dialogs />}/>
            <Route path="/news" element = {<News />}/>
            <Route path="/music" element = {<Music />}/>
            <Route path="/settings" element = {<Settings />}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}
//
export default App;
