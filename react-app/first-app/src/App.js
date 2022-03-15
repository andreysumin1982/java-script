// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

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
