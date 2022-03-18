// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
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
          <Routes>
            <Route path="/profile" element = {<Profile/>}/>
            <Route path="/dialogs" element = {<Dialogs/>}/>  
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
}
//
export default App;
