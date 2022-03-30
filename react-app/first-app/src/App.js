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
function App(props) {
  //
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav friends={props.state.friends}/>

        <div>
          <Routes>  {/* Подключаем маршруты  и передаем через props данные*/}
            {/*В React Router v6 что-бы было поведение как без exact, нужно писать так: 
              <Route path="/dialogs/*" element={<Dialogs/>} /> ( внимание на звездочку)
              Точно также будет поведение <Route exact path="/dialogs/*" element={<Dialogs/>}
              -- ничего не будет маршрутизировать дальше dialogs/. */}
            <Route path="/profile" element={<Profile postsData = {props.state.profilePage.postsData} 
              addPost={props.addPost}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsData = {props.state.messagesPage.dialogsData}
              messagesData={props.state.messagesPage.messagesData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}
//
export default App;
