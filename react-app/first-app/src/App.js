// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  //
  return (
   <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Route path="/dialogs">
           
          </Route>
          <Profile />
         
          
        
      </div>
   </BrowserRouter>   
  )
}
//
export default App;
