// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  // Верска GRID в одной компоненте 
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}
//
export default App;
